/* Autos Eléctricos UY — datos del catálogo.
   REGLA: aquí solo hay datos con fuente. Lo desconocido va como null y se muestra
   como "No informado" / "Consultar". Fecha de consulta de todas las fuentes: 2026-10-22.
   Para actualizar: editar este archivo (ver docs/ACTUALIZAR-DATOS.md). */
window.EVDATA = (function () {
  const CHECKED = "2026-10-22";

  const sources = {
    mg: { name: "El Observador — «Tres modelos, precios competitivos…» (MG)", url: "https://www.elobservador.com.uy/tres-modelos-precios-competitivos-y-una-apuesta-electrica-asi-mg-busca-ganar-terreno-uruguay-n6058682", date: "2026-09-01", type: "Prensa (cita al importador Eximar)" },
    teslaPrecio: { name: "El Observador — BYD vuelve a bajar precios ante la llegada de Tesla", url: "https://www.elobservador.com.uy/cafe-y-negocios/tesla/en-pie-guerra-byd-vuelve-bajar-los-precios-sus-autos-electricos-la-llegada-tesla-y-la-antesala-del-imesi-n6051761", date: "2026-07-23", type: "Prensa" },
    teslaInfobae: { name: "Infobae — Tesla desembarcó en Uruguay con precios bajos", url: "https://www.infobae.com/america/america-latina/2026/07/20/tesla-desembarco-en-uruguay-con-precios-bajos-y-vendio-200-autos-en-un-dia/", date: "2026-07-20", type: "Prensa" },
    teslaHomolog: { name: "Autoblog Uruguay — Tesla ya homologó los Model 3 y Model Y", url: "https://www.autoblog.com.uy/2026/06/tesla-ya-homologo-los-model-3-y-model-y.html", date: "2026-06-22", type: "Prensa especializada" },
    teslaTest: { name: "Autoblog Uruguay — Probamos al Tesla Model 3 Premium Long Range", url: "https://www.autoblog.com.uy/2026/10/probamos-al-tesla-model-3-premium-long.html", date: "2026-10", type: "Prensa especializada" },
    byd: { name: "El Observador — BYD vuelve a bajar precios (línea Seagull)", url: "https://www.elobservador.com.uy/cafe-y-negocios/tesla/en-pie-guerra-byd-vuelve-bajar-los-precios-sus-autos-electricos-la-llegada-tesla-y-la-antesala-del-imesi-n6051761", date: "2026-07-23", type: "Prensa" },
    imesiObservador: { name: "El Observador — Gobierno resolvió aplicar IMESI a eléctricos con valor de importación > US$ 19 mil", url: "https://www.elobservador.com.uy/economia-y-empresas/impuestos-los-autos-electricos-gobierno-resolvio-aplicar-imesi-vehiculos-cuyo-valor-importacion-supere-los-us-19-mil-n6049269", date: "2026-06-30", type: "Prensa" },
    imesiAutoblog: { name: "Autoblog Uruguay — Gobierno aplicará IMESI a eléctricos…", url: "https://www.autoblog.com.uy/2026/07/gobierno-aplicara-imesi-electricos-con.html", date: "2026-07-01", type: "Prensa especializada" },
    imesiPostergar: { name: "Autoblog Uruguay — El MEF analiza aplazar el IMESI a los vehículos eléctricos", url: "https://www.autoblog.com.uy/2026/10/el-mef-analiza-aplazar-el-imesi-los.html", date: "2026-10-05", type: "Prensa especializada" },
    bbva: { name: "BBVA — BBVA promueve el desarrollo de la movilidad eléctrica en Uruguay", url: "https://www.bbva.com/es/bbva-promueve-el-desarrollo-de-la-movilidad-electrica-en-uruguay/", date: "2020-09-04", type: "Comunicado de la entidad" },
    acau: { name: "Bloomberg Línea — Uruguay dispara la venta de autos eléctricos (cifras ACAU)", url: "https://www.bloomberglinea.com/latinoamerica/uruguay/uruguay-dispara-la-venta-de-autos-electricos-crecieron-147-en-2025/", date: "2026", type: "Prensa" },
    mef: { name: "Ministerio de Economía y Finanzas (portal oficial)", url: "https://www.gub.uy/ministerio-economia-finanzas", date: CHECKED, type: "Oficial (portal general; norma exacta pendiente de localizar)" },
    dgi: { name: "Dirección General Impositiva (portal oficial)", url: "https://www.gub.uy/direccion-general-impositiva", date: CHECKED, type: "Oficial (portal general)" },
    ute: { name: "UTE — Movilidad eléctrica", url: "https://www.ute.com.uy", date: CHECKED, type: "Oficial (portal general)" }
  };

  /* verification: "parcial" = una sola fuente de prensa, sin ficha oficial del importador. */
  const base = { type: "BEV", year: null, seats: null, acKw: null, dcKw: null, accel: null, trunkL: null, rangeReal: null, drive: null };

  const vehicles = [
    Object.assign({}, base, {
      id: "mg4-urban", brand: "MG", model: "MG4 EV", version: "Urban (Comfort / Deluxe)", body: "Hatchback",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 21490, promo: null, currency: "USD", validOn: "2026-09-01", note: "Precio «desde» según prensa; varía por versión y equipamiento.", verification: "parcial" },
      powerCv: 147, batteryKwh: 42.8, rangeKm: 382, rangeCycle: "NEDC", chargeNote: "10–80 % en 28 min (carga rápida DC; potencia no informada)",
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Citada para modelos electrificados MG vía Eximar; confirmar condiciones y exclusiones por escrito." },
      source: sources.mg, notes: ""
    }),
    Object.assign({}, base, {
      id: "mg4-deluxe-er", brand: "MG", model: "MG4 EV", version: "Deluxe Extended Range", body: "Hatchback",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 37900, promo: null, currency: "USD", validOn: "2026-09-01", note: "Precio según prensa.", verification: "parcial" },
      powerCv: null, batteryKwh: 77, rangeKm: 520, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Ver nota en MG4 Urban." },
      source: sources.mg, notes: "El artículo no indica el ciclo de homologación de los 520 km."
    }),
    Object.assign({}, base, {
      id: "mgs5-sr", brand: "MG", model: "MGS5 EV", version: "Standard Range", body: "SUV compacto",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 26990, promo: null, currency: "USD", validOn: "2026-09-01", note: "Es el precio de entrada de la línea MGS5 EV según prensa.", verification: "parcial" },
      powerCv: 167, batteryKwh: 49, rangeKm: 340, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Ver nota en MG4 Urban." },
      source: sources.mg, notes: "Autonomía descrita como «estimada»; ciclo no informado."
    }),
    Object.assign({}, base, {
      id: "mgs5-lr", brand: "MG", model: "MGS5 EV", version: "Long Range", body: "SUV compacto",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio de esta versión no informado por separado.", verification: "sin dato" },
      powerCv: 231, batteryKwh: 62.2, rangeKm: 430, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Ver nota en MG4 Urban." },
      source: sources.mg, notes: "Autonomía «hasta 430 km»; ciclo no informado."
    }),
    Object.assign({}, base, {
      id: "tesla-m3-sr", brand: "Tesla", model: "Model 3", version: "Standard Range RWD", body: "Sedán",
      importer: null, dealers: [], status: "verificar", drive: "Trasera (RWD)",
      price: { list: 32990, promo: null, currency: "USD", validOn: "2026-07-23", note: "Es el «precio base de lanzamiento» publicado por prensa; asociarlo a esta versión debe confirmarse en el configurador oficial.", verification: "parcial" },
      powerCv: null, batteryKwh: 63, rangeKm: 520, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: "4 años o 80.000 km", battery: "8 años o 160.000 km", note: "Según prueba de Autoblog (oct. 2026) para el Model 3 Premium LR; confirmar para esta versión." },
      source: sources.teslaHomolog, notes: "Batería LFP de 63 kWh (CATL) según Autoblog. Otro artículo da 534 km WLTP para esta versión: discrepancia conservada.",
      discrepancy: "Autonomía: 520 km WLTP (Autoblog, jun. 2026) vs 534 km (Autoblog, oct. 2026)."
    }),
    Object.assign({}, base, {
      id: "tesla-m3-plr", brand: "Tesla", model: "Model 3", version: "Premium Long Range", body: "Sedán",
      importer: null, dealers: [], status: "verificar",
      price: { list: 37990, promo: null, currency: "USD", validOn: "2026-10-01", note: "Precio base sin extras según prueba de Autoblog (oct. 2026). Otra nota da un rango de US$ 32.990 a 49.990 para todo el Model 3.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: 691, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: "4 años o 80.000 km", battery: "8 años o 160.000 km", note: "Según Autoblog (oct. 2026)." },
      source: sources.teslaTest, notes: "Autonomía WLTP citada entre 691 y 750 km según la fuente (se muestra el valor inferior). Capacidad de batería de esta versión no confirmada.",
      discrepancy: "Autonomía WLTP citada entre 691 y 750 km."
    }),
    Object.assign({}, base, {
      id: "tesla-my-prwd", brand: "Tesla", model: "Model Y", version: "Premium RWD", body: "SUV",
      importer: null, dealers: [], status: "verificar", drive: "Trasera (RWD)",
      price: { list: 36490, promo: null, currency: "USD", validOn: "2026-07-23", note: "Precio inicial del Model Y según prensa.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: 466, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: "4 años o 80.000 km", battery: "8 años o 160.000 km", note: "Garantía citada para Model 3; confirmar para Model Y." },
      source: sources.teslaPrecio, notes: "Autonomía de un resumen de configurador sin fecha."
    }),
    Object.assign({}, base, {
      id: "tesla-my-lrrwd", brand: "Tesla", model: "Model Y", version: "Long Range RWD", body: "SUV",
      importer: null, dealers: [], status: "verificar", drive: "Trasera (RWD)",
      price: { list: 41490, promo: null, currency: "USD", validOn: "2026-07-23", note: "Precio máximo del rango del Model Y según prensa.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: 530, rangeCycle: "WLTP", chargeNote: "Autonomía «más de 530 km»: se muestra el mínimo citado.",
      warranty: { vehicle: "4 años o 80.000 km", battery: "8 años o 160.000 km", note: "Garantía citada para Model 3; confirmar para Model Y." },
      source: sources.teslaPrecio, notes: ""
    }),
    Object.assign({}, base, {
      id: "byd-seagull", brand: "BYD", model: "Seagull / Dolphin Mini", version: "EV300 y EV400 (lanzamiento 2024)", body: "Hatchback urbano",
      importer: "Sadar", dealers: [], status: "verificar",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Prensa informa rebajas (US$ 1.000 en 2026; US$ 2.000 el año anterior) pero no el precio resultante.", verification: "sin dato" },
      powerCv: null, batteryKwh: 30.08, rangeKm: 305, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.byd, notes: "Ficha de lanzamiento 2024: EV300 = 30,08 kWh / 305 km CLTC; EV400 = 38,88 kWh / 405 km CLTC. Las versiones actuales pueden diferir. El ciclo CLTC es más optimista que el WLTP: no es comparable."
    })
  ];

  /* Marcas detectadas en prensa, sin datos de ficha todavía. No son equivalentes a una ficha. */
  const pendingBrands = [
    { brand: "BYD", detail: "Song Plus EV y Yuan Pro (precios no informados en la fuente)", importer: "Sadar", source: sources.byd },
    { brand: "GWM, Leapmotor, Zeekr, JMC, oModa", detail: "Representadas por Grupo Santa Rosa según prensa; modelos y precios por relevar", importer: "Grupo Santa Rosa", source: sources.teslaPrecio },
    { brand: "Xiaomi (SU7)", detail: "Prensa menciona preventa esperada; sin confirmación comercial", importer: null, source: { name: "El Observador / búsqueda", url: "https://www.elobservador.com.uy/cafe-y-negocios/tesla/en-pie-guerra-byd-vuelve-bajar-los-precios-sus-autos-electricos-la-llegada-tesla-y-la-antesala-del-imesi-n6051761", date: "2026-07-23", type: "Prensa" } }
  ];

  const benefits = [
    {
      id: "imesi-exoneracion-actual", name: "Exoneración de IMESI para eléctricos de pasajeros (régimen vigente desde 2021)",
      body: "Poder Ejecutivo / MEF", status: "vigente",
      desc: "Hoy los eléctricos de pasajeros no pagan IMESI, sin importar su valor de importación. Esto ya está incorporado en los precios de venta.",
      who: ["particular", "empresa", "flota"], categories: ["bev-pasajeros"],
      reqs: "Vehículo eléctrico de la categoría de transporte de pasajeros (Categoría F según prensa).",
      excl: "Utilitarios quedan fuera del alcance del nuevo esquema según prensa.",
      validFrom: "2021", validTo: "2026-12-31 (hasta que entre el nuevo régimen)",
      sources: [sources.imesiObservador, sources.imesiAutoblog], lastChecked: CHECKED, nextReview: "2026-11-15",
      verification: "prensa — falta norma oficial"
    },
    {
      id: "imesi-nuevo-2027", name: "Nuevo IMESI escalonado para eléctricos de pasajeros",
      body: "Poder Ejecutivo / MEF", status: "anunciado",
      desc: "Decreto de junio de 2026: hasta US$ 19.000 de valor de importación sigue exento; de US$ 19.001 a 27.000 tributa 5 %; más de US$ 27.000 tributa 9 %. El umbral es el valor de importación (CIF), NO el precio de venta al público. Previsto desde el 1/1/2027. Prensa de octubre 2026 informa que el MEF analiza una breve postergación, sin anuncio oficial.",
      who: ["particular", "empresa", "flota"], categories: ["bev-pasajeros"],
      reqs: "Se aplica en la importación/primera venta; el efecto llega al precio final.",
      excl: "No confirmado: número exacto del decreto (hay una mención a «147/026» no verificada en fuente oficial).",
      validFrom: "2027-01-01 (previsto)", validTo: null,
      sources: [sources.imesiObservador, sources.imesiAutoblog, sources.imesiPostergar], lastChecked: CHECKED, nextReview: "2026-11-01",
      verification: "prensa — falta norma oficial"
    },
    {
      id: "imesi-hibridos-2027", name: "Cambio de IMESI para híbridos (MHEV y PHEV)",
      body: "Poder Ejecutivo / MEF", status: "anunciado",
      desc: "Según prensa, los micro-híbridos pasarían de 14 % a 23 % y los híbridos enchufables de 2 % a 11 %; en híbridos la tasa depende de la cilindrada del motor térmico. No aplica a eléctricos puros.",
      who: ["particular", "empresa", "flota"], categories: ["phev-hev"],
      reqs: "Depende de la cilindrada.", excl: "—", validFrom: "2027-01-01 (previsto)", validTo: null,
      sources: [sources.imesiAutoblog], lastChecked: CHECKED, nextReview: "2026-11-01", verification: "prensa — falta norma oficial"
    },
    {
      id: "patente", name: "Patente de rodados (Congreso de Intendentes / intendencias)",
      body: "Intendencias departamentales", status: "pendiente",
      desc: "No se pudo confirmar en esta revisión el tratamiento actual de la patente para eléctricos. Prensa (ACAU) menciona cambios en «patentes» como factor para 2027. Consultar la intendencia del departamento de matriculación.",
      who: ["particular", "empresa", "flota"], categories: ["bev-pasajeros", "bev-utilitario", "moto"],
      reqs: "Por verificar.", excl: "Por verificar.", validFrom: null, validTo: null,
      sources: [sources.acau], lastChecked: CHECKED, nextReview: "2026-11-01", verification: "sin verificar"
    },
    {
      id: "apoyo-transporte", name: "Apoyo económico para vehículos eléctricos de transporte de uso intensivo",
      body: "Poder Ejecutivo", status: "pendiente",
      desc: "Prensa menciona programas de apoyo para transporte de uso intensivo (taxis, aplicaciones, etc.). No es un beneficio para compradores particulares; vigencia y condiciones no confirmadas.",
      who: ["empresa", "flota"], categories: ["bev-pasajeros", "bev-utilitario"],
      reqs: "Por verificar.", excl: "No aplica a uso particular.", validFrom: null, validTo: null,
      sources: [{ name: "DPL News — apoyo económico transporte de uso intensivo", url: "https://dplnews.com/?p=170777", date: "s/f", type: "Prensa" }],
      lastChecked: CHECKED, nextReview: "2026-11-01", verification: "sin verificar"
    }
  ];

  /* Entidades financieras: SOLO se cargan productos con fuente. El resto: «Consultar». */
  const financing = [
    { entity: "BBVA Uruguay", product: "Préstamo sostenible para vehículos eléctricos (particulares)", status: "histórico — vigencia no confirmada",
      accepts: "Sí (según comunicado de 2020)", condition: "Nuevo/usado: no informado", currencies: "Pesos, unidades indexadas o dólares", term: "Hasta 60 meses",
      rate: "Tasa «bonificada»; valor no informado", fees: "Paquete de cuentas sin costo; otros no informados", url: sources.bbva.url, source: sources.bbva, date: "2020-09-04" },
    { entity: "Santander", product: "No relevado", status: "pendiente de verificar", url: null },
    { entity: "Itaú", product: "No relevado", status: "pendiente de verificar", url: null },
    { entity: "Scotiabank", product: "No relevado", status: "pendiente de verificar", url: null },
    { entity: "HSBC", product: "No relevado (verificar si opera hoy en Uruguay)", status: "pendiente de verificar", url: null },
    { entity: "BROU", product: "Prensa 2022 mencionaba préstamos «blandos» en preparación; no confirmado si existen", status: "pendiente de verificar", url: "https://www.brou.com.uy", source: { name: "Bloomberg Línea (2022)", url: "https://www.bloomberglinea.com/2022/08/18/vehiculos-electricos-en-uruguay-gobierno-prepara-prestamos-blandos-en-banco-estatal/", date: "2022-08-18", type: "Prensa" } }
  ];

  const market = {
    ev2025: 14387, growth2025: "147 %", share2026ZeroKm: "36,7 %", shareNote: "Cifras ACAU citadas por prensa (ene–ago 2026).",
    source: sources.acau
  };

  return { checked: CHECKED, sources, vehicles, pendingBrands, benefits, financing, market };
})();
