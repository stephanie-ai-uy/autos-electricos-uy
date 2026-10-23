/* Estadísticas propias y anónimas (ver supabase/migrations/003_analytics.sql y legal.html).
   Sin cookies, sin IP, sin datos de formularios. Respeta «No rastrear» del navegador. */
(function () {
  var C = window.EVCONFIG || {};
  if (!C.SUPABASE_URL || !C.SUPABASE_ANON_KEY) return;
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
  var sid; try { sid = sessionStorage.getItem("sid"); if (!sid) { sid = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); sessionStorage.setItem("sid", sid); } } catch (e) { sid = null; }
  var w = innerWidth, dev = w < 700 ? "mobile" : w < 1100 ? "tablet" : "desktop";
  var ref = ""; try { var q = new URLSearchParams(location.search).get("utm_source"); if (q) ref = "utm:" + q.slice(0, 40); else if (document.referrer) { var h = new URL(document.referrer).hostname; if (h !== location.hostname) ref = h.slice(0, 80); } } catch (e) {}
  var lang = (navigator.language || "").slice(0, 10);
  function send(kind, name, meta) {
    try {
      fetch(C.SUPABASE_URL + "/rest/v1/site_events", { method: "POST", keepalive: true,
        headers: { "Content-Type": "application/json", apikey: C.SUPABASE_ANON_KEY, Authorization: "Bearer " + C.SUPABASE_ANON_KEY, Prefer: "return=minimal" },
        body: JSON.stringify({ sid: sid, kind: kind, name: String(name).slice(0, 60), ref: ref || null, dev: dev, lang: lang || null, meta: meta ? String(meta).slice(0, 80) : null }) }).catch(function () {});
    } catch (e) {}
  }
  window.EVTRACK = function (name, meta) { send("action", name, meta); };
  var page = location.pathname.split("/").pop() || "index.html", m = null;
  try { var p = new URLSearchParams(location.search); m = p.get("id") || p.get("ids") || null; } catch (e) {}
  send("view", page, m);
})();
