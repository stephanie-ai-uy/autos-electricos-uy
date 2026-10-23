/* Foto de fondo del encabezado: auto eléctrico en una sala de exhibición (Wikimedia Commons, CC0).
   Se recorta el borde derecho y se difuminan dos zonas donde aparecían personas (una detrás del capó y un reflejo en la puerta).
   Todo se hace en el navegador sobre una copia; el original no se modifica. Si algo falla, se usa la foto sin retocar. */
(function () {
  var URL0 = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Xiaomi_SU7_004.jpg/1920px-Xiaomi_SU7_004.jpg";
  var root = document.documentElement;
  function use(u) { root.style.setProperty("--hero-photo", 'url("' + u + '")'); }
  var img = new Image(); img.crossOrigin = "anonymous";
  img.onerror = function () { use(URL0); };
  img.onload = function () {
    try {
      var W = img.naturalWidth, H = img.naturalHeight, cw = Math.round(W * 0.925);
      var c = document.createElement("canvas"); c.width = cw; c.height = H;
      var x = c.getContext("2d"); x.drawImage(img, 0, 0, cw, H, 0, 0, cw, H);
      var k = cw / 1776, s = document.createElement("canvas"); s.width = Math.round(cw / 28); s.height = Math.round(H / 28);
      var sx = s.getContext("2d"); sx.imageSmoothingQuality = "high"; sx.drawImage(c, 0, 0, s.width, s.height);
      var b = document.createElement("canvas"); b.width = cw; b.height = H;
      var bx = b.getContext("2d"); bx.imageSmoothingQuality = "high"; bx.drawImage(s, 0, 0, cw, H);
      function mask(px, py, rx, ry) {
        var m = document.createElement("canvas"); m.width = cw; m.height = H; var mx = m.getContext("2d");
        mx.save(); mx.translate(px, py); mx.scale(rx, ry);
        var g = mx.createRadialGradient(0, 0, 0, 0, 0, 1);
        g.addColorStop(0, "rgba(0,0,0,1)"); g.addColorStop(0.68, "rgba(0,0,0,1)"); g.addColorStop(1, "rgba(0,0,0,0)");
        mx.fillStyle = g; mx.fillRect(-1, -1, 2, 2); mx.restore();
        mx.globalCompositeOperation = "source-in"; return { m: m, mx: mx };
      }
      function blurPatch(px, py, rx, ry) { var o = mask(px, py, rx, ry); o.mx.drawImage(b, 0, 0); x.drawImage(o.m, 0, 0); }
      function avg(px, py) { var d = x.getImageData(Math.round(px) - 4, Math.round(py) - 4, 9, 9).data, r = 0, g = 0, bl = 0, n = d.length / 4; for (var i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; bl += d[i + 2]; } return "rgb(" + Math.round(r / n) + "," + Math.round(g / n) + "," + Math.round(bl / n) + ")"; }
      function gradPatch(px, py, rx, ry) {
        var o = mask(px, py, rx, ry), gr = o.mx.createLinearGradient(0, py - ry, 0, py + ry);
        gr.addColorStop(0, avg(px, py - ry * 1.3)); gr.addColorStop(1, avg(px, py + ry * 1.3));
        o.mx.fillStyle = gr; o.mx.fillRect(0, 0, cw, H); x.drawImage(o.m, 0, 0);
      }
      blurPatch(222, 455, 105, 185);      // persona detrás del capó
      gradPatch(1428, 700, 80, 118);       // reflejo en la puerta
      blurPatch(1428, 700, 55, 80);        // suaviza el centro del reflejo
      c.toBlob(function (bl) { if (bl) use(URL.createObjectURL(bl)); else use(URL0); }, "image/jpeg", 0.88);
    } catch (e) { use(URL0); }
  };
  img.src = URL0;
})();
