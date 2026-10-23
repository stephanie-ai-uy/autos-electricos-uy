/* Foto de fondo del encabezado: auto eléctrico nuevo en una sala de exhibición (Wikimedia Commons, CC0).
   Se recorta el borde derecho para que quede solo el auto; no se retoca nada más. Si algo falla, se usa la foto completa. */
(function () {
  var URL0 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Xiaomi_SU7_005.jpg/1920px-Xiaomi_SU7_005.jpg";
  var root = document.documentElement;
  function use(u) { root.style.setProperty("--hero-photo", 'url("' + u + '")'); }
  var img = new Image(); img.crossOrigin = "anonymous";
  img.onerror = function () { use(URL0); };
  img.onload = function () {
    try {
      var W = img.naturalWidth, H = img.naturalHeight, cw = Math.round(W * 0.945);
      var c = document.createElement("canvas"); c.width = cw; c.height = H;
      c.getContext("2d").drawImage(img, 0, 0, cw, H, 0, 0, cw, H);
      c.toBlob(function (bl) { use(bl ? URL.createObjectURL(bl) : URL0); }, "image/jpeg", 0.9);
    } catch (e) { use(URL0); }
  };
  img.src = URL0;
})();
