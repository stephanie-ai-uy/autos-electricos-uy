// Avisa por email (y opcionalmente por Telegram) cuando llega un mensaje nuevo por el formulario del sitio.
// Sin claves compartidas: recibe solo el id y comprueba en la base que el mensaje existe, es reciente y no fue avisado antes.
// Secretos necesarios (Edge Functions → Secrets): GMAIL_USER, GMAIL_APP_PASSWORD. Opcionales: NOTIFY_TO, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
import { createClient } from "npm:@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const line = (s: unknown) => String(s ?? "").replace(/[\r\n]+/g, " ").slice(0, 120);

Deno.serve(async (req) => {
  try {
    const { id } = await req.json();
    if (!id || typeof id !== "string") return new Response("bad request", { status: 400 });
    const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: lead } = await sb.from("lead_requests").select("*").eq("id", id).is("notified_at", null)
      .gte("created_at", new Date(Date.now() - 10 * 60e3).toISOString()).maybeSingle();
    if (!lead) return new Response("nothing to do");

    const user = Deno.env.get("GMAIL_USER"), pass = Deno.env.get("GMAIL_APP_PASSWORD");
    const to = Deno.env.get("NOTIFY_TO") ?? user!;
    const text = `Nueva sugerencia en Autos Eléctricos UY\n\nTema: ${lead.topic}\nNombre: ${lead.name}\nContacto: ${lead.contact}\nVehículo: ${lead.vehicle_id ?? "-"}\nPágina: ${lead.origin_page ?? "-"}\n\nMensaje:\n${lead.message ?? "(sin mensaje)"}`;
    let sent = false;

    if (user && pass) {
      const client = new SMTPClient({ connection: { hostname: "smtp.gmail.com", port: 465, tls: true, auth: { username: user, password: pass } } });
      await client.send({
        from: user, to, subject: `Nueva sugerencia (${line(lead.topic)}) de ${line(lead.name)}`, content: text,
        html: `<p><b>Nueva sugerencia en Autos Eléctricos UY</b></p><p>Tema: ${esc(lead.topic)}<br>Nombre: ${esc(lead.name)}<br>Contacto: ${esc(lead.contact)}<br>Vehículo: ${esc(lead.vehicle_id ?? "-")}<br>Página: ${esc(lead.origin_page ?? "-")}</p><p>${esc(lead.message ?? "(sin mensaje)").replace(/\n/g, "<br>")}</p>`,
      });
      await client.close();
      sent = true;
    }
    const tgT = Deno.env.get("TELEGRAM_BOT_TOKEN"), tgC = Deno.env.get("TELEGRAM_CHAT_ID");
    if (tgT && tgC) {
      const r = await fetch(`https://api.telegram.org/bot${tgT}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: tgC, text }) });
      sent = sent || r.ok;
    }
    if (sent) await sb.from("lead_requests").update({ notified_at: new Date().toISOString() }).eq("id", id);
    return new Response(sent ? "sent" : "no channel configured");
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
});
