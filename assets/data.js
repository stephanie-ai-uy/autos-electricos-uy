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
    ute: { name: "UTE — Movilidad eléctrica", url: "https://www.ute.com.uy", date: CHECKED, type: "Oficial (portal general)" },
    bydOficial: { name: "BYD Uruguay — sitio oficial (importador Sadar)", url: "https://www.byd.com.uy", date: CHECKED, type: "Web oficial del importador" },
    gacOficial: { name: "GAC Motor Uruguay — sitio oficial (Lestido)", url: "https://www.gacmotor.uy", date: CHECKED, type: "Web oficial del importador" },
    aionUt: { name: "Autoblog Uruguay — Lanzamiento: GAC Aion UT", url: "https://www.autoblog.com.uy/2025/12/lanzamiento-gac-aion-ut.html", date: "2025-12-08", type: "Prensa especializada" },
    jmc3: { name: "Autoblog Uruguay — Lanzamiento: JMC JMEV 3", url: "https://www.autoblog.com.uy/2026/01/lanzamiento-jmc-jmev-3.html", date: "2026-01-02", type: "Prensa especializada" },
    nammi: { name: "Autoblog Uruguay — Lanzamientos Nammi 330 y 430", url: "https://www.autoblog.com.uy/2024/09/lanzamientos-nammi-330-y-430.html", date: "2024-09-02", type: "Prensa especializada" },
    spark: { name: "Autoblog Uruguay — Lanzamiento: Chevrolet Spark EUV", url: "https://www.autoblog.com.uy/2025/05/lanzamiento-chevrolet-spark-euv.html", date: "2025-05-17", type: "Prensa especializada" },
    ex5: { name: "Autoblog Uruguay — Lanzamiento: Geely EX5", url: "https://www.autoblog.com.uy/2025/06/lanzamiento-geely-ex5.html", date: "2025-06", type: "Prensa especializada" },
    ex5Urban: { name: "Autoblog Uruguay — Lanzamiento: Geely EX5 Urban", url: "https://www.autoblog.com.uy/2026/09/lanzamiento-geely-ex5-urban.html", date: "2026-09", type: "Prensa especializada" },
    omodaE5: { name: "El Observador (contenido de marca) — nueva SUV eléctrica Omoda E5", url: "https://www.elobservador.com.uy/brand-studio/que-ofrece-la-nueva-suv-electrica-la-que-omoda-busca-diferenciarse-uruguay-diseno-tecnologia-y-505-km-autonomia-n6049190", date: "2026-07-07", type: "Contenido patrocinado de la marca (no es periodismo independiente)" },
    omodaE5Auto: { name: "Autoblog Uruguay — Lanzamiento Omoda E5 restyling", url: "https://www.autoblog.com.uy/2026/06/lanzamiento-omoda-e5-restyling.html", date: "2026-06", type: "Prensa especializada" },
    leapmotor: { name: "Montevideo Portal — Santa Rosa suma Leapmotor a su portfolio", url: "https://www.montevideo.com.uy/Negocios-y-Tendencias/Santa-Rosa-suma-nuevos-vehiculos-electricos-a-su-portfolio-con-la-marca-Leapmotor-uc872723", date: "s/f", type: "Prensa" },
    zeekrX: { name: "Autoblog Uruguay — Lanzamiento: Zeekr X", url: "https://www.autoblog.com.uy/2024/07/lanzamiento-zeekr-x.html", date: "2024-07-08", type: "Prensa especializada" },
    ex30: { name: "MercadoLibre Uruguay — tienda Eximar, Volvo EX30", url: "https://listado.mercadolibre.com.uy/tienda/eximar/autos/ex30/automatica/trasera/nuevo/", date: CHECKED, type: "Anuncio de concesionario (no es lista oficial)" },
    jacS1: { name: "Autoblog Uruguay — Lanzamiento: JAC e-S1", url: "https://www.autoblog.com.uy/2022/02/lanzamiento-jac-e-s1.html", date: "2022-02", type: "Prensa especializada" },
    gwmOf: { name: "GWM Uruguay — sitio oficial", url: "https://gwm.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    leapOf: { name: "Leapmotor Uruguay — sitio oficial", url: "https://www.leapmotor.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    changanOf: { name: "Changan Uruguay — sitio oficial", url: "https://changan.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    deepalOf: { name: "Deepal Uruguay — sitio oficial", url: "https://deepal.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    zeekrOf: { name: "Zeekr Uruguay — sitio oficial", url: "https://www.zeekrlife.com/es-uy/", date: CHECKED, type: "Web oficial de la marca/importador" },
    omodaOf: { name: "Omoda Jaecoo Uruguay — sitio oficial", url: "https://omodajaecoo.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    cheryOf: { name: "Chery Uruguay — sitio oficial", url: "https://chery.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    nissanOf: { name: "Nissan Uruguay — sitio oficial", url: "https://www.nissan.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    hyundaiOf: { name: "Hyundai Uruguay — sitio oficial", url: "https://www.hyundai.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    toyotaOf: { name: "Toyota Uruguay — sitio oficial", url: "https://www.toyota.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    xpengOf: { name: "Xpeng Uruguay — sitio oficial", url: "https://www.xpeng.com/uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    fidocarOf: { name: "Fidocar — sitio oficial (Dongfeng, Chery, Hyundai)", url: "https://www.fidocar.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    sucive2026: { name: "Congreso de Intendentes — Texto ordenado del Sucive 2026", url: "https://www.gub.uy/congreso-intendentes/comunicacion/publicaciones/texto-ordenado-del-sucive-2026", date: CHECKED, type: "Normativa oficial (Congreso de Intendentes)" },
    bergara: { name: "Montevideo Portal — Congreso de Intendentes analizará reducir bonificaciones de eléctricos", url: "https://www.montevideo.com.uy/Noticias/Bergara-Congreso-de-Intendentes-analizara-reducir-bonificaciones-de-coches-electricos-uc964179", date: "2026-06-04", type: "Prensa" },
    rankAutoblog: { name: "Autoblog Uruguay — Ventas 2025: los 10 electrificados más vendidos", url: "https://www.autoblog.com.uy/2026/02/ventas-2025-los-10-vehiculos.html", date: "2026-02", type: "Prensa especializada (datos ACAU)" }
  };

  /* verification: "parcial" = una sola fuente de prensa, sin ficha oficial del importador. */
  const typeLabels = { BEV: "Eléctrico (BEV)", PHEV: "Híbrido enchufable (PHEV)", HEV: "Híbrido no enchufable (HEV/MHEV)", REEV: "Eléctrico de autonomía extendida (REEV)" };
  /* Origen = país de origen de la MARCA o de su grupo propietario (no el país de fabricación de cada modelo). */
  const origins = {
    "BYD": { country: "China" }, "GAC": { country: "China" }, "JMC": { country: "China" }, "Dongfeng": { country: "China" },
    "Geely": { country: "China" }, "Omoda": { country: "China", note: "Grupo Chery" }, "Chery": { country: "China" }, "Leapmotor": { country: "China" },
    "Zeekr": { country: "China", note: "Grupo Geely" }, "JAC": { country: "China" },
    "MG": { country: "China", note: "Marca de origen británico, hoy propiedad del grupo chino SAIC" },
    "Tesla": { country: "EE.UU." },
    "Chevrolet": { country: "EE.UU.", note: "Marca de General Motors. Verificar el país de fabricación de cada modelo." },
    "Volvo": { country: "Suecia", note: "Propiedad del grupo chino Geely" },
    "Toyota": { country: "Japón" }, "Nissan": { country: "Japón" }, "Hyundai": { country: "Corea del Sur" },
    "GWM": { country: "China", note: "Great Wall Motor (incluye ORA, Haval y Tank)" }, "Changan": { country: "China" },
    "Deepal": { country: "China", note: "Marca del grupo Changan" }, "Xpeng": { country: "China" },
    "Suzuki": { country: "Japón", note: "Algunos modelos (p. ej. Swift) se importan desde India según prensa" }
  };

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
      id: "byd-seagull", brand: "BYD", model: "Seagull", version: "desde (versión según web oficial)", body: "Hatchback urbano",
      importer: "Sadar", dealers: [], status: "disponible",
      price: { list: 18990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» publicado en el sitio oficial de BYD Uruguay. Qué versión es y qué incluye (matriculación, flete) debe confirmarse.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.bydOficial, notes: "Lanzamiento 2024 (prensa): EV300 = 30,08 kWh / 305 km CLTC; EV400 = 38,88 kWh / 405 km CLTC. Las versiones actuales pueden diferir; el ciclo CLTC (China) es más optimista que el WLTP y no es comparable. Segundo EV más vendido de 2025 (EV400, 1.849 unidades según ACAU vía Autoblog)."
    }),
    Object.assign({}, base, {
      id: "byd-new-e2-x", brand: "BYD", model: "New e2", version: "X", body: "Hatchback",
      importer: "Sadar", dealers: [], status: "disponible",
      price: { list: 25990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio publicado en el sitio oficial de BYD Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.bydOficial, notes: "El ranking de ventas 2025 cita otra versión (e2 GS, 44,9 kWh); no se asume que sea la misma que esta versión X."
    }),
    Object.assign({}, base, {
      id: "byd-yuan-pro-ev", brand: "BYD", model: "Yuan Pro", version: "EV", body: "SUV compacto",
      importer: "Sadar", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Figura en el sitio oficial de BYD Uruguay pero sin precio visible.", verification: "sin dato" },
      powerCv: null, batteryKwh: 45.12, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.rankAutoblog, notes: "Modelo eléctrico más vendido de 2025 (3.362 unidades, versión GS de 45,12 kWh, según ACAU vía Autoblog)."
    }),
    Object.assign({}, base, {
      id: "gac-aion-ut", brand: "GAC", model: "AION UT", version: "(44,12 kWh)", body: "Hatchback",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 22490, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: null, batteryKwh: 44.12, rangeKm: 400, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "8 años o 160.000 km", battery: null, note: "Garantía citada por Autoblog (dic. 2025) para el lanzamiento; confirmar condiciones y exclusiones." },
      source: sources.gacOficial, notes: "Batería y garantía: Autoblog/Montevideo Portal (dic. 2025). La web oficial muestra 400/500 km sin indicar el ciclo ni la versión de cada cifra."
    }),
    Object.assign({}, base, {
      id: "gac-aion-ut-max", brand: "GAC", model: "AION UT", version: "Max (60 kWh)", body: "Hatchback",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 25990, promo: null, currency: "USD", validOn: "2025-12-08", note: "Precio de lanzamiento según Autoblog; la web oficial hoy solo muestra el «desde» del AION UT.", verification: "parcial" },
      powerCv: 201, batteryKwh: 60, rangeKm: 500, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "8 años o 160.000 km", battery: null, note: "Garantía citada por Autoblog." },
      source: sources.aionUt, notes: "Motor 150 kW (201 cv). Hubo preventa a US$ 25.490 hasta el 31/12/2025."
    }),
    Object.assign({}, base, {
      id: "gac-aion-es", brand: "GAC", model: "AION ES", version: "", body: "Sedán",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 26990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 442, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "Ciclo de homologación de los 442 km no informado."
    }),
    Object.assign({}, base, {
      id: "gac-aion-v", brand: "GAC", model: "AION V", version: "", body: "SUV compacto",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 28990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 505, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "La web muestra dos autonomías (505/602 km) sin decir a qué versión corresponde cada una ni el ciclo; se muestra la menor. Julio 2026: compacto SUV más vendido (prensa)."
    }),
    Object.assign({}, base, {
      id: "gac-hyptec-ht", brand: "GAC", model: "HYPTEC HT", version: "", body: "SUV",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 39990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial (antes US$ 45.990, según la propia web).", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "La web indica 0–100 km/h en 6,8 s; no informa autonomía."
    }),
    Object.assign({}, base, {
      id: "jmc-jmev-3", brand: "JMC", model: "JMEV 3 (antes EV3)", version: "31,9 kWh", body: "Hatchback urbano",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 16990, promo: null, currency: "USD", validOn: "2026-01-02", note: "Precio de lista según Autoblog (ene. 2026). En el lanzamiento 2024 costaba US$ 17.990.", verification: "parcial" },
      powerCv: null, batteryKwh: 31.9, rangeKm: 330, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: "3 años o 80.000 km", battery: "8 años o 120.000 km", note: "Según Autoblog." },
      source: sources.jmc3, notes: "Cifra CLTC, más optimista que WLTP. JMC también comercializa el JMEV 2 (15,86 kWh, 200 km; sin precio hallado)."
    }),
    Object.assign({}, base, {
      id: "dongfeng-nammi-330", brand: "Dongfeng", model: "Nammi", version: "330", body: "Hatchback urbano",
      importer: "Fidocar", dealers: [], status: "disponible",
      price: { list: 18990, promo: null, currency: "USD", validOn: "2024-09-02", note: "Precio de lanzamiento (sep. 2024). Un asesor comercial de Fidocar publicó una versión «desde US$ 17.990» (no oficial, sin confirmar).", verification: "parcial" },
      powerCv: 95, batteryKwh: 31.4, rangeKm: 330, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: "7 años o 300.000 km", battery: "10 años sin límite de km", note: "Garantía publicada por un asesor de Fidocar (no es documento oficial); confirmar por escrito." },
      source: sources.nammi, notes: "Cifra CLTC (China). Julio 2026: 0 km más vendido del país (413 unidades, ACAU vía prensa)."
    }),
    Object.assign({}, base, {
      id: "dongfeng-nammi-430", brand: "Dongfeng", model: "Nammi", version: "430", body: "Hatchback urbano",
      importer: "Fidocar", dealers: [], status: "disponible",
      price: { list: 22990, promo: null, currency: "USD", validOn: "2024-09-02", note: "Precio de lanzamiento (sep. 2024); puede haber cambiado.", verification: "parcial" },
      powerCv: 95, batteryKwh: 42.3, rangeKm: 430, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: "7 años o 300.000 km", battery: "10 años sin límite de km", note: "Ver nota en Nammi 330." },
      source: sources.nammi, notes: "Cifra CLTC (China). 865 unidades vendidas en 2025 (Nammi 430, ACAU vía Autoblog)."
    }),
    Object.assign({}, base, {
      id: "chevrolet-spark-euv-activ", brand: "Chevrolet", model: "Spark EUV", version: "Activ", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 24990, promo: null, currency: "USD", validOn: "2025-05-17", note: "Precio de lanzamiento (may. 2025).", verification: "parcial" },
      powerCv: 102, batteryKwh: 41.9, rangeKm: 298, rangeCycle: "WLTP", chargeNote: "Carga rápida DC hasta 80 % en menos de una hora (preventa).",
      warranty: { vehicle: "3 años o 100.000 km", battery: "8 años o 160.000 km", note: "Según Autoblog." },
      source: sources.spark, notes: "360 km según NEDC. Cuarto EV más vendido de 2025 (737 unidades)."
    }),
    Object.assign({}, base, {
      id: "geely-ex5-urban", brand: "Geely", model: "EX5", version: "Urban", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 28990, promo: null, currency: "USD", validOn: "2026-09", note: "Precio según Autoblog (sep. 2026).", verification: "parcial" },
      powerCv: null, batteryKwh: 49.52, rangeKm: 345, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: "5 años o 150.000 km", battery: "8 años o 150.000 km", note: "Según Autoblog." },
      source: sources.ex5Urban, notes: ""
    }),
    Object.assign({}, base, {
      id: "geely-ex5-pro", brand: "Geely", model: "EX5", version: "Pro", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 30990, promo: null, currency: "USD", validOn: "2025-06", note: "Precio de lanzamiento (jun. 2025). Valor CIF informado: US$ 24.900.", verification: "parcial" },
      powerCv: 214, batteryKwh: 60.22, rangeKm: 425, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No confirmada para Pro/Max (la versión Urban tiene 5 años/150.000 km)." },
      source: sources.ex5, notes: "490–495 km según NEDC."
    }),
    Object.assign({}, base, {
      id: "geely-ex5-max", brand: "Geely", model: "EX5", version: "Max", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 34990, promo: null, currency: "USD", validOn: "2025-06", note: "US$ 34.990 en jun. 2025 y US$ 35.990 en la presentación oficial de ago. 2025: se conserva la discrepancia.", verification: "parcial" },
      powerCv: 214, batteryKwh: 60.22, rangeKm: 425, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No confirmada para Pro/Max." },
      source: sources.ex5, notes: "Valor CIF informado: US$ 27.900.", discrepancy: "Precio: US$ 34.990 (jun. 2025) vs US$ 35.990 (ago. 2025)."
    }),
    Object.assign({}, base, {
      id: "omoda-e5", brand: "Omoda", model: "E5", version: "2027 (51 / 60 kWh)", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 25990, promo: null, currency: "USD", validOn: CHECKED, note: "«Desde» según el sitio oficial de Omoda Jaecoo Uruguay. Un contenido de marca de El Observador (jul. 2026) daba US$ 26.990 y Montevideo Portal, en el lanzamiento, US$ 42.990: se conserva la discrepancia.", verification: "oficial" },
      powerCv: 201, batteryKwh: 51, rangeKm: 422, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: "5 años o 150.000 km", battery: "8 años o 150.000 km", note: "Según contenido de marca de Omoda." },
      source: sources.omodaOf, notes: "Dos baterías (51 y 60 kWh; una nota menciona 59) con 422 y 505 km NEDC. Más de 300 unidades vendidas en preventa (prensa, jul. 2026).", discrepancy: "Precio: desde US$ 26.990 (jul. 2026) vs US$ 42.990 (lanzamiento, Montevideo Portal)."
    }),
    Object.assign({}, base, {
      id: "leapmotor-t03", brand: "Leapmotor", model: "T03", version: "", body: "Hatchback urbano",
      importer: "Santa Rosa", dealers: [], status: "verificar",
      price: { list: 26490, promo: null, currency: "USD", validOn: "s/f", note: "Precio citado por Montevideo Portal en la nota de incorporación de la marca; la nota no muestra fecha clara y el precio puede haber cambiado.", verification: "parcial" },
      powerCv: 107, batteryKwh: 41.3, rangeKm: 280, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: "3 años o 100.000 km", battery: null, note: "Según Montevideo Portal." },
      source: sources.leapmotor, notes: "Habilitado para uso en aplicaciones de transporte (prensa). Leapmotor también trae el C11 (502 km CLTC; sin precio hallado)."
    }),
    Object.assign({}, base, {
      id: "zeekr-x-premium", brand: "Zeekr", model: "X", version: "Premium RWD", body: "SUV compacto",
      importer: "Santa Rosa", dealers: [], status: "verificar", drive: "Trasera (RWD)",
      price: { list: 49990, promo: null, currency: "USD", validOn: "2024-07-08", note: "Precio de lanzamiento (jul. 2024); no hay precio 2026 verificado.", verification: "parcial" },
      powerCv: 272, batteryKwh: 69.05, rangeKm: 440, rangeCycle: "WLTC", chargeNote: null,
      warranty: { vehicle: "4 años o 100.000 km", battery: "8 años o 160.000 km", note: "Según Autoblog." },
      source: sources.zeekrX, notes: "Algunas notas dan 66 kWh y otras 69,05 kWh para la batería.", discrepancy: "Batería: 66 kWh vs 69,05 kWh según la nota."
    }),
    Object.assign({}, base, {
      id: "zeekr-x-flagship", brand: "Zeekr", model: "X", version: "Flagship AWD", body: "SUV compacto",
      importer: "Santa Rosa", dealers: [], status: "verificar", drive: "Integral (AWD)",
      price: { list: 55990, promo: null, currency: "USD", validOn: "2024-07-08", note: "Precio de lanzamiento (jul. 2024); no hay precio 2026 verificado.", verification: "parcial" },
      powerCv: 428, batteryKwh: 69.05, rangeKm: 420, rangeCycle: "WLTC", chargeNote: null,
      warranty: { vehicle: "4 años o 100.000 km", battery: "8 años o 160.000 km", note: "Según Autoblog." },
      source: sources.zeekrX, notes: "Suma audio Yamaha de 13 altavoces, iluminación ambiental y llantas de 20\".", discrepancy: "Batería: 66 kWh vs 69,05 kWh según la nota."
    }),
    Object.assign({}, base, {
      id: "volvo-ex30-core", brand: "Volvo", model: "EX30", version: "Core (tracción trasera)", body: "SUV compacto",
      importer: "Eximar", dealers: [], status: "verificar", drive: "Trasera (RWD)",
      price: { list: 39900, promo: null, currency: "USD", validOn: CHECKED, note: "Precio de un anuncio de concesionario en MercadoLibre, no una lista oficial.", verification: "anuncio de tercero" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.ex30, notes: "Importador inferido de la tienda que publica el anuncio; confirmar."
    }),
    Object.assign({}, base, {
      id: "volvo-ex30-ultra", brand: "Volvo", model: "EX30", version: "Ultra (autonomía extendida)", body: "SUV compacto",
      importer: "Eximar", dealers: [], status: "verificar",
      price: { list: 54900, promo: null, currency: "USD", validOn: CHECKED, note: "Precio de un anuncio de concesionario en MercadoLibre, no una lista oficial.", verification: "anuncio de tercero" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.ex30, notes: "Importador inferido de la tienda que publica el anuncio; confirmar."
    }),
    Object.assign({}, base, {
      id: "jac-e-s1", brand: "JAC", model: "e-S1 (e-JS1)", version: "", body: "Hatchback urbano",
      importer: null, dealers: [], status: "verificar",
      price: { list: 24990, promo: null, currency: "USD", validOn: "2023", note: "Precio citado por una prueba de Autoblog de 2023; muy probablemente desactualizado.", verification: "parcial" },
      powerCv: null, batteryKwh: 30.2, rangeKm: 302, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "3 años o 100.000 km", battery: "8 años o 150.000 km", note: "Garantía del lanzamiento 2022 (tren motriz y batería)." },
      source: sources.jacS1, notes: "Ficha técnica del lanzamiento 2022. JAC E-S3 también figura entre los más vendidos de 2025 (394 unidades) pero no se hallaron datos."
    }),
    Object.assign({}, base, {
      id: "gac-emkoo-ge-hev", type: "HEV", brand: "GAC", model: "Emkoo GE HEV", version: "", body: "SUV",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 28990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "Motor 2.0 híbrido no enchufable; la web indica «140 cv + 134 kW (eléctrico)» y 300 Nm. Sin capacidad de batería."
    }),
    Object.assign({}, base, {
      id: "gac-gs4-max-hev", type: "HEV", brand: "GAC", model: "GS4 MAX HEV", version: "", body: "SUV",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 31990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: 232, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "Motor 2.0 híbrido; potencia combinada 232 hp y 480 Nm según la web."
    }),
    Object.assign({}, base, {
      id: "gac-s7-ultra-awd", type: "PHEV", brand: "GAC", model: "S7 ULTRA AWD", version: "", body: "SUV", drive: "Integral (AWD)",
      importer: "Lestido", dealers: [], status: "disponible",
      price: { list: 55990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GAC Motor Uruguay (IVA incluido).", verification: "oficial" },
      powerCv: 493, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gacOficial, notes: "Híbrido enchufable 1.5 T; potencia combinada 493 hp y 470 Nm. La web no informa batería ni autonomía eléctrica."
    }),
    Object.assign({}, base, {
      id: "byd-yuan-pro-dmi", type: "PHEV", brand: "BYD", model: "Yuan Pro DM-i", version: "", body: "SUV compacto",
      importer: "Sadar", dealers: [], status: "disponible",
      price: { list: 29990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de BYD Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.bydOficial, notes: "La web lo presenta como «super híbrido» (DMI); se clasifica como enchufable según la tecnología DM-i de BYD, a confirmar con el importador."
    }),
    Object.assign({}, base, {
      id: "byd-song-plus-dmi", type: "PHEV", brand: "BYD", model: "Song Plus DM-i", version: "", body: "SUV",
      importer: "Sadar", dealers: [], status: "disponible",
      price: { list: 39990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de BYD Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.bydOficial, notes: "Ver nota de clasificación en Yuan Pro DM-i. Existe también el Song Plus EV (eléctrico) sin precio hallado."
    }),
    Object.assign({}, base, {
      id: "geely-ex5-em-i", type: "PHEV", brand: "Geely", model: "EX5 EM-i", version: "Pro", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 34990, promo: null, currency: "USD", validOn: "2025-06", note: "Precio de lanzamiento (jun. 2025); la misma nota cita una versión de US$ 38.990.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No confirmada." },
      source: sources.ex5, notes: "Versión híbrida enchufable del EX5. Un aviso de MercadoLibre 2026 (Grupo Fiancar) también lo ofrece a US$ 34.990."
    }),
    Object.assign({}, base, {
      id: "mg3-hybrid-plus", type: "HEV", brand: "MG", model: "MG3 Hybrid+", version: "", body: "Hatchback",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 24990, promo: null, currency: "USD", validOn: "2026-09-01", note: "Precio «desde» según prensa.", verification: "parcial" },
      powerCv: 191, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "6 años o 120.000 km", battery: null, note: "Garantía mecánica citada para MG vía Eximar." },
      source: sources.mg, notes: "Híbrido no enchufable; 191 cv combinados, 425 Nm, 4,4 L/100 km homologado."
    }),
    Object.assign({}, base, {
      id: "omoda-5-shs", type: "HEV", brand: "Omoda", model: "5 SHS", version: "", body: "SUV compacto",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no informado en la fuente.", verification: "sin dato" },
      powerCv: 224, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: { name: "Autoblog Uruguay — Lanzamiento Omoda 5 SHS y Jaecoo 5 EV", url: "https://www.autoblog.com.uy/2025/10/lanzamiento-omoda-5-shs-y-jaecoo-5-ev.html", date: "2025-10", type: "Prensa especializada" }, notes: "Sistema híbrido SHS (1.5 turbo + motor eléctrico), 224 hp combinados. Reemplaza al C5 MHEV."
    }),
    Object.assign({}, base, {
      id: "suzuki-fronx-hybrid", type: "HEV", brand: "Suzuki", model: "Fronx Hybrid", version: "", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no hallado.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.rankAutoblog, notes: "Electrificado más vendido de 2025 (999 unidades, ACAU vía Autoblog). La fuente no distingue entre MHEV/HEV."
    }),
    Object.assign({}, base, {
      id: "suzuki-swift-hybrid", type: "HEV", brand: "Suzuki", model: "Swift Hybrid", version: "1.2 GLX", body: "Hatchback",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no hallado.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.rankAutoblog, notes: "686 unidades vendidas en 2025 según el ranking de Autoblog (otra tabla del mismo informe cita 985 para el modelo, con origen India)."
    }),
    Object.assign({}, base, {
      id: "toyota-corolla-cross-hybrid", type: "HEV", brand: "Toyota", model: "Corolla Cross Hybrid", version: "SE-G 1.8 e-CVT", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio actual no hallado (un informe de 2022 hablaba de unos US$ 40.000).", verification: "sin dato" },
      powerCv: 122, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.rankAutoblog, notes: "Versiones XEI y SEG HEV 1.8 eCVT, 122 cv (ficha del sitio oficial). 465 unidades en el ranking 2025 por versión; líder de híbridos en 2022 y 2024."
    }),
    Object.assign({}, base, {
      id: "chery-tiggo-4-hybrid", type: "HEV", brand: "Chery", model: "Tiggo 4 Hybrid (CSH)", version: "", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 27990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de Chery Uruguay para el Tiggo 4 CSH.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada." },
      source: sources.cheryOf, notes: "Se asume que el Tiggo 4 CSH de la web es el Tiggo 4 Hybrid (full hybrid, Fidocar, lanzado oct. 2024); 281 unidades vendidas en 2025 (ACAU vía Autoblog)."
    }),
    Object.assign({}, base, {
      id: "gwm-ora-03", type: "BEV", brand: "GWM", model: "ORA 03", version: "", body: "Hatchback",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 28990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: "La web no indica la propulsión; se clasifica como eléctrico según prensa (modelo eléctrico de GWM)."
    }),
    Object.assign({}, base, {
      id: "gwm-ora-5", type: "BEV", brand: "GWM", model: "ORA 5", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 24990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: "Tipo inferido: la web no indica la propulsión (ORA es la línea eléctrica de GWM). Confirmar con el importador."
    }),
    Object.assign({}, base, {
      id: "gwm-h6-hev", type: "HEV", brand: "GWM", model: "H6 HEV", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 34990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "gwm-h6-phev", type: "PHEV", brand: "GWM", model: "H6 PHEV", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 38990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "gwm-h6-gt-phev", type: "PHEV", brand: "GWM", model: "H6 GT PHEV", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 52990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "gwm-h7-phev", type: "PHEV", brand: "GWM", model: "H7 PHEV", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 38990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "gwm-tank-300-hev", type: "HEV", brand: "GWM", model: "Tank 300 HEV", version: "", body: "Todo terreno",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 59990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de GWM Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.gwmOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "leapmotor-c10-ev", type: "BEV", brand: "Leapmotor", model: "C10 EV", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 38990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial (IVA incluido).", verification: "oficial" },
      powerCv: 218, batteryKwh: 69.9, rangeKm: 530, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.leapOf, notes: "Conector Tipo 2 europeo."
    }),
    Object.assign({}, base, {
      id: "leapmotor-b10", type: "BEV", brand: "Leapmotor", model: "B10", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 33990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial (IVA incluido).", verification: "oficial" },
      powerCv: 214, batteryKwh: 67.1, rangeKm: 540, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.leapOf, notes: "160 kW (214 cv)."
    }),
    Object.assign({}, base, {
      id: "leapmotor-c16", type: "BEV", brand: "Leapmotor", model: "C16", version: "", body: "SUV (6 plazas)",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: 296, batteryKwh: null, rangeKm: 520, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.leapOf, notes: "218 kW; hasta 520 km CLTC según la web."
    }),
    Object.assign({}, base, {
      id: "changan-lumin", type: "BEV", brand: "Changan", model: "Lumin", version: "", body: "Hatchback urbano",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: 205, rangeCycle: "CLTC (China)", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.changanOf, notes: "Autonomía eléctrica 205 km (CLTC). La web muestra «38 kWh» junto a un rótulo de potencia: posible error de la página, no se carga como batería."
    }),
    Object.assign({}, base, {
      id: "changan-cs55-plus-luxury", type: "PHEV", brand: "Changan", model: "CS55 Plus PHEV", version: "Luxury", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 29990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Changan Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 107, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.changanOf, notes: "Autonomía eléctrica 107 km (NEDC); combinada 1.040 km (NEDC). Transmisión DHT automática."
    }),
    Object.assign({}, base, {
      id: "changan-cs55-plus-elite", type: "PHEV", brand: "Changan", model: "CS55 Plus PHEV", version: "Elite", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 32990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Changan Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 107, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.changanOf, notes: "Autonomía eléctrica 107 km (NEDC); combinada 1.040 km (NEDC)."
    }),
    Object.assign({}, base, {
      id: "changan-eado-plus-luxury", type: "PHEV", brand: "Changan", model: "EADO Plus PHEV", version: "Luxury", body: "Sedán",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 29990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Changan Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 125, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.changanOf, notes: "Autonomía eléctrica 125 km (NEDC); combinada 995 km (NEDC)."
    }),
    Object.assign({}, base, {
      id: "changan-eado-plus-elite", type: "PHEV", brand: "Changan", model: "EADO Plus PHEV", version: "Elite", body: "Sedán",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: 32990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Changan Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 125, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.changanOf, notes: "Autonomía eléctrica 125 km (NEDC); combinada 995 km (NEDC)."
    }),
    Object.assign({}, base, {
      id: "deepal-s05-ev", type: "BEV", brand: "Deepal", model: "S05", version: "EV", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: 56.12, rangeKm: 458, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.deepalOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "deepal-s05-reev", type: "REEV", brand: "Deepal", model: "S05", version: "REEV", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: 27.28, rangeKm: 158, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.deepalOf, notes: "Autonomía eléctrica 158 km; hasta 1.016 km combinados (NEDC)."
    }),
    Object.assign({}, base, {
      id: "deepal-s7-ev", type: "BEV", brand: "Deepal", model: "S7", version: "EV", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: 79.97, rangeKm: 560, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.deepalOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "deepal-s7-reev", type: "REEV", brand: "Deepal", model: "S7", version: "REEV", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: 31.7, rangeKm: 175, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.deepalOf, notes: "Autonomía eléctrica 175 km; hasta 985 km combinados (NEDC)."
    }),
    Object.assign({}, base, {
      id: "zeekr-001", type: "BEV", brand: "Zeekr", model: "001", version: "Sport RWD / Flagship AWD", body: "Crossover",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: 268, batteryKwh: 100, rangeKm: 620, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.zeekrOf, notes: "Batería 100 kWh; WLTP 620 km (RWD, 268 hp) y 580 km (AWD, 536 hp) según la web."
    }),
    Object.assign({}, base, {
      id: "zeekr-7x", type: "BEV", brand: "Zeekr", model: "7X", version: "", body: "SUV",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: 100, rangeKm: 615, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.zeekrOf, notes: "Batería 100 kWh; «hasta 615 km» sin indicar el ciclo."
    }),
    Object.assign({}, base, {
      id: "jaecoo-5-ev", type: "BEV", brand: "Omoda", model: "Jaecoo 5 EV", version: "", body: "SUV compacto",
      importer: "Santa Rosa", dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "La web muestra «Jaecoo 5 desde US$ 27.990» sin aclarar si es la versión eléctrica; no se asigna.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: 461, rangeCycle: "NEDC", chargeNote: null,
      warranty: { vehicle: null, battery: "8 años o 150.000 km", note: "Garantía de batería indicada para los eléctricos en general." },
      source: sources.omodaOf, notes: "Marca Jaecoo (Grupo Chery)."
    }),
    Object.assign({}, base, {
      id: "xpeng-g6", type: "BEV", brand: "Xpeng", model: "G6", version: "", body: "SUV",
      importer: null, dealers: [], status: "verificar",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.xpengOf, notes: "La web solo muestra el nombre y una descripción; sin datos técnicos ni precio."
    }),
    Object.assign({}, base, {
      id: "xpeng-g9", type: "BEV", brand: "Xpeng", model: "G9", version: "", body: "SUV",
      importer: null, dealers: [], status: "verificar",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.xpengOf, notes: "La web solo muestra el nombre y una descripción; sin datos técnicos ni precio."
    }),
    Object.assign({}, base, {
      id: "dongfeng-vigo", type: "BEV", brand: "Dongfeng", model: "Vigo", version: "", body: "SUV",
      importer: "Fidocar", dealers: [], status: "verificar",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.fidocarOf, notes: "Descrito por Fidocar como SUV 100 % eléctrico; sin datos técnicos ni precio."
    }),
    Object.assign({}, base, {
      id: "hyundai-kona-electric", type: "BEV", brand: "Hyundai", model: "Kona Eléctrica", version: "", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: 133, batteryKwh: 48.4, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "Batería 48,4 kWh; 133 hp."
    }),
    Object.assign({}, base, {
      id: "hyundai-ioniq-5", type: "BEV", brand: "Hyundai", model: "IONIQ 5", version: "Safe 2WD / Limited AWD", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: 225, batteryKwh: 72.6, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "Batería 72,6 kWh; 225 hp."
    }),
    Object.assign({}, base, {
      id: "hyundai-ioniq-9", type: "BEV", brand: "Hyundai", model: "IONIQ 9", version: "", body: "SUV (3 filas)",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: null, batteryKwh: 110.3, rangeKm: 620, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "Batería 110,3 kWh."
    }),
    Object.assign({}, base, {
      id: "hyundai-elexio", type: "BEV", brand: "Hyundai", model: "Elexio", version: "", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: null, batteryKwh: 88, rangeKm: 610, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "Batería hasta 88 kWh (LFP); «Full electric»."
    }),
    Object.assign({}, base, {
      id: "hyundai-kona-hibrida", type: "HEV", brand: "Hyundai", model: "Kona Híbrida", version: "Safe Limited", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "Motor 1.6 + eléctrico."
    }),
    Object.assign({}, base, {
      id: "hyundai-tucson-hev", type: "HEV", brand: "Hyundai", model: "Tucson HEV", version: "Safe Limited AWD", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "1.6 TGDi híbrido."
    }),
    Object.assign({}, base, {
      id: "hyundai-santa-fe-hev", type: "HEV", brand: "Hyundai", model: "Santa Fe HEV", version: "Limited 2WD / Caligraphy AWD", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "El precio se muestra en un configurador que no está en la página.", verification: "sin dato" },
      powerCv: 230, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.hyundaiOf, notes: "1.6 T-GDI híbrido, 230 hp."
    }),
    Object.assign({}, base, {
      id: "toyota-bz4x", type: "BEV", brand: "Toyota", model: "bZ4X", version: "Limited 4x2 / 4x4", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la página del modelo.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.toyotaOf, notes: "La página no muestra batería ni autonomía; hay ficha técnica descargable."
    }),
    Object.assign({}, base, {
      id: "toyota-yaris-cross-hybrid", type: "HEV", brand: "Toyota", model: "Yaris Cross Hybrid", version: "XEI eCVT / SEG eCVT", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la página del modelo.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.toyotaOf, notes: "Híbrido 1.5 no enchufable."
    }),
    Object.assign({}, base, {
      id: "toyota-corolla-hybrid", type: "HEV", brand: "Toyota", model: "Corolla Hybrid", version: "XEI / SEG HEV 1.8 eCVT", body: "Sedán",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la página del modelo.", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.toyotaOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "toyota-rav4-hybrid", type: "HEV", brand: "Toyota", model: "RAV4 Hybrid", version: "S Plus 4x2 / Limited / Adventure", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la página del modelo.", verification: "sin dato" },
      powerCv: 226, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.toyotaOf, notes: "2.5 híbrido con AWD eléctrico; 226 cv (4x2) o 236 cv (4x4/Adventure) según la ficha."
    }),
    Object.assign({}, base, {
      id: "toyota-rav4-phev", type: "PHEV", brand: "Toyota", model: "RAV4 PHEV", version: "4x4", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      drive: "Integral (AWD)",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la página del modelo.", verification: "sin dato" },
      powerCv: 330, batteryKwh: null, rangeKm: 140, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.toyotaOf, notes: "330 cv; «más de 140 km» en modo eléctrico (ciclo no indicado)."
    }),
    Object.assign({}, base, {
      id: "nissan-x-trail-e-power", type: "HEV", brand: "Nissan", model: "X-Trail e-POWER", version: "Advance / Exclusive e-4ORCE", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      drive: "Integral (AWD)",
      price: { list: 49990, promo: null, currency: "USD", validOn: CHECKED, note: "«Estrena desde» US$ 49.990 en la web oficial; las dos versiones listadas no muestran importe.", verification: "oficial" },
      powerCv: 210, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "3 años o 60.000 km", battery: null, note: "Garantía general Nissan; la web indica 2 años adicionales en ciertos componentes del sistema e-POWER." },
      source: sources.nissanOf, notes: "Sistema e-POWER (motor a gasolina 1.5 que genera electricidad; las ruedas las mueve un motor eléctrico), tracción e-4ORCE. 210 hp."
    }),
    Object.assign({}, base, {
      id: "chery-tiggo-7-csh", type: "HEV", brand: "Chery", model: "Tiggo 7 CSH", version: "", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 35990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Chery Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.cheryOf, notes: "Tipo inferido por el nombre «CSH Super Híbrida»: la web no lo indica para este modelo."
    })
  ];

  /* Marcas detectadas en prensa, sin datos de ficha todavía. No son equivalentes a una ficha. */
  const pendingBrands = [
    { brand: "Sin acceso a su web oficial: Volvo y MG", detail: "Volvo (bloqueo 403) y MG (conexión rechazada) no abrieron al consultarlas el " + CHECKED + ". Sus datos actuales vienen de prensa y anuncios; falta contrastarlos con la web oficial.", importer: "Eximar", source: sources.ex30 },
    { brand: "Santa Rosa — Mitsubishi, Renault, JMC, Iveco, Farizon", detail: "Marcas del grupo cuyos modelos eléctricos/híbridos no se relevaron aún (JMC JMEV 2 sin precio; Renault Kwid E-Tech sin precio actual; Farizon son furgonetas eléctricas).", importer: "Santa Rosa", source: sources.leapmotor },
    { brand: "BYD — otros modelos", detail: "Dolphin Mini, Yuan Plus, Song Plus EV y Atto 8 aparecen en prensa o en la web del importador sin precio o sin confirmar que sean eléctricos puros.", importer: "Sadar", source: sources.bydOficial },
    { brand: "Leapmotor C10 REEV · Jaecoo 5 · Jaecoo 7 SHS P", detail: "Figuran en las webs oficiales sin precio verificable (el «Jaecoo 5 desde US$ 27.990» no aclara si es eléctrico).", importer: "Santa Rosa", source: sources.omodaOf },
    { brand: "Chevrolet Captiva PHEV · Lynk & Co 08 PHEV", detail: "Solo en avisos de MercadoLibre Uruguay (US$ 37.990 y US$ 57.990); sin fuente enlazable.", importer: null, source: { name: "MercadoLibre Uruguay (avisos)", url: "https://autos.mercadolibre.com.uy/", date: CHECKED, type: "Anuncios de terceros" } },
    { brand: "Xiaomi (SU7)", detail: "Prensa menciona preventa esperada; sin confirmación comercial.", importer: null, source: { name: "El Observador", url: "https://www.elobservador.com.uy/cafe-y-negocios/tesla/en-pie-guerra-byd-vuelve-bajar-los-precios-sus-autos-electricos-la-llegada-tesla-y-la-antesala-del-imesi-n6051761", date: "2026-07-23", type: "Prensa" } }
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
      id: "patente", name: "Patente de rodados: alícuota reducida para eléctricos (Sucive 2026)",
      body: "Congreso de Intendentes / intendencias", status: "vigente",
      desc: "Según el Texto ordenado del Sucive 2026 (art. 2, num. 2.1), los eléctricos de Categoría A tributan una alícuota de patente de 3 % del valor de mercado sin IVA si son 0 km empadronados en 2026, y de 2,25 % si son usados empadronados al 31/12/2025. La sección de eléctricos no establece una exoneración total. Para motos eléctricas 0 km de más de 500 cc equivalentes (Categoría C) la alícuota es de 2,25 %. El valor de mercado sale de las tablas del propio texto. Riesgo de cambio: en junio de 2026 el intendente de Montevideo dijo que el Congreso de Intendentes analizará «suavizar» estas bonificaciones; no hay decisión publicada.",
      who: ["particular", "empresa", "flota"], categories: ["bev-pasajeros", "bev-utilitario", "moto"],
      reqs: "Vehículo eléctrico empadronado según las fechas indicadas; el monto exacto depende de la tabla de valor de mercado y de la intendencia.",
      excl: "No se halló ninguna exoneración total en la sección de eléctricos (se leyó el texto hasta el carácter 100.000 de 119.813).",
      validFrom: "2026", validTo: "Año 2026 (las tablas se fijan cada año)",
      sources: [sources.sucive2026, sources.bergara], lastChecked: CHECKED, nextReview: "2026-12-01",
      verification: "oficial (texto ordenado Sucive 2026)"
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

  return { checked: CHECKED, typeLabels, origins, sources, vehicles, pendingBrands, benefits, financing, market };
})();
