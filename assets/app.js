/* Utilidades compartidas: layout, formato, estados */
window.EV = (function () {
  const D = window.EVDATA;
  const NAV = [["index.html", "Inicio", "home"], ["catalogo.html", "Catálogo", "cat"], ["comparador.html", "Comparador", "cmp"], ["ranking.html", "Más vendidos", "rank"], ["financiacion.html", "Financiación", "fin"], ["beneficios.html", "Beneficios", "ben"], ["tco.html", "Coste total", "tco"], ["guias.html", "Guías y garantías", "gui"], ["seguros.html", "Seguros", "seg"], ["metodologia.html", "Fuentes", "met"], ["contacto.html", "Sugerencias", "con"]];
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const NI = "No informado";
  const fmtNum = (n, d = 0) => n == null ? NI : Number(n).toLocaleString("es-UY", { minimumFractionDigits: d, maximumFractionDigits: d });
  const fmtMoney = (n, cur) => n == null ? "Consultar" : (cur === "UYU" ? "$ " : "US$ ") + fmtNum(n, 0);
  const STATUS = { disponible: ["Comercializado (stock a confirmar)", "ok"], verificar: ["Pendiente de verificación", "warn"], anunciado: ["Anunciado", ""], consulta: ["Bajo consulta", ""], discontinuado: ["Discontinuado", "bad"] };
  const statusBadge = s => { const x = STATUS[s] || STATUS.verificar; return `<span class="badge ${x[1]}">${x[0]}</span>`; };
  const daysSince = iso => iso ? Math.floor((Date.now() - new Date(iso + (iso.length === 7 ? "-01" : "")).getTime()) / 864e5) : null;
  function priceStale(p) { const d = daysSince(p.validOn); return d != null && d > 60; }
  function priceHtml(v) {
    const p = v.price;
    if (p.list == null) return `<span class="price">Consultar</span><div class="small muted">${esc(p.note)}</div>`;
    const stale = priceStale(p) ? ` <span class="badge warn" title="Más de 60 días desde la fuente">Precio posiblemente desactualizado</span>` : "";
    return `<span class="price">${fmtMoney(p.list, p.currency)}</span> <span class="small muted">${esc(p.currency)}</span><div class="small muted">Precio de lista · fuente del ${esc(p.validOn)} · verificación: ${esc(p.verification)}${stale}</div>`;
  }
  function layout() {
    const page = document.body.dataset.page;
    const h = `<a class="wrap" href="#main" style="position:absolute;left:-999px" onfocus="this.style.left='8px'">Saltar al contenido</a>
<header class="site"><div class="wrap bar"><a class="logo" href="index.html">Autos Eléctricos <span>UY</span> <small style="font-weight:400;font-size:.7rem;color:var(--muted);display:block;line-height:1">Comparativa de precios, financiación y beneficios</small></a>
<div class="lang notranslate" translate="no" role="group" aria-label="Idioma / Language / Langue"><button type="button" data-l="es" title="Español">ES</button><button type="button" data-l="en" title="English">EN</button><button type="button" data-l="fr" title="Français">FR</button></div>
<button class="menu" id="menuBtn" aria-expanded="false" aria-controls="mainNav">Menú</button>
<nav class="main" id="mainNav" aria-label="Principal">${NAV.map(n => `<a href="${n[0]}" class="${n[2] === page ? "on" : ""}">${n[1]}</a>`).join("")}</nav></div></header>
<div class="banner"><div class="wrap">Herramienta independiente de información. No vende vehículos ni da asesoramiento financiero o jurídico. Datos con fuente y fecha de consulta (${esc(D.checked)}); lo no verificado se marca como tal.</div></div>`;
    const f = `<footer class="site"><div class="wrap">
<p><strong>Autos Eléctricos UY</strong> — Comparativa independiente de autos eléctricos en Uruguay. Un proyecto de <strong>Stephanie AI</strong>. Última revisión de datos: ${esc(D.checked)}.</p>
<p class="small muted" id="trNote" hidden>Traducción automática de Google Translate: puede tener errores. Los datos de referencia (precios, fichas y fuentes) están en español y en dólares o pesos uruguayos; ante cualquier duda vale el original en español.</p>
<p><a href="metodologia.html">Fuentes y metodología</a> · <a href="legal.html">Privacidad, cookies y condiciones</a> · No hay publicidad ni patrocinios activos en este sitio.</p></div></footer>`;
    document.body.insertAdjacentHTML("afterbegin", h);
    const mb=document.getElementById("menuBtn"),mn=document.getElementById("mainNav");mb.onclick=()=>{const o=mn.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
    document.body.insertAdjacentHTML("beforeend", f);
    initLang();
  }
  /* Traducción al inglés y al francés con Google Translate. Solo se carga el script de Google si la persona elige un idioma
     (hasta entonces el sitio no contacta a ningún tercero). Se guarda la elección en la cookie «googtrans». */
  function curLang() { const m = document.cookie.match(/(?:^|;\s*)googtrans=\/es\/(en|fr)/); return m ? m[1] : "es"; }
  function setLang(l) {
    const host = location.hostname, exp = "expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    document.cookie = "googtrans=;" + exp; document.cookie = "googtrans=;" + exp + ";domain=" + host; document.cookie = "googtrans=;" + exp + ";domain=." + host;
    if (l !== "es") document.cookie = "googtrans=/es/" + l + ";path=/";
    location.reload();
  }
  function initLang() {
    const l = curLang(), box = document.querySelector(".lang");
    box.querySelectorAll("button").forEach(b => { b.classList.toggle("on", b.dataset.l === l); b.setAttribute("aria-pressed", b.dataset.l === l); b.onclick = () => { if (b.dataset.l !== l) setLang(b.dataset.l); }; });
    if (l === "es") return;
    document.getElementById("trNote").hidden = false;
    document.body.insertAdjacentHTML("beforeend", '<div id="gt_el" style="display:none"></div>');
    window.googleTranslateElementInit = () => new google.translate.TranslateElement({ pageLanguage: "es", includedLanguages: "en,fr", autoDisplay: false }, "gt_el");
    const sc = document.createElement("script"); sc.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; sc.async = true; document.head.appendChild(sc);
  }
  const CAR='<div class="car" aria-hidden="true"><svg viewBox="0 0 220 70" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 48h14M196 48h14M30 48c-8 0-12-3-12-9 0-8 6-12 16-14l28-6c8-6 18-12 34-12h28c18 0 30 8 40 18l16 5c8 2 12 6 12 12 0 4-3 6-8 6h-6"/><path d="M62 24h38M118 24h34M100 14v12M118 14v12"/><circle cx="56" cy="50" r="10"/><circle cx="164" cy="50" r="10"/><path d="M92 48h24"/></svg></div>';
  const typeLabel = t => (D.typeLabels||{})[t] || t;
  const typeBadge = t => `<span class="badge ${t==="BEV"?"ok":t==="PHEV"?"":"warn"}">${t}</span>`;
  const originOf = brand => (D.origins||{})[brand] || { country: "No informado" };
  const originBadge = brand => { const o = originOf(brand); return `<span class="badge" title="${esc(o.note||"País de origen de la marca")}">${esc(o.country)}</span>`; };
  /* Números escritos a la uruguaya: "35.000" = 35000, "35.000,50" = 35000,5, "0,25" = 0,25 y "0.25" = 0,25.
     Devuelve "" si el campo está vacío y NaN si no se entiende (nunca inventa un valor). */
  function num(raw) {
    let t = String(raw == null ? "" : raw).trim().replace(/\s|US\$|\$|u\$s/gi, "");
    if (t === "") return "";
    if (t.includes(",")) t = t.replace(/\./g, "").replace(",", ".");
    else if (/^\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, "");
    return /^-?\d*\.?\d+$/.test(t) ? Number(t) : NaN;
  }
  /* Los campos type=number cambian solos con la rueda del mouse o el trackpad y malinterpretan «35.000»:
     en los simuladores se usan campos de texto con teclado numérico y se interpretan con num(). */
  function plainNumbers() {
    document.querySelectorAll("form#f input[type=number]").forEach(i => { i.type = "text"; i.inputMode = "decimal"; i.autocomplete = "off"; i.removeAttribute("min"); i.removeAttribute("max"); i.removeAttribute("step"); });
  }
  function getVehicles() { return D.vehicles; }
  function byId(id) { return D.vehicles.find(v => v.id === id); }
  document.addEventListener("DOMContentLoaded", layout);
  if (["fin", "tco"].includes(document.body && document.body.dataset.page)) document.addEventListener("DOMContentLoaded", plainNumbers);
  return { D, CAR, typeLabel, typeBadge, originOf, originBadge, esc, NI, num, fmtNum, fmtMoney, statusBadge, priceHtml, priceStale, getVehicles, byId, daysSince };
})();
