/* Foto de fondo del encabezado (provista por la titular del sitio). Para cambiarla, reemplazá assets/hero.webp. */
document.documentElement.style.setProperty("--hero-photo", 'url("' + new URL("assets/hero.webp", document.baseURI).href + '")');
