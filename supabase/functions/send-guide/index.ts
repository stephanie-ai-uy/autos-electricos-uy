// Envía la guía del certificado (PDF guardado en Storage, bucket privado «guides») al comprador cuando la administradora lo confirma.
// Solo puede usarla una administradora con sesión iniciada en el panel (se comprueba con is_admin()).
// Secretos necesarios: GMAIL_USER, GMAIL_APP_PASSWORD. Opcional: NOTIFY_TO (copia para la administradora).
import { createClient } from "npm:@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { encodeBase64 } from "jsr:@std/encoding@1/base64";

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, "Content-Type": "application/json" } });
const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const auth = req.headers.get("Authorization") ?? "";
    const url = Deno.env.get("SUPABASE_URL")!;
    const asUser = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
    const { data: isAdmin } = await asUser.rpc("is_admin");
    if (isAdmin !== true) return json({ error: "No autorizada" }, 403);

    const { sale_id } = await req.json();
    if (!sale_id) return json({ error: "Falta sale_id" }, 400);
    const sb = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: sale } = await sb.from("sales").select("*").eq("id", sale_id).maybeSingle();
    if (!sale) return json({ error: "Venta no encontrada" }, 404);
    if (sale.status === "cancelada") return json({ error: "La venta está cancelada" }, 400);

    const file = await sb.storage.from("guides").download("Guia-CEE-2026.pdf");
    if (file.error || !file.data) return json({ error: "No se encontró Guia-CEE-2026.pdf en el almacenamiento (bucket guides)" }, 500);
    const pdf = new Uint8Array(await file.data.arrayBuffer());

    const user = Deno.env.get("GMAIL_USER"), pass = Deno.env.get("GMAIL_APP_PASSWORD");
    if (!user || !pass) return json({ error: "Faltan los secretos GMAIL_USER / GMAIL_APP_PASSWORD" }, 500);
    const name = String(sale.buyer_name).slice(0, 100);
    const body = `Hola ${name}, gracias por tu compra. Te adjunto la guía paso a paso del Certificado de Eficiencia Energética 2026 (PDF).

Cuando tengas listos tus documentos, respondé este email con: foto de la factura, foto de la libreta (frente y dorso), foto del odómetro con fecha y el Excel completo. Te respondo con lo que haya que corregir dentro de los 3 días hábiles desde que reciba todo.

Importante: no me mandes contraseñas ni claves de gub.uy, y tapá el número de tu cuenta bancaria. La postulación la hacés vos con tu usuario.

Si preferís consultar por WhatsApp, decímelo por acá y te paso el contacto.

Saludos,
Stephanie
Autos Eléctricos UY · Servicio independiente, sin relación con el MIEM; no garantiza aprobación ni monto.`;
    const client = new SMTPClient({ connection: { hostname: "smtp.gmail.com", port: 465, tls: true, auth: { username: user, password: pass } } });
    await client.send({
      from: user, to: sale.buyer_email, bcc: Deno.env.get("NOTIFY_TO") ?? user, replyTo: user,
      subject: "Tu guía CEE 2026 + cómo pedir la revisión", content: body,
      html: `<p>${esc(body).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")}</p>`,
      attachments: [{ filename: "Guia-CEE-2026.pdf", content: encodeBase64(pdf), encoding: "base64", contentType: "application/pdf" }],
    });
    await client.close();
    await sb.from("sales").update({ status: "entregada", guide_sent_at: new Date().toISOString() }).eq("id", sale_id);
    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: "Error al enviar: " + (e instanceof Error ? e.message : "desconocido") }, 500);
  }
});
