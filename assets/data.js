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
    deepalFicha: { name: "Santa Rosa Automotores (Deepal Uruguay) — Ficha técnica oficial Deepal S05 (PDF)", url: "https://deepal.uy", date: "2026-10-23", type: "Ficha técnica del importador" },
    deepalS7Cat: { name: "Santa Rosa Automotores (Deepal Uruguay) — Catálogo y ficha técnica oficial Deepal S7 (PDF)", url: "https://deepal.uy", date: "2026-10-23", type: "Ficha técnica del importador" },
    geelyFicha: { name: "Grupo Fiancar (Geely Uruguay) — Ficha técnica oficial Geely EX5 (PDF)", url: "https://www.geely.com.uy", date: "2026-10-23", type: "Ficha técnica del importador" },
    geelyEtiqueta: { name: "Geely Uruguay — Etiqueta de eficiencia energética EX5 Pro y Max (UNIT 1130, LSQA / URSEA)", url: "https://www.geely.com.uy", date: "2026-10-23", type: "Etiqueta oficial de eficiencia energética" },
    omoda5Of: { name: "Omoda Jaecoo Uruguay — Omoda 5 SHS, especificaciones y precios (web oficial)", url: "https://omodajaecoo.com.uy/modelos/omoda-5", date: "2026-10-23", type: "Web oficial de la marca/importador" },
    ambitoByd: { name: "Ámbito Uruguay — Efecto Tesla: BYD rebaja hasta u$s 5.000 los precios de sus autos eléctricos", url: "https://www.ambito.com/uruguay/efecto-tesla-byd-rebaja-us-5000-los-precios-sus-autos-electricos-n6302812", date: "2026-07-23", type: "Prensa" },
    mvdByd: { name: "Montevideo Portal (Airbag) — ¿Efecto Tesla? BYD anunció rebaja de precios durante el lanzamiento de su nuevo modelo", url: "https://www.montevideo.com.uy/Airbag/-Efecto-Tesla-BYD-anuncio-rebaja-de-precios-durante-el-lanzamiento-de-su-nuevo-modelo-uc969315", date: "2026-07-23", type: "Prensa" },
    forbes2025: { name: "Forbes Uruguay — Autos eléctricos: los motivos de una guerra de precios sin precedentes", url: "https://www.forbesuruguay.com/daily-cover/autos-electricos-motivos-una-guerra-precios-precedentes-esperan-representantes-lo-queda-2025-n76130", date: "2025-07-31", type: "Prensa" },
    electricosUyLista: { name: "Eléctricos Uruguay — Precios de los autos eléctricos en Uruguay: la lista completa a septiembre de 2026", url: "https://electricosuruguay.com/noticia/precios-de-los-autos-electricos-en-uruguay-la-lista-completa-a-septiembre-de-2026", date: "2026-09-01", type: "Medio especializado (agregador de precios)" },
    autoblogE5Resty: { name: "Autoblog Uruguay — Lanzamiento Omoda E5 restyling", url: "https://www.autoblog.com.uy/2026/06/lanzamiento-omoda-e5-restyling.html", date: "2026-06", type: "Prensa especializada" },
    autoblogSunray: { name: "Autoblog Uruguay — Lanzamiento: JAC Sunray Pro EV", url: "https://www.autoblog.com.uy/2026/10/lanzamiento-jac-sunray-pro-ev.html", date: "2026-10-27", type: "Prensa especializada" },
    autoblogArcfoxT1: { name: "Autoblog Uruguay — Lanzamiento: Arcfox T1", url: "https://www.autoblog.com.uy/2026/05/lanzamiento-arcfox-t1.html", date: "2026-05-26", type: "Prensa especializada" },
    autoblogArcfoxS5: { name: "Autoblog Uruguay — Lanzamiento: Arcfox αS5", url: "https://www.autoblog.com.uy/2026/06/lanzamiento-arcfox-s5.html", date: "2026-06-15", type: "Prensa especializada" },
    autoblogMacaron: { name: "Autoblog Uruguay — Lanzamiento: Wuling Macaron", url: "https://www.autoblog.com.uy/2026/04/lanzamiento-wuling-macaron.html", date: "2026-04-07", type: "Prensa especializada" },
    autoblogMiniEv: { name: "Autoblog Uruguay — Lanzamiento: Wuling Mini EV", url: "https://www.autoblog.com.uy/2026/05/lanzamiento-wuling-mini-ev.html", date: "2026-05-14", type: "Prensa especializada" },
    autoblogBinguo: { name: "Autoblog Uruguay — Lanzamiento: Wuling Binguo EV", url: "https://www.autoblog.com.uy/2026/05/lanzamiento-wuling-binguo-ev.html", date: "2026-05-29", type: "Prensa especializada" },
    autoblogNevo: { name: "Autoblog Uruguay — Lanzamiento Nevo Q05 EV: los apuntes del evento en Santa Rosa E-House", url: "https://www.autoblog.com.uy/2026/09/lanzamiento-nevo-q05-ev-los-apuntes-del.html", date: "2026-09-23", type: "Prensa especializada" },
    autoblogSoueastDm: { name: "Autoblog Uruguay — Lanzamiento: Soueast S06 DM Comfort", url: "https://www.autoblog.com.uy/2026/06/lanzamiento-soueast-s06-dm-comfort-15td.html", date: "2026-06-04", type: "Prensa especializada" },
    autoblogSoueastS06: { name: "Autoblog Uruguay — Lanzamiento: Soueast S06", url: "https://www.autoblog.com.uy/2025/12/lanzamiento-soueast-s06.html", date: "2025-12-04", type: "Prensa especializada" },
    autoblogBaic: { name: "Autoblog Uruguay — Probamos al BAIC X55e: el híbrido-serie más accesible del mercado", url: "https://www.autoblog.com.uy/2026/10/probamos-al-baic-x55e-el-hibrido-serie.html", date: "2026-10-20", type: "Prensa especializada" },
    autoblogMazda: { name: "Autoblog Uruguay — Lanzamiento: Mazda CX-5 MHEV", url: "https://www.autoblog.com.uy/2026/10/lanzamiento-mazda-cx-5-mhev.html", date: "2026-10-22", type: "Prensa especializada" },
    autoblogGla: { name: "Autoblog Uruguay — Lanzamiento: Mercedes-Benz GLA 220 4MATIC Progressive", url: "https://www.autoblog.com.uy/2026/10/lanzamiento-mercedes-benz-gla-220.html", date: "2026-10-06", type: "Prensa especializada" },
    autoblogHonda: { name: "Autoblog Uruguay — Contacto: Honda ZR-V e:HEV Touring", url: "https://www.autoblog.com.uy/2026/10/contacto-honda-zr-v-ehev-touring-20-e.html", date: "2026-10-21", type: "Prensa especializada" },
    autoblogCaptiva: { name: "Autoblog Uruguay — Lanzamiento: Chevrolet Captiva PHEV", url: "https://www.autoblog.com.uy/2026/01/lanzamiento-chevrolet-captiva-phev.html", date: "2026-01-27", type: "Prensa especializada" },
    autoblogForthing: { name: "Autoblog Uruguay — Lanzamiento: Forthing T5 Evo HEV", url: "https://www.autoblog.com.uy/2025/06/lanzamiento-forthing-t5-hev.html", date: "2025-06-26", type: "Prensa especializada" },
    autoblogM3my27: { name: "Autoblog Uruguay — Lanzamiento: Tesla Model 3 MY2027", url: "https://www.autoblog.com.uy/2026/10/lanzamiento-tesla-model-3-my2027.html", date: "2026-10-19", type: "Prensa especializada" },
    autoblogLanz2026: { name: "Autoblog Uruguay — Lanzamientos Uruguay 2026 (lista de modelos previstos)", url: "https://www.autoblog.com.uy/2025/12/lanzamientos-uruguay-2026.html", date: "2025-12", type: "Prensa especializada" },
    autoblogEx2: { name: "Autoblog Uruguay — Lanzamiento: Geely EX2", url: "https://www.autoblog.com.uy/2026/01/lanzamiento-geely-ex2.html", date: "2026-01-12", type: "Prensa especializada" },
    autoblogStaria: { name: "Autoblog Uruguay — Lanzamiento: Hyundai Staria HEV", url: "https://www.autoblog.com.uy/5027/06/lanzamiento-hyundai-staria-hev.html", date: "2026-08-13", type: "Prensa especializada" },
    autoblogS08: { name: "Autoblog Uruguay — Lanzamiento: Soueast S08 DM", url: "https://www.autoblog.com.uy/2026/05/lanzamiento-soueast-s08.html", date: "2026-05-21", type: "Prensa especializada" },
    autoblogEu5: { name: "Autoblog Uruguay — Lanzamiento: BAIC EU5 MY2026", url: "https://www.autoblog.com.uy/2026/03/lanzamiento-baic-eu5-my2026.html", date: "2026-03-17", type: "Prensa especializada" },
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
    renaultOf: { name: "Renault Uruguay — sitio oficial", url: "https://www.renault.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    mercedesOf: { name: "Mercedes-Benz Uruguay — sitio oficial", url: "https://www.mercedes-benz.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" },
    mg4Oct: { name: "El Observador — MG mueve sus fichas: nuevo eléctrico (MG4 EV Urban)", url: "https://www.elobservador.com.uy/mg-mueve-sus-fichas-uruguay-asi-es-el-nuevo-electrico-que-llega-ampliar-su-publico-n6055793", date: "2026-10-05", type: "Prensa" },
    mgs5Brand: { name: "El Observador (Brand Studio) — SUV eléctrico de MG (MGS5 EV)", url: "https://www.elobservador.com.uy/brand-studio/el-suv-electrico-el-que-mg-quiere-dar-el-gran-golpe-uruguay-450-km-autonomia-y-precios-competitivos-n6045431", date: "2026-05-29", type: "Contenido de marca (Brand Studio), no periodismo independiente" },
    kiaOf: { name: "Kia Uruguay — sitio oficial", url: "https://www.kia.com.uy/", date: "2026-10-22", type: "Web oficial de la marca/importador" },
    chevroletOf: { name: "Chevrolet Uruguay — sitio oficial", url: "https://www.chevrolet.com.uy/", date: "2026-10-22", type: "Web oficial de la marca/importador" },
    peugeotOf: { name: "Peugeot Uruguay — sitio oficial", url: "https://www.peugeot.com.uy/", date: "2026-10-22", type: "Web oficial de la marca/importador" },
    citroenOf: { name: "Citroën Uruguay — sitio oficial", url: "https://www.citroen.com.uy/", date: "2026-10-22", type: "Web oficial de la marca/importador" },
    miniOf: { name: "MINI Uruguay — sitio oficial", url: "https://mini.com.uy/", date: "2026-10-22", type: "Web oficial de la marca/importador" },
    fotonView: { name: "Autoblog Uruguay — Lanzamiento Foton e-View Connect", url: "https://www.autoblog.com.uy/2026/07/lanzamiento-foton-e-view-connect.html", date: "2026-07", type: "Prensa especializada" },
    fotonTunland: { name: "Autoblog Uruguay — Lanzamiento Foton e-Tunland", url: "https://www.autoblog.com.uy/2025/02/lanzamiento-foton-e-tunland.html", date: "2025-02", type: "Prensa especializada" },
    mlBmw: { name: "MercadoLibre Uruguay — BMW eléctricos (anuncios de Magna Motors)", url: "https://autos.mercadolibre.com.uy/bmw/electrico/", date: "2026-10-22", type: "Anuncio de concesionario (no es lista oficial)" },
    montevideoTesla: { name: "Montevideo Portal — Tesla ya anunció fecha de entrega de sus primeros vehículos en Uruguay", url: "https://www.montevideo.com.uy/Airbag/Tesla-ya-anuncio-fecha-de-entrega-de-sus-primeros-vehiculos-en-Uruguay-cuando-sera-uc977778", date: "2026-10-07", type: "Prensa" },
    autoanuarioElexio: { name: "Autoanuario — Lanzamiento local: Hyundai Elexio, nuevo SUV eléctrico que debuta en Sudamérica", url: "https://www.autoanuario.uy/post/lanzamiento-local-hyundai-elexio-nuevo-suv-el%C3%A9ctrico-que-debuta-en-sudam%C3%A9rica", date: "2026-10", type: "Prensa especializada" },
    bbvaAuto: { name: "BBVA Uruguay — Préstamo para autos eléctricos (sitio oficial)", url: "https://www.bbva.com.uy/personas/productos/prestamos/automotor/prestamo-para-autos-electricos.html", date: "2026-10-22", type: "Web oficial de la entidad" },
    scotiaAuto: { name: "Scotiabank Uruguay — Préstamo Automotor (sitio oficial)", url: "https://www.scotiabank.com.uy/Personas/Prestamos/Prestamo-Automotor/prestamo-automotor", date: "2026-10-22", type: "Web oficial de la entidad" },
    santanderMiAuto: { name: "Santander Uruguay — Préstamos: Mi Auto (menú del sitio oficial)", url: "https://www.miauto.com.uy/", date: "2026-10-22", type: "Web oficial de la entidad" },
    santanderMiAuto2023: { name: "El Observador — Cómo es la nueva apuesta de Santander para facilitar la compra de autos", url: "https://www.elobservador.com.uy/nota/como-es-la-nueva-apuesta-de-santander-para-facilitar-la-compra-de-autos-nuevos-y-usados--202351720100", date: "2023-05-18", type: "Prensa" },
    santanderMiAutoCC: { name: "Santander MiAuto — Crédito Convencional (sitio oficial)", url: "https://www.miauto.com.uy/credito-convencional/", date: "2026-10-22", type: "Web oficial de la entidad" },
    itauAuto: { name: "Itaú Uruguay — Préstamos Automotores (sitio oficial)", url: "https://www.itau.com.uy/inst/prestamosautomotores.html", date: "2026-10-22", type: "Web oficial de la entidad" },
    autoblogTesla: { name: "Autoblog Uruguay — Editorial: Tesla llegó a Uruguay", url: "https://www.autoblog.com.uy/2026/07/editorial-tesla-llego-uruguay-para.html", date: "2026-07-20", type: "Prensa especializada" },
    mlPermuta: { name: "MercadoLibre Uruguay — anuncios de autos eléctricos e híbridos 0 km (campo «Acepta permuta»)", url: "https://autos.mercadolibre.com.uy/electrico/nuevo/", date: "2026-10-22", type: "Anuncios de concesionarias (declaración del vendedor)" },
    peugeot2008: { name: "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", url: "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", date: "2025-05-27", type: "Prensa especializada" },
    ex90: { name: "Autoblog Uruguay — Lanzamiento Volvo EX90", url: "https://www.autoblog.com.uy/2025/09/lanzamiento-volvo-ex90-los-apuntes-del.html", date: "2025-09", type: "Prensa especializada" },
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
    "smart": { country: "China", note: "Empresa conjunta de Mercedes-Benz y Geely; el #5 llega desde China según Autoblog" },
    "Chevrolet": { country: "EE.UU.", note: "Marca de General Motors. Verificar el país de fabricación de cada modelo." },
    "Volvo": { country: "Suecia", note: "Propiedad del grupo chino Geely" },
    "Toyota": { country: "Japón" }, "Nissan": { country: "Japón" }, "Renault": { country: "Francia" }, "Peugeot": { country: "Francia" }, "Mercedes-Benz": { country: "Alemania" }, "Hyundai": { country: "Corea del Sur" },
    "GWM": { country: "China", note: "Great Wall Motor (incluye ORA, Haval y Tank)" }, "Changan": { country: "China" },
    "Deepal": { country: "China", note: "Marca del grupo Changan" }, "Arcfox": { country: "China", note: "Marca eléctrica del grupo BAIC" }, "Wuling": { country: "China", note: "SAIC-GM-Wuling" }, "Bestune": { country: "China", note: "Marca del grupo FAW" }, "Changan Nevo": { country: "China", note: "Submarca eléctrica de Changan" }, "Soueast": { country: "China" }, "BAIC": { country: "China" }, "Mazda": { country: "Japón" }, "Honda": { country: "Japón" }, "Forthing": { country: "China", note: "Marca del grupo Dongfeng" }, "Xpeng": { country: "China" },
    "Kia": { country: "Corea del Sur" }, "Citroën": { country: "Francia" }, "BMW": { country: "Alemania" }, "MINI": { country: "Reino Unido", note: "Marca del grupo alemán BMW" }, "Foton": { country: "China" },
    "Suzuki": { country: "Japón", note: "Algunos modelos (p. ej. Swift) se importan desde India según prensa" }
  };

  const base = { type: "BEV", year: null, seats: null, acKw: null, dcKw: null, accel: null, trunkL: null, rangeReal: null, drive: null };

  const vehicles = [
    Object.assign({}, base, {
      id: "mg4-urban", brand: "MG", model: "MG4 EV", version: "Urban (Comfort / Deluxe)", body: "Hatchback",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 21490, promo: null, currency: "USD", validOn: "2026-10-05", note: "Comfort US$ 21.490 y Deluxe US$ 23.990 según El Observador (oct. 2026); se muestra el precio de la versión Comfort.", verification: "parcial" },
      powerCv: 147, batteryKwh: 42.8, rangeKm: 382, rangeCycle: "NEDC", chargeNote: "10–80 % en 28 min (carga rápida DC; potencia no informada)",
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Citada para modelos electrificados MG vía Eximar; confirmar condiciones y exclusiones por escrito." },
      source: sources.mg4Oct, notes: "Batería LFP de 42,8 kWh (neta); 325 km WLTP y 382 km NEDC. Garantía 6 años/120.000 km y batería 8 años/160.000 km. La versión Deluxe cuesta US$ 23.990."
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
      price: { list: 33990, promo: null, currency: "USD", validOn: "2026-05-29", note: "Precio de la versión Luxury Long Range según un contenido de marca (Brand Studio) de El Observador; no es una lista oficial.", verification: "parcial" },
      powerCv: 231, batteryKwh: 62.2, rangeKm: 430, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "6 años o 120.000 km", battery: "8 años o 160.000 km", note: "Ver nota en MG4 Urban." },
      source: sources.mgs5Brand, notes: "Esta nota da batería NMC de 64 kWh y hasta 450 km WLTP, 170 kW (231 cv) y 350 Nm; otra nota de El Observador (sep. 2026) daba 62,2 kWh y 430 km: se conserva la discrepancia.", discrepancy: "Batería 64 kWh/450 km WLTP (may. 2026) vs 62,2 kWh/430 km (sep. 2026)."
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
      price: { list: 27990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio «desde» del listado oficial de BYD Uruguay (byd.com.uy/autos).", verification: "oficial" },
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
      price: { list: 23990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio de la web oficial de Chevrolet Uruguay; el lanzamiento (may. 2025) fue US$ 24.990.", verification: "oficial" },
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
      source: sources.bydOficial, notes: "Ver nota de clasificación en Yuan Pro DM-i. El Song Plus EV (eléctrico) figura ahora como ficha aparte."
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
      id: "omoda-5-shs-luxury", type: "HEV", brand: "Omoda", model: "5 SHS", version: "Luxury", body: "SUV compacto",
      importer: "Omoda Jaecoo Uruguay", dealers: [], status: "disponible",
      price: { list: 28990, promo: null, currency: "USD", validOn: "2026-10-23", note: "Precio de lista publicado en la web oficial de Omoda Jaecoo Uruguay (ficha del modelo).", verification: "oficial" },
      powerCv: 224, batteryKwh: 1.83, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "5 años o 150.000 km", battery: "8 años o 150.000 km (batería de alto voltaje)", note: "Según la web oficial (oct. 2026)." },
      source: sources.omoda5Of, notes: "Sistema híbrido SHS (1.5 turbo + motor eléctrico), 224 CV combinados, transmisión DHT. Reemplaza al C5 MHEV. Luxury: tablero digital y pantalla de 12,3″, CarPlay y Android Auto, frenado autónomo, punto ciego y mantenimiento de carril, asientos de cuero y tela, climatizador bizona, llantas de 17″, 7 airbags."
    }),
    Object.assign({}, base, {
      id: "omoda-5-shs-premium", type: "HEV", brand: "Omoda", model: "5 SHS", version: "Premium", body: "SUV compacto",
      importer: "Omoda Jaecoo Uruguay", dealers: [], status: "disponible",
      price: { list: 30990, promo: null, currency: "USD", validOn: "2026-10-23", note: "Precio de lista publicado en la web oficial de Omoda Jaecoo Uruguay (ficha del modelo).", verification: "oficial" },
      powerCv: 224, batteryKwh: 1.83, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: "5 años o 150.000 km", battery: "8 años o 150.000 km (batería de alto voltaje)", note: "Según la web oficial (oct. 2026)." },
      source: sources.omoda5Of, notes: "Sistema híbrido SHS (1.5 turbo + motor eléctrico), 224 CV combinados, transmisión DHT. Reemplaza al C5 MHEV. Premium (suma a Luxury): faros full LED, techo solar, portón eléctrico, asientos eléctricos calefactados y ventilados, cámara 360°, cargador inalámbrico de 50 W, llantas de 18″, barras de techo."
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
    }),
    Object.assign({}, base, {
      id: "renault-kangoo-etech", type: "BEV", brand: "Renault", model: "Kangoo E-Tech", version: "", body: "Furgoneta / monovolumen",
      importer: null, dealers: [], status: "disponible",
      price: { list: 44900, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Renault Uruguay.", verification: "oficial" },
      powerCv: 120, batteryKwh: 45, rangeKm: 291, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.renaultOf, notes: "Batería de 45 kWh «100 % utilizable»; hasta 291 km WLTP según versión y equipamiento; cargador estándar de 22 kW y opción de carga rápida DC. 90 kW (120 hp)."
    }),
    Object.assign({}, base, {
      id: "renault-4-e-tech", type: "BEV", brand: "Renault", model: "4 E-Tech Electric", version: "", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: 150, batteryKwh: null, rangeKm: 409, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.renaultOf, notes: "Hasta 409 km sin indicar el ciclo; hasta 150 CV. Sin capacidad de batería en la web."
    }),
    Object.assign({}, base, {
      id: "renault-koleos-full-hybrid", type: "HEV", brand: "Renault", model: "Koleos Full Hybrid E-Tech", version: "esprit Alpine", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 58000, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial; la web no aclara si corresponde a la versión esprit Alpine o a la base.", verification: "oficial" },
      powerCv: 241, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.renaultOf, notes: "Full hybrid 1.5 con caja dedicada DHT, 241 hp (142 hp combustión + 134 hp eléctrico), 350 Nm, 4x2. La web lo lista en la categoría «eléctricos» pero es un híbrido no enchufable."
    }),
    Object.assign({}, base, {
      id: "renault-filante-hybrid", type: "HEV", brand: "Renault", model: "Filante Full Hybrid E-Tech", version: "", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "Precio no publicado en la web oficial.", verification: "sin dato" },
      powerCv: 250, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.renaultOf, notes: "Full hybrid, 250 hp máximos; hasta 75 % de la conducción urbana en modo eléctrico (según la web)."
    }),
    Object.assign({}, base, {
      id: "mercedes-glb-eq", type: "BEV", brand: "Mercedes-Benz", model: "GLB EQ", version: "", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 89990, promo: null, currency: "USD", validOn: CHECKED, note: "Precio del sitio oficial de Mercedes-Benz Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.mercedesOf, notes: "La web no muestra batería ni autonomía."
    }),
    Object.assign({}, base, {
      id: "mercedes-glc-eq", type: "BEV", brand: "Mercedes-Benz", model: "New GLC EQ", version: "", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: null, promo: null, currency: "USD", validOn: null, note: "La web indica «precio a consultar».", verification: "sin dato" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.mercedesOf, notes: "GLC eléctrico (BEV). Sin batería ni autonomía en la web."
    }),
    Object.assign({}, base, {
      id: "mgs5-luxury-sr", type: "BEV", brand: "MG", model: "MGS5 EV", version: "Luxury Standard Range", body: "SUV compacto",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 29990, promo: null, currency: "USD", validOn: "2026-05-29", note: "Precio según un contenido de marca (Brand Studio) de El Observador; no es una lista oficial.", verification: "parcial" },
      powerCv: 167, batteryKwh: 49, rangeKm: 350, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "Según la fuente indicada." },
      source: sources.mgs5Brand, notes: "Se asignan las especificaciones de las «versiones de acceso» (49 kWh LFP, hasta 350 km WLTP, 125 kW/167 cv) por inferencia de la nota."
    }),
    Object.assign({}, base, {
      id: "peugeot-e-2008-gt", type: "BEV", brand: "Peugeot", model: "E-2008", version: "GT", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 43990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio de la web oficial de Peugeot Uruguay; el listado de lanzamiento (may. 2025) decía US$ 45.990.", verification: "oficial" },
      powerCv: null, batteryKwh: 62, rangeKm: 406, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "Según la fuente indicada." },
      source: sources.peugeotOf, notes: "Batería de 62 kWh según la nota de prensa de lanzamiento; precio y autonomía de la web oficial."
    }),
    Object.assign({}, base, {
      id: "peugeot-2008-hybrid-145-gt", type: "HEV", brand: "Peugeot", model: "2008 Hybrid 145", version: "GT", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 36990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio de la web oficial de Peugeot Uruguay; el listado de lanzamiento (may. 2025) decía US$ 37.990.", verification: "oficial" },
      powerCv: 145, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "Según la fuente indicada." },
      source: sources.peugeotOf, notes: "Micro-híbrido 1.2 con sistema eléctrico de 29 cv, 145 cv en total; viene de España en una sola variante GT."
    }),
    Object.assign({}, base, {
      id: "volvo-ex90-plus", type: "BEV", brand: "Volvo", model: "EX90", version: "Plus Twin Motor AWD", body: "SUV (7 plazas)",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 144900, promo: null, currency: "USD", validOn: "2025-09", note: "Precio de lanzamiento (sep. 2025) según Autoblog; anuncios de MercadoLibre 2026 muestran US$ 129.900 y US$ 144.900.", verification: "parcial" },
      powerCv: null, batteryKwh: 111, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "Según la fuente indicada." },
      source: sources.ex90, notes: "Batería de 111 kWh."
    }),
    Object.assign({}, base, {
      id: "volvo-ex90-ultra", type: "BEV", brand: "Volvo", model: "EX90", version: "Ultra Twin Motor Performance AWD", body: "SUV (7 plazas)",
      importer: "Eximar", dealers: [], status: "disponible",
      price: { list: 164900, promo: null, currency: "USD", validOn: "2025-09", note: "Precio de lanzamiento (sep. 2025) según Autoblog.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "Según la fuente indicada." },
      source: sources.ex90, notes: ""
    }),
    Object.assign({}, base, {
      id: "kia-ev3", type: "BEV", brand: "Kia", model: "EV3", version: "Desde", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 39990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio «desde» de la web oficial de Kia Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.kiaOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "kia-ev5", type: "BEV", brand: "Kia", model: "EV5", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 49990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio «desde» de la web oficial de Kia Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.kiaOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "kia-sportage-hev", type: "HEV", brand: "Kia", model: "Sportage Turbo Híbrida", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 59990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio «desde» de la web oficial de Kia Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.kiaOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "kia-sorento-hev", type: "HEV", brand: "Kia", model: "Sorento Turbo Híbrida", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 77990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio «desde» de la web oficial de Kia Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.kiaOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "kia-carnival-hev", type: "HEV", brand: "Kia", model: "Carnival Turbo Híbrida", version: "Desde", body: "Minivan",
      importer: null, dealers: [], status: "disponible",
      price: { list: 89990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio «desde» de la web oficial de Kia Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.kiaOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "chevrolet-blazer-rs-ev", type: "BEV", brand: "Chevrolet", model: "Blazer EV", version: "RS", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 72990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Chevrolet Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.chevroletOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "chevrolet-equinox-ev", type: "BEV", brand: "Chevrolet", model: "Equinox EV", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 63990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Chevrolet Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.chevroletOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "chevrolet-captiva-ev", type: "BEV", brand: "Chevrolet", model: "Captiva EV", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 33990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Chevrolet Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.chevroletOf, notes: "Ficha técnica no relevada."
    }),
    Object.assign({}, base, {
      id: "peugeot-e-3008-gt", type: "BEV", brand: "Peugeot", model: "E-3008", version: "GT", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 59990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Peugeot Uruguay.", verification: "oficial" },
      powerCv: 325, batteryKwh: null, rangeKm: 495, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.peugeotOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "peugeot-3008-hev-allure", type: "HEV", brand: "Peugeot", model: "3008 Hybrid", version: "Allure", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 43990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Peugeot Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.peugeotOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "peugeot-3008-hev-gt", type: "HEV", brand: "Peugeot", model: "3008 Hybrid", version: "GT", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 48490, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Peugeot Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.peugeotOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "peugeot-308-hev-gt", type: "HEV", brand: "Peugeot", model: "308 Hybrid", version: "GT", body: "Hatchback",
      importer: null, dealers: [], status: "disponible",
      price: { list: 39990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Peugeot Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.peugeotOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "peugeot-5008-hev-gt", type: "HEV", brand: "Peugeot", model: "5008 Hybrid", version: "GT", body: "SUV (7 plazas)",
      importer: null, dealers: [], status: "disponible",
      price: { list: 52990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Peugeot Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.peugeotOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "citroen-ami", type: "BEV", brand: "Citroën", model: "Ami", version: "Cuadriciclo eléctrico", body: "Cuadriciclo",
      importer: null, dealers: [], status: "disponible",
      price: { list: 6990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Precio publicado en la web oficial de Citroën Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: 75, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.citroenOf, notes: "Cuadriciclo urbano: no equivale a un auto convencional; ciclo de autonomía no informado."
    }),
    Object.assign({}, base, {
      id: "mini-cooper-electrico", type: "BEV", brand: "MINI", model: "Cooper Eléctrico", version: "Desde", body: "Hatchback",
      importer: null, dealers: [], status: "disponible",
      price: { list: 42990, promo: null, currency: "USD", validOn: "2026-10-22", note: "«Desde», impuestos y gastos incluidos según la web oficial de MINI Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.miniOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "mini-aceman", type: "BEV", brand: "MINI", model: "Aceman", version: "Desde", body: "SUV compacto",
      importer: null, dealers: [], status: "disponible",
      price: { list: 44990, promo: null, currency: "USD", validOn: "2026-10-22", note: "«Desde», impuestos y gastos incluidos según la web oficial de MINI Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.miniOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "mini-countryman-electrico", type: "BEV", brand: "MINI", model: "Countryman Eléctrico", version: "Desde", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 61990, promo: null, currency: "USD", validOn: "2026-10-22", note: "«Desde», impuestos y gastos incluidos según la web oficial de MINI Uruguay.", verification: "oficial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.miniOf, notes: ""
    }),
    Object.assign({}, base, {
      id: "foton-e-view-connect", type: "BEV", brand: "Foton", model: "e-View Connect", version: "Furgón 8,0 m³", body: "Furgón",
      importer: null, dealers: [], status: "disponible",
      price: { list: 35450, promo: null, currency: "USD", validOn: "2026-07", note: "Precio según Autoblog (CIF US$ 29.057).", verification: "parcial" },
      powerCv: 170, batteryKwh: 50.23, rangeKm: 245, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.fotonView, notes: "Vehículo comercial de 125 kW. Garantía 3 años o 100.000 km y 5 años o 200.000 km en la batería según la nota."
    }),
    Object.assign({}, base, {
      id: "foton-e-tunland", type: "BEV", brand: "Foton", model: "e-Tunland", version: "Pick-up", body: "Camioneta",
      importer: null, dealers: [], status: "disponible",
      price: { list: 59950, promo: null, currency: "USD", validOn: "2025-02", note: "Precio según Autoblog (CIF US$ 43.950).", verification: "parcial" },
      powerCv: null, batteryKwh: 88.5, rangeKm: 350, rangeCycle: "WLTP", chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.fotonTunland, notes: "Vehículo comercial basado en la Tunland G7."
    }),
    Object.assign({}, base, {
      id: "bmw-ix3-40-edrive-urban", type: "BEV", brand: "BMW", model: "iX3 (2027)", version: "40 eDrive Urban", body: "SUV",
      importer: "Magna Motors", dealers: [], status: "disponible",
      price: { list: 69990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Anuncio 0 km de Magna Motors en MercadoLibre Uruguay; no es lista oficial y puede cambiar.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en el anuncio." },
      source: sources.mlBmw, notes: "Modelo año 2027."
    }),
    Object.assign({}, base, {
      id: "bmw-ix3-50-xdrive-m-sport-pro", type: "BEV", brand: "BMW", model: "iX3 (2026)", version: "50 xDrive M Sport Pro", body: "SUV",
      importer: "Magna Motors", dealers: [], status: "disponible",
      price: { list: 116990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Anuncio 0 km de Magna Motors en MercadoLibre Uruguay; no es lista oficial y puede cambiar.", verification: "parcial" },
      powerCv: null, batteryKwh: 108.7, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en el anuncio." },
      source: sources.mlBmw, notes: "Batería de 108,7 kWh según el título del anuncio."
    }),
    Object.assign({}, base, {
      id: "bmw-ix3-neue-klasse", type: "BEV", brand: "BMW", model: "iX3 Neue Klasse (2027)", version: "Neue Klasse", body: "SUV",
      importer: "Magna Motors", dealers: [], status: "disponible",
      price: { list: 105990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Anuncio 0 km de Magna Motors en MercadoLibre Uruguay; no es lista oficial y puede cambiar.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en el anuncio." },
      source: sources.mlBmw, notes: "Modelo año 2027; el anuncio no detalla versión."
    }),
    Object.assign({}, base, {
      id: "bmw-ix2-edrive20", type: "BEV", brand: "BMW", model: "iX2 (2027)", version: "eDrive20", body: "SUV",
      importer: "Magna Motors", dealers: [], status: "disponible",
      price: { list: 59990, promo: null, currency: "USD", validOn: "2026-10-22", note: "Anuncio 0 km de Magna Motors en MercadoLibre Uruguay; no es lista oficial y puede cambiar.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en el anuncio." },
      source: sources.mlBmw, notes: "Modelo año 2027."
    }),
    Object.assign({}, base, {
      id: "tesla-m3-perf", type: "BEV", brand: "Tesla", model: "Model 3", version: "Performance AWD", body: "Sedán",
      importer: "Tesla (venta directa)", dealers: [], status: "disponible",
      price: { list: 49990, promo: null, currency: "USD", validOn: "2026-10-07", note: "Precio publicado por Montevideo Portal (7/10/2026); Drive Tesla Canadá y otros medios coinciden. Verificar en el configurador oficial de Tesla Uruguay.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.montevideoTesla, notes: "Entregas previstas desde octubre o noviembre de 2026 según el sitio de Tesla; llega desde Shanghái."
    }),
    Object.assign({}, base, {
      id: "hyundai-elexio-limited", type: "BEV", brand: "Hyundai", model: "Elexio", version: "Limited FWD (62 kWh)", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 36990, promo: null, currency: "USD", validOn: "2026-10", note: "Precio de la versión según Autoanuario (lanzamiento local); los anuncios de concesionarias en MercadoLibre coinciden. Verificar con Hyundai.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.autoanuarioElexio, notes: ""
    }),
    Object.assign({}, base, {
      id: "hyundai-elexio-ultimate", type: "BEV", brand: "Hyundai", model: "Elexio", version: "Ultimate AWD (88 kWh)", body: "SUV",
      importer: null, dealers: [], status: "disponible",
      price: { list: 48990, promo: null, currency: "USD", validOn: "2026-10", note: "Precio de la versión según Autoanuario (lanzamiento local); los anuncios de concesionarias en MercadoLibre coinciden. Verificar con Hyundai.", verification: "parcial" },
      powerCv: null, batteryKwh: null, rangeKm: null, rangeCycle: null, chargeNote: null,
      warranty: { vehicle: null, battery: null, note: "No informada en la fuente." },
      source: sources.autoanuarioElexio, notes: ""
    }),
    Object.assign({}, base, {
      "id": "byd-yuan-plus-gl",
      "type": "BEV",
      "brand": "BYD",
      "model": "Yuan Plus",
      "version": "GL (EV400)",
      "body": "SUV compacto",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": null,
            "promo": null,
            "currency": "USD",
            "validOn": null,
            "note": "El listado oficial no publica un precio específico para esta versión.",
            "verification": "sin dato"
      },
      "powerCv": 204,
      "batteryKwh": 49.92,
      "rangeKm": 410,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
            "vehicle": "5 años o 150.000 km",
            "battery": "8 años o 150.000 km",
            "note": "Según el lanzamiento (Autoblog, mar. 2025); confirmar con el importador."
      },
      "source": {
            "name": "BYD Uruguay — Yuan Plus (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-yuan-plus/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "La web oficial actual solo muestra la versión Luxury; la GL (49,92 kWh, 410 km NEDC) figura en el lanzamiento de marzo de 2025 con precio de US$ 39.990 de ese momento, sin confirmar si sigue disponible.",
      "accel": 7.3,
      "dcKw": 80,
      "acKw": 7,
      "trunkL": 440,
      "drive": "Delantera",
      "torqueNm": 310,
      "topSpeedKmh": 160,
      "specSource": {
            "name": "Autoblog Uruguay — Lanzamiento: BYD Yuan Plus MY2025",
            "url": "https://www.autoblog.com.uy/2025/03/lanzamiento-byd-yuan-plus-my2025.html",
            "date": "2025-03",
            "type": "Prensa especializada"
      }
}),
    Object.assign({}, base, {
      "id": "byd-yuan-plus-lux",
      "type": "BEV",
      "brand": "BYD",
      "model": "Yuan Plus",
      "version": "Luxury (EV480)",
      "body": "SUV compacto",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 31990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 204,
      "batteryKwh": 60.48,
      "rangeKm": 480,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
            "vehicle": "5 años o 150.000 km",
            "battery": "8 años o 150.000 km",
            "note": "Según el lanzamiento (Autoblog, mar. 2025); confirmar con el importador."
      },
      "source": {
            "name": "BYD Uruguay — Yuan Plus (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-yuan-plus/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Plataforma e-Platform 3.0, tren motriz 8 en 1 con bomba de calor, pantalla giratoria de 12,8\", cámaras 360° y control de crucero adaptativo.",
      "accel": 7.3,
      "dcKw": 80,
      "acKw": 7,
      "trunkL": 440,
      "drive": "Delantera",
      "torqueNm": 310,
      "topSpeedKmh": 160,
      "specSource": {
            "name": "Autoblog Uruguay — Lanzamiento: BYD Yuan Plus MY2025",
            "url": "https://www.autoblog.com.uy/2025/03/lanzamiento-byd-yuan-plus-my2025.html",
            "date": "2025-03",
            "type": "Prensa especializada"
      },
      "discrepancy": "La ficha de BYD Uruguay muestra 480 km (NEDC) en el encabezado y 410 km en el texto del motor: la primera corresponde a Luxury y la segunda a GL (Autoblog). El precio de lanzamiento de Luxury fue US$ 42.990 (mar. 2025); hoy la web oficial publica «desde» US$ 31.990."
}),
    Object.assign({}, base, {
      "id": "byd-song-plus-ev",
      "type": "BEV",
      "brand": "BYD",
      "model": "Song Plus EV",
      "version": "",
      "body": "SUV",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 41990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 218,
      "batteryKwh": 71.8,
      "rangeKm": 505,
      "rangeCycle": "NEDC",
      "chargeNote": "Función VTOL (carga reversible, vehículo a carga).",
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Song Plus EV (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-song-plus-ev/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Potencia de 160 kW (convertida a cv); batería Blade de 71,8 kWh; techo panorámico y baúl eléctrico.",
      "torqueNm": 310,
      "drive": "Delantera"
}),
    Object.assign({}, base, {
      "id": "byd-seagull-surf",
      "type": "BEV",
      "brand": "BYD",
      "model": "Seagull Surf",
      "version": "Surf",
      "body": "Hatchback urbano",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 22990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 88,
      "batteryKwh": 43.2,
      "rangeKm": 380,
      "rangeCycle": "NEDC",
      "chargeNote": "Puerto CCS Combo 2: carga rápida DC del 30 % al 80 % en unos 30 minutos (sin potencia en kW informada); carga AC con conector Tipo 2.",
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Seagull Surf (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-seagull-surf/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Motor delantero de 65 kW (convertido a cv) con batería Blade de 43,2 kWh; pantalla giratoria de 10,1\". Es una versión distinta del Seagull ya listado.",
      "drive": "Delantera"
}),
    Object.assign({}, base, {
      "id": "byd-sealion-7-blue",
      "type": "BEV",
      "brand": "BYD",
      "model": "Sealion 7",
      "version": "Blue",
      "body": "SUV",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 35990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 231,
      "batteryKwh": null,
      "rangeKm": 440,
      "rangeCycle": "WLTC",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Sealion 7 (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-sealion/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "La web aclara: «Precio versión Blue para las primeras 100 unidades»; puede haber cambiado. Motor de 170 kW (convertido a cv), llantas de 19\", pantalla de 15,6\".",
      "accel": 7.3,
      "drive": "Trasera (RWD)"
}),
    Object.assign({}, base, {
      "id": "byd-sealion-7-awd",
      "type": "BEV",
      "brand": "BYD",
      "model": "Sealion 7",
      "version": "AWD",
      "body": "SUV",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": null,
            "promo": null,
            "currency": "USD",
            "validOn": null,
            "note": "El listado oficial no publica un precio específico para esta versión.",
            "verification": "sin dato"
      },
      "powerCv": 530,
      "batteryKwh": null,
      "rangeKm": 456,
      "rangeCycle": "WLTC",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Sealion 7 (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-sealion/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Doble motor, 390 kW combinados (convertidos a cv); llantas de 20\" y sonido Dynaudio de 12 altavoces. El listado oficial publica un solo precio «desde» (versión Blue).",
      "accel": 4.5,
      "drive": "Integral (AWD)"
}),
    Object.assign({}, base, {
      "id": "byd-seal",
      "type": "BEV",
      "brand": "BYD",
      "model": "Seal",
      "version": "RWD / AWD",
      "body": "Sedán",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 59990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": null,
      "batteryKwh": null,
      "rangeKm": 520,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Seal (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-seal/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Versión RWD: un motor de 150 kW (201 cv). Versión AWD: dos motores, 390 kW (523 cv). La aceleración de 3,8 s y los 520 km corresponden a la AWD según la web; esta no indica el ciclo de homologación de los 520 km. Batería Cell to Body, V2L, conector Tipo 2.",
      "accel": 3.8,
      "drive": "Trasera (RWD) o integral (AWD)"
}),
    Object.assign({}, base, {
      "id": "byd-han",
      "type": "BEV",
      "brand": "BYD",
      "model": "Han",
      "version": "EV700 / EV600",
      "body": "Sedán",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 69990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": null,
      "batteryKwh": null,
      "rangeKm": 602,
      "rangeCycle": "NEDC",
      "chargeNote": "Carga rápida del 30 % al 80 % en 34 minutos (según la web).",
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Han (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-han/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "EV700: motor delantero de 180 kW (241 cv). EV600: suma un motor trasero de 200 kW (268 cv), tracción AWD. La web no aclara a qué versión corresponden los 602 km ni los 3,9 s. Audio Dynaudio.",
      "accel": 3.9
}),
    Object.assign({}, base, {
      "id": "byd-tang",
      "type": "BEV",
      "brand": "BYD",
      "model": "Tang",
      "version": "",
      "body": "SUV de 7 plazas",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 80990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 517,
      "batteryKwh": null,
      "rangeKm": 530,
      "rangeCycle": "WLTC",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Tang (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-new-tang/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Dos motores (180 kW delantero y 200 kW trasero, 380 kW combinados, convertidos a cv); suspensión DiSus-C, función VTOL, 7 airbags.",
      "accel": 4.9,
      "seats": 7,
      "drive": "Integral (AWD)"
}),
    Object.assign({}, base, {
      "id": "byd-ti7",
      "type": "PHEV",
      "brand": "BYD",
      "model": "Ti7",
      "version": "",
      "body": "SUV",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 57990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": 354,
      "batteryKwh": null,
      "rangeKm": 115,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Ti7 (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-ti7/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Híbrido enchufable DM-p con doble motor eléctrico, 260 kW combinados (convertidos a cv), 630 Nm y autonomía combinada de hasta 1.015 km (NEDC). Autonomía eléctrica 115 km (NEDC). Pantalla de 15,6\".",
      "accel": 5.3,
      "drive": "Integral (AWD)",
      "consumption": "5,9 L/100 km (según la web)"
}),
    Object.assign({}, base, {
      "id": "byd-atto-8",
      "type": "PHEV",
      "brand": "BYD",
      "model": "Atto 8",
      "version": "GL / GS",
      "body": "SUV de 7 plazas",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 67990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": null,
      "batteryKwh": null,
      "rangeKm": 92,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Atto 8 (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-atto-8/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Híbrido enchufable DM-p de 7 plazas. GL: motor de 200 kW, 92 km de autonomía eléctrica (NEDC). GS: dos motores de 200 kW, 160 km eléctricos (NEDC). Autonomía combinada de hasta 1.020 km (NEDC). Baúl de 270 L (960 L y 1.960 L con asientos abatidos). Llantas de 21\".",
      "seats": 7,
      "trunkL": 270,
      "drive": "Integral (4WD)"
}),
    Object.assign({}, base, {
      "id": "byd-shark",
      "type": "PHEV",
      "brand": "BYD",
      "model": "Shark",
      "version": "GL / GS",
      "body": "Pick-up",
      "importer": "Sadar",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 69490,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio «desde» del listado oficial de BYD Uruguay, sujeto a disponibilidad y modificaciones sin previo aviso.",
            "verification": "oficial"
      },
      "powerCv": null,
      "batteryKwh": 29.58,
      "rangeKm": 100,
      "rangeCycle": "NEDC",
      "chargeNote": "Carga DC de 40 kW: 30 %–80 % en 20 minutos (según la web).",
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la web oficial de BYD Uruguay; consultar al importador."
      },
      "source": {
            "name": "BYD Uruguay — Shark (importador Sadar)",
            "url": "https://byd.com.uy/autos/byd-shark/",
            "date": CHECKED,
            "type": "Web oficial del importador"
      },
      "notes": "Pick-up híbrida enchufable. Motor delantero de 170 kW y trasero de 150 kW. Autonomía combinada de 840 km (NEDC). Carga útil 835 kg y capacidad de arrastre 2.500 kg; 5.457 × 1.971 × 1.925 mm.",
      "dcKw": 40,
      "drive": "Integral (AWD)",
      "consumption": "7,5 L/100 km (según la web)"
}),
    Object.assign({}, base, {
      "id": "mercedes-cla-250-eq",
      "type": "BEV",
      "brand": "Mercedes-Benz",
      "model": "CLA 250+ EQ",
      "version": "",
      "body": "Sedán",
      "importer": "Autolider S.A.",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 84990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio de preventa informado por Autoblog (7/10/2026); sin fecha de entrega.",
            "verification": "parcial"
      },
      "powerCv": 272,
      "batteryKwh": 85,
      "rangeKm": 790,
      "rangeCycle": "WLTP",
      "chargeNote": null,
      "warranty": {
            "vehicle": "2 años sin límite de kilometraje",
            "battery": "8 años o 160.000 km",
            "note": "Motor y batería: 8 años o 160.000 km (Autoblog)."
      },
      "source": {
            "name": "Autoblog Uruguay — Lanzamiento: Mercedes-Benz CLA con tecnología EQ",
            "url": "https://www.autoblog.com.uy/2026/10/lanzamiento-mercedes-benz-cla-con.html",
            "date": "2026-10-07",
            "type": "Prensa especializada"
      },
      "notes": "En preventa. Batería NMC de 85 kWh útiles. El artículo menciona otras versiones (CLA 200 y 350+ 4MATIC) sin confirmar que se vendan en Uruguay.",
      "torqueNm": 335,
      "dcKw": 320,
      "acKw": 22,
      "drive": "Trasera"
}),
    Object.assign({}, base, {
      "id": "smart-5-pro-plus",
      "type": "BEV",
      "brand": "smart",
      "model": "smart #5",
      "version": "Pro+",
      "body": "SUV",
      "importer": "Autolider Inchcape",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 59990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio de lista Pro+ (el de lanzamiento fue US$ 54.990), según Autoblog (14/10/2026).",
            "verification": "parcial"
      },
      "powerCv": 358,
      "batteryKwh": 100,
      "rangeKm": 590,
      "rangeCycle": "WLTP",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la fuente."
      },
      "source": {
            "name": "Autoblog Uruguay — Es oficial: llegaron los primeros smart #5 a Uruguay",
            "url": "https://www.autoblog.com.uy/2026/10/es-oficial-llegaron-los-primeros-smart.html",
            "date": "2026-10-14",
            "type": "Prensa especializada"
      },
      "notes": "Batería NMC de 100 kWh brutos (94 kWh útiles) de CATL. Preventa desde septiembre de 2026; ya llegaron las primeras unidades. El artículo da dos cifras de torque para el motor trasero (373 y 343 Nm); no se informa.",
      "drive": "Trasera (RWD)"
}),
    Object.assign({}, base, {
      "id": "smart-5-brabus",
      "type": "BEV",
      "brand": "smart",
      "model": "smart #5",
      "version": "Brabus",
      "body": "SUV",
      "importer": "Autolider Inchcape",
      "dealers": [],
      "status": "disponible",
      "price": {
            "list": 69990,
            "promo": null,
            "currency": "USD",
            "validOn": CHECKED,
            "note": "Precio de lista según Autoblog (14/10/2026).",
            "verification": "parcial"
      },
      "powerCv": 637,
      "batteryKwh": 100,
      "rangeKm": 540,
      "rangeCycle": "WLTP",
      "chargeNote": null,
      "warranty": {
            "vehicle": null,
            "battery": null,
            "note": "No informada en la fuente."
      },
      "source": {
            "name": "Autoblog Uruguay — Es oficial: llegaron los primeros smart #5 a Uruguay",
            "url": "https://www.autoblog.com.uy/2026/10/es-oficial-llegaron-los-primeros-smart.html",
            "date": "2026-10-14",
            "type": "Prensa especializada"
      },
      "notes": "Dos motores, 475 kW. Batería NMC de 100 kWh brutos (94 kWh útiles).",
      "torqueNm": 710,
      "drive": "Integral (AWD)"
}),
    Object.assign({}, base, {
      "id": "jac-sunray-pro-ev",
      "type": "BEV",
      "brand": "JAC",
      "model": "Sunray Pro EV",
      "version": "Única versión (83,67 kWh)",
      "body": "Furgón",
      "importer": "Grupo Fiancar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 41990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-27",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 204,
      "batteryKwh": 83.67,
      "rangeKm": 348,
      "rangeCycle": "WLTP",
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 150.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogSunray,
      "notes": "Utilitario que reemplaza al M3 EV. Carga útil 1.237 kg y volumen de carga de 8,1 m³. Valor CIF informado: US$ 32.900. La fuente no aclara si el precio incluye IVA ni la cantidad de plazas.",
      "acKw": 11,
      "dcKw": 80,
      "drive": "Delantera",
      "lengthMm": 4998,
      "widthMm": 1970,
      "heightMm": 2188,
      "consumption": "27,6 kWh/100 km (WLTP)"
    }),
    Object.assign({}, base, {
      "id": "arcfox-t1-full",
      "type": "BEV",
      "brand": "Arcfox",
      "model": "T1",
      "version": "Full",
      "body": "Hatchback",
      "importer": "Homero de León",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 22990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-05-26",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 94,
      "batteryKwh": 42.4,
      "rangeKm": 375,
      "rangeCycle": "NEDC",
      "chargeNote": "10 %–80 % en 25 min (DC)",
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 200.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogArcfoxT1,
      "notes": "315 km según WLTP. Batería LFP.",
      "torqueNm": 176,
      "dcKw": 80,
      "acKw": 7,
      "trunkL": 459,
      "trunkMaxL": 1352,
      "lengthMm": 4337,
      "widthMm": 1860,
      "heightMm": 1572,
      "wheelbaseMm": 2770,
      "accel": 8.0,
      "topSpeedKmh": 140,
      "consumption": "11,2 kWh/100 km",
      "discrepancy": "Torque: la ficha dice 176 Nm y el copete del artículo 360 Nm."
    }),
    Object.assign({}, base, {
      "id": "arcfox-t1-extra-full",
      "type": "BEV",
      "brand": "Arcfox",
      "model": "T1",
      "version": "Extra Full",
      "body": "Hatchback",
      "importer": "Homero de León",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 25650,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-05-26",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 94,
      "batteryKwh": 42.4,
      "rangeKm": 375,
      "rangeCycle": "NEDC",
      "chargeNote": "10 %–80 % en 25 min (DC)",
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 200.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogArcfoxT1,
      "notes": "315 km según WLTP. Batería LFP.",
      "torqueNm": 176,
      "dcKw": 80,
      "acKw": 7,
      "trunkL": 459,
      "trunkMaxL": 1352,
      "lengthMm": 4337,
      "widthMm": 1860,
      "heightMm": 1572,
      "wheelbaseMm": 2770,
      "accel": 8.0,
      "topSpeedKmh": 140,
      "consumption": "11,2 kWh/100 km",
      "discrepancy": "Torque: la ficha dice 176 Nm y el copete del artículo 360 Nm."
    }),
    Object.assign({}, base, {
      "id": "arcfox-as5-air",
      "type": "BEV",
      "brand": "Arcfox",
      "model": "αS5",
      "version": "Air (65 kWh)",
      "body": "Sedán",
      "importer": "Homero de León",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 39950,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-06-15",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 248,
      "batteryKwh": 65,
      "rangeKm": 560,
      "rangeCycle": "NEDC",
      "chargeNote": "10 %–80 % en 38 min (DC)",
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 200.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogArcfoxS5,
      "notes": "Batería NMC (CATL).",
      "torqueNm": 360,
      "acKw": 7,
      "trunkL": 560,
      "trunkMaxL": 1300,
      "lengthMm": 4930,
      "widthMm": 1940,
      "heightMm": 1599,
      "wheelbaseMm": 2815,
      "accel": 7.0,
      "topSpeedKmh": 180,
      "consumption": "12,0 kWh/100 km",
      "discrepancy": "Tracción: el artículo dice «impulsor trasero» y también «tracción delantera»; la versión se llama «Air RWD»."
    }),
    Object.assign({}, base, {
      "id": "wuling-macaron-youth",
      "type": "BEV",
      "brand": "Wuling",
      "model": "Macaron",
      "version": "Youth",
      "body": "Hatchback urbano",
      "importer": "Abriley S.A.",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 12490,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-04-07",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 40,
      "batteryKwh": 17.3,
      "rangeKm": 215,
      "rangeCycle": "CLTC",
      "chargeNote": "Conector GB/T (requiere adaptadores)",
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": "3 años o 100.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMacaron,
      "notes": "Citycar de tres puertas. La fuente no indica si el precio incluye IVA ni cuántas plazas tiene.",
      "torqueNm": 92,
      "acKw": 3.3,
      "dcKw": 15,
      "trunkL": 123,
      "trunkMaxL": 734,
      "lengthMm": 3064,
      "widthMm": 1493,
      "heightMm": 1614,
      "wheelbaseMm": 2010,
      "topSpeedKmh": 100,
      "drive": "Trasera",
      "consumption": "9,0 kWh/100 km",
      "discrepancy": "Batería: 17,3 kWh en la ficha y 16,2 kWh en otra parte del mismo artículo."
    }),
    Object.assign({}, base, {
      "id": "wuling-mini-ev-26",
      "type": "BEV",
      "brand": "Wuling",
      "model": "Mini EV",
      "version": "26 kWh",
      "body": "Hatchback urbano",
      "importer": "Abriley S.A.",
      "dealers": [],
      "status": "anunciado",
      "price": {
        "list": 13990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-05-14",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 40,
      "batteryKwh": 26,
      "rangeKm": 301,
      "rangeCycle": "CLTC",
      "chargeNote": "CCS2; AC 20–100 % en 4,8 h; DC 30–80 % en 35 min",
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": "3 años o 100.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMiniEv,
      "notes": "En preventa según la fuente. Hatchback de cinco puertas. Sin dato de torque ni de plazas.",
      "acKw": null,
      "trunkL": 123,
      "trunkMaxL": 745,
      "lengthMm": 3256,
      "widthMm": 1510,
      "heightMm": 1578,
      "wheelbaseMm": 2190,
      "topSpeedKmh": 100,
      "drive": "Trasera"
    }),
    Object.assign({}, base, {
      "id": "wuling-binguo-ev-379",
      "type": "BEV",
      "brand": "Wuling",
      "model": "Binguo EV",
      "version": "37,9 kWh",
      "body": "Hatchback",
      "importer": "Abriley S.A.",
      "dealers": [],
      "status": "anunciado",
      "price": {
        "list": 18990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-05-29",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 67,
      "batteryKwh": 37.9,
      "rangeKm": 410,
      "rangeCycle": "CLTC",
      "chargeNote": "CCS2; DC 30–80 % en 35 min",
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": "3 años o 100.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogBinguo,
      "notes": "En preventa según la fuente. Homologado para cuatro pasajeros.",
      "torqueNm": 150,
      "acKw": 3.3,
      "dcKw": 40,
      "seats": 4,
      "trunkL": 395,
      "lengthMm": 3950,
      "widthMm": 1708,
      "heightMm": 1580,
      "wheelbaseMm": 2560,
      "topSpeedKmh": 130
    }),
    Object.assign({}, base, {
      "id": "bestune-xiaoma",
      "type": "BEV",
      "brand": "Bestune",
      "model": "Xiaoma",
      "version": "13,9 kWh",
      "body": "Hatchback urbano",
      "importer": null,
      "dealers": [],
      "status": "verificar",
      "price": {
        "list": 11990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-04-07",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": null,
      "batteryKwh": 13.9,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": null,
        "battery": null,
        "note": "No informada en la fuente."
      },
      "source": sources.autoblogMacaron,
      "notes": "Ficha incompleta: el precio y la batería solo aparecen como comparación dentro de la nota del Wuling Macaron (Autoblog, abril 2026). Una lista de septiembre de 2026 de Eléctricos Uruguay también lo muestra en US$ 11.990. Sin importador, autonomía ni garantía confirmados."
    }),
    Object.assign({}, base, {
      "id": "changan-nevo-q05-comfort",
      "type": "BEV",
      "brand": "Changan Nevo",
      "model": "Q05 EV",
      "version": "Comfort",
      "body": "SUV compacto",
      "importer": "Santa Rosa",
      "dealers": [],
      "status": "anunciado",
      "price": {
        "list": 23990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-09-23",
        "note": "Precio de lanzamiento/preventa informado por Autoblog (sept. 2026); El Observador lo presenta como precio de preventa.",
        "verification": "parcial"
      },
      "powerCv": 161,
      "batteryKwh": 40.3,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": null,
        "battery": null,
        "note": "No informada en la fuente."
      },
      "source": sources.autoblogNevo,
      "notes": "Autonomía informada para toda la gama: 360 a 460 km NEDC, sin asignar a cada versión. Seis airbags de serie. Sin datos de carga, baúl ni garantía en la fuente.",
      "torqueNm": 190
    }),
    Object.assign({}, base, {
      "id": "changan-nevo-q05-luxury",
      "type": "BEV",
      "brand": "Changan Nevo",
      "model": "Q05 EV",
      "version": "Luxury",
      "body": "SUV compacto",
      "importer": "Santa Rosa",
      "dealers": [],
      "status": "anunciado",
      "price": {
        "list": 26990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-09-23",
        "note": "Precio de lanzamiento/preventa informado por Autoblog (sept. 2026); El Observador lo presenta como precio de preventa.",
        "verification": "parcial"
      },
      "powerCv": 161,
      "batteryKwh": 51.9,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": null,
        "battery": null,
        "note": "No informada en la fuente."
      },
      "source": sources.autoblogNevo,
      "notes": "Autonomía informada para toda la gama: 360 a 460 km NEDC, sin asignar a cada versión. Seis airbags de serie. Sin datos de carga, baúl ni garantía en la fuente.",
      "torqueNm": 190
    }),
    Object.assign({}, base, {
      "id": "changan-nevo-q05-elite",
      "type": "BEV",
      "brand": "Changan Nevo",
      "model": "Q05 EV",
      "version": "Elite",
      "body": "SUV compacto",
      "importer": "Santa Rosa",
      "dealers": [],
      "status": "anunciado",
      "price": {
        "list": 28990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-09-23",
        "note": "Precio de lanzamiento/preventa informado por Autoblog (sept. 2026); El Observador lo presenta como precio de preventa.",
        "verification": "parcial"
      },
      "powerCv": 161,
      "batteryKwh": 51.9,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": null,
        "battery": null,
        "note": "No informada en la fuente."
      },
      "source": sources.autoblogNevo,
      "notes": "Autonomía informada para toda la gama: 360 a 460 km NEDC, sin asignar a cada versión. Seis airbags de serie. Sin datos de carga, baúl ni garantía en la fuente.",
      "torqueNm": 190
    }),
    Object.assign({}, base, {
      "id": "soueast-s06-dm-comfort",
      "type": "PHEV",
      "brand": "Soueast",
      "model": "S06",
      "version": "DM Comfort",
      "body": "SUV",
      "importer": "Fabemix (Grupo Sevel)",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 32990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-06-04",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 265,
      "batteryKwh": 19.43,
      "rangeKm": 114,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
        "vehicle": "7 años o 200.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogSoueastDm,
      "notes": "Híbrido enchufable 1.5 turbo + motor eléctrico de 150 kW. 91 km de autonomía eléctrica según WLTC.",
      "torqueNm": 310,
      "acKw": 6.6,
      "dcKw": 40,
      "trunkL": 486,
      "trunkMaxL": 977,
      "lengthMm": 4616,
      "widthMm": 1910,
      "heightMm": 1690,
      "wheelbaseMm": 2720,
      "topSpeedKmh": 190,
      "drive": "Delantera",
      "consumption": "4,9 L/100 km (combinado)",
      "discrepancy": "Torque combinado: 391 Nm en la introducción y 310 Nm en la ficha; potencia del motor térmico entre 147 y 157 cv según el pasaje."
    }),
    Object.assign({}, base, {
      "id": "soueast-s06-dm-luxury",
      "type": "PHEV",
      "brand": "Soueast",
      "model": "S06",
      "version": "DM Luxury",
      "body": "SUV",
      "importer": "Fabemix (Grupo Sevel)",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 36990,
        "promo": null,
        "currency": "USD",
        "validOn": "2025-12-04",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 265,
      "batteryKwh": 19.43,
      "rangeKm": 114,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
        "vehicle": "7 años o 200.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogSoueastS06,
      "notes": "Híbrido enchufable 1.5 turbo + motor eléctrico de 150 kW. 91 km de autonomía eléctrica según WLTC.",
      "torqueNm": 310,
      "acKw": 6.6,
      "dcKw": 40,
      "trunkL": 486,
      "trunkMaxL": 977,
      "lengthMm": 4616,
      "widthMm": 1910,
      "heightMm": 1690,
      "wheelbaseMm": 2720,
      "topSpeedKmh": 190,
      "drive": "Delantera",
      "consumption": "4,9 L/100 km (combinado)",
      "discrepancy": "Torque combinado: 391 Nm en la introducción y 310 Nm en la ficha; potencia del motor térmico entre 147 y 157 cv según el pasaje."
    }),
    Object.assign({}, base, {
      "id": "baic-x55e-comfort",
      "type": "REEV",
      "brand": "BAIC",
      "model": "X55e",
      "version": "Comfort",
      "body": "SUV compacto",
      "importer": null,
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 27990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-20",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 215,
      "batteryKwh": 1.83,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "6 años o 120.000 km",
        "battery": "8 años o 150.000 km (batería y motor eléctrico)",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogBaic,
      "notes": "Híbrido de serie (extensor de autonomía): motor 1.5 de 105 cv y 132 Nm que genera electricidad; motor eléctrico de 160 kW (215 cv). Precio de lanzamiento: US$ 25.990. Sin dato de autonomía eléctrica, consumo, baúl ni dimensiones en la fuente; importador no nombrado.",
      "torqueNm": 310
    }),
    Object.assign({}, base, {
      "id": "baic-x55e-luxury",
      "type": "REEV",
      "brand": "BAIC",
      "model": "X55e",
      "version": "Luxury",
      "body": "SUV compacto",
      "importer": null,
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 29990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-20",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 215,
      "batteryKwh": 1.83,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "6 años o 120.000 km",
        "battery": "8 años o 150.000 km (batería y motor eléctrico)",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogBaic,
      "notes": "Híbrido de serie (extensor de autonomía): motor 1.5 de 105 cv y 132 Nm que genera electricidad; motor eléctrico de 160 kW (215 cv). Precio de lanzamiento: US$ 27.990. Sin dato de autonomía eléctrica, consumo, baúl ni dimensiones en la fuente; importador no nombrado.",
      "torqueNm": 310
    }),
    Object.assign({}, base, {
      "id": "mazda-cx5-mhev-active-2wd",
      "type": "HEV",
      "brand": "Mazda",
      "model": "CX-5 MHEV",
      "version": "Active 2WD",
      "body": "SUV",
      "importer": "Magna",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 49990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-22",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 141,
      "batteryKwh": 0.17,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMazda,
      "notes": "Microhíbrido (24 V, no enchufable) con motor 2.5 e-Skyactiv G y caja automática de 6 velocidades. Peso en vacío 1.678 kg.",
      "torqueNm": 238,
      "accel": 10.5,
      "topSpeedKmh": 187,
      "drive": "Delantera",
      "trunkL": 583,
      "trunkMaxL": 2019,
      "lengthMm": 4690,
      "widthMm": 1860,
      "heightMm": 1695,
      "wheelbaseMm": 2815,
      "consumption": "7,0 L/100 km"
    }),
    Object.assign({}, base, {
      "id": "mazda-cx5-mhev-core-2wd",
      "type": "HEV",
      "brand": "Mazda",
      "model": "CX-5 MHEV",
      "version": "Core 2WD",
      "body": "SUV",
      "importer": "Magna",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 53990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-22",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 141,
      "batteryKwh": 0.17,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMazda,
      "notes": "Microhíbrido (24 V, no enchufable) con motor 2.5 e-Skyactiv G y caja automática de 6 velocidades. Peso en vacío 1.736 kg.",
      "torqueNm": 238,
      "accel": 10.5,
      "topSpeedKmh": 187,
      "drive": "Delantera",
      "trunkL": 583,
      "trunkMaxL": 2019,
      "lengthMm": 4690,
      "widthMm": 1860,
      "heightMm": 1695,
      "wheelbaseMm": 2815,
      "consumption": "7,0 L/100 km"
    }),
    Object.assign({}, base, {
      "id": "mazda-cx5-mhev-high-awd",
      "type": "HEV",
      "brand": "Mazda",
      "model": "CX-5 MHEV",
      "version": "High AWD",
      "body": "SUV",
      "importer": "Magna",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 61990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-22",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 141,
      "batteryKwh": 0.17,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMazda,
      "notes": "Microhíbrido (24 V, no enchufable) con motor 2.5 e-Skyactiv G y caja automática de 6 velocidades. Peso en vacío 1.777 kg.",
      "torqueNm": 238,
      "accel": 10.9,
      "topSpeedKmh": 185,
      "drive": "Integral (AWD)",
      "trunkL": 583,
      "trunkMaxL": 2019,
      "lengthMm": 4690,
      "widthMm": 1860,
      "heightMm": 1695,
      "wheelbaseMm": 2815,
      "consumption": "7,5 L/100 km"
    }),
    Object.assign({}, base, {
      "id": "mazda-cx5-mhev-high-plus-awd",
      "type": "HEV",
      "brand": "Mazda",
      "model": "CX-5 MHEV",
      "version": "High Plus AWD",
      "body": "SUV",
      "importer": "Magna",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 66990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-22",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 141,
      "batteryKwh": 0.17,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogMazda,
      "notes": "Microhíbrido (24 V, no enchufable) con motor 2.5 e-Skyactiv G y caja automática de 6 velocidades. Peso en vacío 1.783 kg.",
      "torqueNm": 238,
      "accel": 10.9,
      "topSpeedKmh": 185,
      "drive": "Integral (AWD)",
      "trunkL": 583,
      "trunkMaxL": 2019,
      "lengthMm": 4690,
      "widthMm": 1860,
      "heightMm": 1695,
      "wheelbaseMm": 2815,
      "consumption": "7,5 L/100 km"
    }),
    Object.assign({}, base, {
      "id": "mercedes-gla-220-4matic-progressive",
      "type": "HEV",
      "brand": "Mercedes-Benz",
      "model": "GLA 220 4MATIC",
      "version": "Progressive 8G-DCT",
      "body": "SUV compacto",
      "importer": "Autolider",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 68990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-06",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 190,
      "batteryKwh": null,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "2 años, sin límite de km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogGla,
      "notes": "Microhíbrido EQ Boost de 48 V (no enchufable) con motor 2.0 turbo. Única versión del GLA en Uruguay; reemplaza al GLA 250 4MATIC.",
      "torqueNm": 300,
      "accel": 7.6,
      "topSpeedKmh": 218,
      "drive": "Integral (AWD)",
      "trunkL": 425,
      "trunkMaxL": 1420,
      "lengthMm": 4412,
      "widthMm": 1834,
      "heightMm": 1611,
      "wheelbaseMm": 2729,
      "consumption": "7,3 L/100 km (mixto)",
      "discrepancy": "Torque: 300 Nm en la introducción y 350 Nm en la ficha técnica; el cuerpo del texto también lo llama «250»."
    }),
    Object.assign({}, base, {
      "id": "honda-zrv-ehev-touring",
      "type": "HEV",
      "brand": "Honda",
      "model": "ZR-V e:HEV",
      "version": "Touring 2.0 E-CVT 2WD",
      "body": "SUV compacto",
      "importer": "Honda Uruguay",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 46900,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-10-21",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 184,
      "batteryKwh": 1.06,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km (ampliable a 5 años o 140.000 km)",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogHonda,
      "notes": "Híbrido no enchufable (motor 2.0 Atkinson de 139 cv + motor eléctrico de 181 cv). A la venta desde julio de 2026, versión única Touring.",
      "torqueNm": 315,
      "drive": "Delantera",
      "trunkL": 380,
      "trunkMaxL": 1301,
      "lengthMm": 4567,
      "widthMm": 1840,
      "heightMm": 1621,
      "wheelbaseMm": 2655,
      "consumption": "4,6 L/100 km (mixto, fabricante); 4,7 en la prueba de Autoblog"
    }),
    Object.assign({}, base, {
      "id": "chevrolet-captiva-phev-premier",
      "type": "PHEV",
      "brand": "Chevrolet",
      "model": "Captiva PHEV",
      "version": "Premier 1.5 DHT",
      "body": "SUV",
      "importer": "General Motors Uruguay",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 39990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-01-27",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 204,
      "batteryKwh": 20.5,
      "rangeKm": 90,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
        "vehicle": "3 años o 100.000 km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogCaptiva,
      "notes": "Híbrido enchufable con batería LFP. Autonomía combinada de 950 km (NEDC). Torque de 310 Nm corresponde al motor eléctrico.",
      "torqueNm": 310,
      "acKw": 3.3,
      "dcKw": 24,
      "trunkL": 532,
      "trunkMaxL": 1690,
      "lengthMm": 4745,
      "widthMm": 1890,
      "heightMm": 1685,
      "wheelbaseMm": 2800,
      "accel": 9.9,
      "topSpeedKmh": 170,
      "consumption": "5,09 L/100 km (combinado)"
    }),
    Object.assign({}, base, {
      "id": "forthing-t5-evo-hev-luxury",
      "type": "HEV",
      "brand": "Forthing",
      "model": "T5 Evo HEV",
      "version": "Luxury 1.5TD DHT",
      "body": "SUV",
      "importer": "Noderal S.A.",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 36990,
        "promo": null,
        "currency": "USD",
        "validOn": "2025-06-26",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": null,
      "batteryKwh": 2.0,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogForthing,
      "notes": "Híbrido no enchufable con caja DHT: motor 1.5 turbo de 168 cv y motor eléctrico de 130 kW (174 cv); la fuente no da potencia combinada. Autonomía total 1.040 km (CLTC).",
      "torqueNm": 300,
      "trunkL": 300,
      "lengthMm": 4565,
      "widthMm": 1860,
      "heightMm": 1680,
      "wheelbaseMm": 2715,
      "topSpeedKmh": 195,
      "consumption": "5,3 L/100 km (combinado)",
      "discrepancy": "Precio: Motorlider informó US$ 31.990 para el T5 HEV; Autoblog lista US$ 36.990 (Luxury) y US$ 39.590 (Exclusive). Probablemente son versiones o fechas distintas."
    }),
    Object.assign({}, base, {
      "id": "forthing-t5-evo-hev-exclusive",
      "type": "HEV",
      "brand": "Forthing",
      "model": "T5 Evo HEV",
      "version": "Exclusive 1.5TD DHT",
      "body": "SUV",
      "importer": "Noderal S.A.",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 39590,
        "promo": null,
        "currency": "USD",
        "validOn": "2025-06-26",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": null,
      "batteryKwh": 2.0,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogForthing,
      "notes": "Híbrido no enchufable con caja DHT: motor 1.5 turbo de 168 cv y motor eléctrico de 130 kW (174 cv); la fuente no da potencia combinada. Autonomía total 1.040 km (CLTC).",
      "torqueNm": 300,
      "trunkL": 300,
      "lengthMm": 4565,
      "widthMm": 1860,
      "heightMm": 1680,
      "wheelbaseMm": 2715,
      "topSpeedKmh": 195,
      "consumption": "5,3 L/100 km (combinado)",
      "discrepancy": "Precio: Motorlider informó US$ 31.990 para el T5 HEV; Autoblog lista US$ 36.990 (Luxury) y US$ 39.590 (Exclusive). Probablemente son versiones o fechas distintas."
    }),
    Object.assign({}, base, {
      "id": "geely-ex2-pro",
      "type": "BEV",
      "brand": "Geely",
      "model": "EX2",
      "version": "Pro",
      "body": "Hatchback",
      "importer": "Grupo Fiancar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 20490,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-01-12",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 116,
      "batteryKwh": 39.4,
      "rangeKm": 325,
      "rangeCycle": "WLTP",
      "chargeNote": "CCS2; DC 30–80 % en 21 min",
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 150.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogEx2,
      "notes": "395 km según NEDC. Batería LFP. Subcompacto con baúl delantero de 70 L. Sin asistencias a la conducción. La versión de 30,12 kWh no llega a Uruguay por ahora.",
      "torqueNm": 150,
      "acKw": 6.6,
      "dcKw": 70,
      "trunkL": 375,
      "trunkMaxL": 1320,
      "lengthMm": 4135,
      "widthMm": 1805,
      "heightMm": 1570,
      "wheelbaseMm": 2650,
      "accel": 10.6,
      "topSpeedKmh": 140,
      "drive": "Trasera"
    }),
    Object.assign({}, base, {
      "id": "geely-ex2-max",
      "type": "BEV",
      "brand": "Geely",
      "model": "EX2",
      "version": "Max",
      "body": "Hatchback",
      "importer": "Grupo Fiancar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 22490,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-01-12",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 116,
      "batteryKwh": 39.4,
      "rangeKm": 325,
      "rangeCycle": "WLTP",
      "chargeNote": "CCS2; DC 30–80 % en 21 min",
      "warranty": {
        "vehicle": "5 años o 150.000 km",
        "battery": "8 años o 150.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogEx2,
      "notes": "395 km según NEDC. Batería LFP. Subcompacto con baúl delantero de 70 L. Es la versión con asistencias a la conducción. La versión de 30,12 kWh no llega a Uruguay por ahora.",
      "torqueNm": 150,
      "acKw": 6.6,
      "dcKw": 70,
      "trunkL": 375,
      "trunkMaxL": 1320,
      "lengthMm": 4135,
      "widthMm": 1805,
      "heightMm": 1570,
      "wheelbaseMm": 2650,
      "accel": 10.6,
      "topSpeedKmh": 140,
      "drive": "Trasera"
    }),
    Object.assign({}, base, {
      "id": "hyundai-staria-hev-safe",
      "type": "HEV",
      "brand": "Hyundai",
      "model": "Staria HEV",
      "version": "Safe 1.6 T-GDi A/T",
      "body": "Minivan",
      "importer": "Hyundai Fidocar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 59990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-08-13",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 230,
      "batteryKwh": 1.49,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años, sin límite de km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogStaria,
      "notes": "Híbrido no enchufable de 9 plazas, importado de Corea del Sur.",
      "torqueNm": 350,
      "seats": 9,
      "trunkL": 117,
      "trunkMaxL": 831,
      "lengthMm": 5253,
      "widthMm": 1997,
      "heightMm": 1990,
      "wheelbaseMm": 3273,
      "accel": 10.2,
      "topSpeedKmh": 167,
      "drive": "Delantera",
      "consumption": "7,6 L/100 km (mixto)",
      "discrepancy": "Potencia y torque: la nota suma 225 cv y 367 Nm en un pasaje y da 230 cv y 350 Nm combinados en otro."
    }),
    Object.assign({}, base, {
      "id": "hyundai-staria-hev-limited",
      "type": "HEV",
      "brand": "Hyundai",
      "model": "Staria HEV",
      "version": "Limited 1.6 T-GDi A/T",
      "body": "Minivan",
      "importer": "Hyundai Fidocar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 67990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-08-13",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 230,
      "batteryKwh": 1.49,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años, sin límite de km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogStaria,
      "notes": "Híbrido no enchufable de 9 plazas, importado de Corea del Sur.",
      "torqueNm": 350,
      "seats": 9,
      "trunkL": 117,
      "trunkMaxL": 831,
      "lengthMm": 5253,
      "widthMm": 1997,
      "heightMm": 1990,
      "wheelbaseMm": 3273,
      "accel": 10.2,
      "topSpeedKmh": 167,
      "drive": "Delantera",
      "consumption": "7,6 L/100 km (mixto)",
      "discrepancy": "Potencia y torque: la nota suma 225 cv y 367 Nm en un pasaje y da 230 cv y 350 Nm combinados en otro."
    }),
    Object.assign({}, base, {
      "id": "hyundai-staria-hev-ultimate",
      "type": "HEV",
      "brand": "Hyundai",
      "model": "Staria HEV",
      "version": "Ultimate 1.6 T-GDi A/T",
      "body": "Minivan",
      "importer": "Hyundai Fidocar",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 72990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-08-13",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 230,
      "batteryKwh": 1.49,
      "rangeKm": null,
      "rangeCycle": null,
      "chargeNote": null,
      "warranty": {
        "vehicle": "5 años, sin límite de km",
        "battery": "8 años o 160.000 km",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogStaria,
      "notes": "Híbrido no enchufable de 9 plazas, importado de Corea del Sur.",
      "torqueNm": 350,
      "seats": 9,
      "trunkL": 117,
      "trunkMaxL": 831,
      "lengthMm": 5253,
      "widthMm": 1997,
      "heightMm": 1990,
      "wheelbaseMm": 3273,
      "accel": 10.2,
      "topSpeedKmh": 167,
      "drive": "Delantera",
      "consumption": "7,6 L/100 km (mixto)",
      "discrepancy": "Potencia y torque: la nota suma 225 cv y 367 Nm en un pasaje y da 230 cv y 350 Nm combinados en otro."
    }),
    Object.assign({}, base, {
      "id": "soueast-s08-dm-luxury",
      "type": "PHEV",
      "brand": "Soueast",
      "model": "S08 DM",
      "version": "Luxury 1.5TD 1-DHT",
      "body": "SUV",
      "importer": "Fabemix (Grupo Sevel)",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 39990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-05-21",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 265,
      "batteryKwh": 18.4,
      "rangeKm": 107,
      "rangeCycle": "NEDC",
      "chargeNote": "AC 20–100 % en 2,6 h; DC 30–80 % en 30 min (sin potencia declarada)",
      "warranty": {
        "vehicle": "7 años o 200.000 km",
        "battery": null,
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogS08,
      "notes": "Híbrido enchufable de 5 o 7 plazas; 85 km eléctricos según WLTP. Baúl de 450 L con 5 plazas y 94 L con 7 plazas.",
      "torqueNm": 530,
      "trunkL": 450,
      "lengthMm": 4810,
      "widthMm": 1930,
      "heightMm": 1705,
      "wheelbaseMm": 2820,
      "topSpeedKmh": 180,
      "drive": "Delantera",
      "consumption": "4,9 L/100 km y 20,8 kWh/100 km (combinado)"
    }),
    Object.assign({}, base, {
      "id": "baic-eu5-my2026",
      "type": "BEV",
      "brand": "BAIC",
      "model": "EU5",
      "version": "MY2026 (48,3 kWh)",
      "body": "Sedán",
      "importer": "Gadaplus S.A.",
      "dealers": [],
      "status": "disponible",
      "price": {
        "list": 26990,
        "promo": null,
        "currency": "USD",
        "validOn": "2026-03-17",
        "note": "Precio de lista informado por la fuente citada; confirmar con el vendedor.",
        "verification": "parcial"
      },
      "powerCv": 163,
      "batteryKwh": 48.3,
      "rangeKm": 381,
      "rangeCycle": "NEDC",
      "chargeNote": null,
      "warranty": {
        "vehicle": "6 años o 120.000 km",
        "battery": "8 años o 150.000 km (batería y motor eléctrico)",
        "note": "Según la fuente citada."
      },
      "source": sources.autoblogEu5,
      "notes": "Sedán compacto eléctrico; la fuente menciona una actualización posterior (EU5 Plus) sin datos.",
      "torqueNm": 240,
      "acKw": 6.6,
      "dcKw": 50,
      "trunkL": 430,
      "lengthMm": 4650,
      "widthMm": 1820,
      "heightMm": 1510,
      "wheelbaseMm": 2670
    }),
  ];

  /* Marcas detectadas en prensa, sin datos de ficha todavía. No son equivalentes a una ficha. */
  const pendingBrands = [
    { brand: "Kia: EV9, EV2 y PV5", detail: "Autoblog (dic. 2025) informa que el EV9 llegará en 2026 como tercer eléctrico de Kia en Uruguay; sin precio ni fecha. Del EV2 y el PV5 no se halló información local (2.ª búsqueda, oct. 2026).", importer: null, source: sources.autoblogLanz2026 },
    { brand: "BYD Dolphin DM-i (híbrido enchufable)", detail: "Figura en la lista de lanzamientos previstos para 2026; no se confirmó su venta en Uruguay. El Yuan Pro DM-i sí está en el catálogo.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Leapmotor B03X, B05 y B10 REEV · Renault 5 E-Tech · Volvo EX30 Cross Country · Porsche Cayenne Electric", detail: "Figuran en la lista de lanzamientos previstos para 2026; en la 2.ª búsqueda (oct. 2026) no se halló lanzamiento, precio ni importador local para ninguno.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Chery: New QQ EV y Tiggo 7 PHEV · Jetour T1 PHEV · Omoda 7 SHS-P · Jaecoo 7 SHS", detail: "Omoda 7 SHS-P: Autoblog (dic. 2025) anunció su llegada para el primer trimestre de 2026, sin nota de lanzamiento posterior. Del resto no se halló información local.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Otros híbridos previstos: GAC GS8 Hybrid · Hyundai Palisade Hybrid · Jeep Avenger y Cherokee Hybrid · Peugeot 208 Hybrid · Fiat Pulse y Fastback Hybrid", detail: "Sin nota de lanzamiento ni precio oficial en Uruguay. Hay avisos de concesionarios en MercadoLibre con Jeep Avenger MHEV desde US$ 24.990, que no se consideran fuente suficiente.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "BAIC BJ30e · Arcfox αT5 · Bestune Joy 03 · Avantier EX", detail: "Eléctricos previstos para 2026; sin nota de lanzamiento ni precio en Uruguay (2.ª búsqueda). El Arcfox T1 y αS5 y el BAIC EU5 ya están cargados.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Soueast S07 y S09", detail: "El S09 1.6T Luxury es a gasolina (US$ 38.990 según Autoblog, dic. 2025); del S07 no hay precio ni versión electrificada confirmada. Ya están el S06 DM y el S08 DM.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Microlino (microauto eléctrico) · smart #2", detail: "Microlino: llegada confirmada para diciembre de 2026 según la prensa (una nota anterior decía agosto). smart #2: previsto para 2027.", importer: null, source: sources.autoblogLanz2026 },
    { brand: "Volvo y MG: precios de web oficial pendientes", detail: "Los precios de Volvo y MG provienen de prensa o anuncios: la web de MG dio error de conexión y la de Volvo no publica precio. Kia, Chevrolet, Peugeot y Citroën sí se leyeron en su web oficial el " + CHECKED + ", pero no se relevaron todas sus fichas técnicas.", importer: "Eximar (Volvo, MG)", source: sources.ex30 },
    { brand: "Audi, Porsche y Land Rover", detail: "Sus webs bloquearon la consulta (Audi), no existe la URL probada (Porsche) o no publican precio ni indican qué modelos son eléctricos/enchufables (Land Rover); sin datos cargados.", importer: null, source: sources.ex30 },
    { brand: "BAIC", detail: "No se halló información de modelos eléctricos de BAIC en Uruguay en la búsqueda del " + CHECKED + ".", importer: null, source: sources.ex30 },
    { brand: "BMW: otros modelos (iX1, iX, i4, i5)", detail: "Hay iX1, iX, i4 e i5 en MercadoLibre Uruguay, pero casi todos usados o de concesionarias que no son el importador; sin precio oficial de lista. La web de BMW Uruguay no muestra eléctricos.", importer: "Magna Motors", source: sources.mlBmw },
    { brand: "Volkswagen y Mitsubishi: sin eléctricos visibles", detail: "En sus webs oficiales no aparece ningún eléctrico o híbrido: Volkswagen lista Polo, Virtus, Nivus, T-Cross, Taos, Tiguan, Amarok y otros sin indicar propulsión eléctrica; Mitsubishi lista Outlander y Eclipse Cross solo con motor a nafta; BMW muestra conceptos Neue Klasse y su web indicaba no estar completamente disponible.", importer: null, source: { name: "Volkswagen Uruguay — sitio oficial (y webs de Mitsubishi y BMW Uruguay)", url: "https://www.volkswagen.com.uy", date: CHECKED, type: "Web oficial de la marca/importador" } },
    { brand: "Mercedes-Benz — otros modelos", detail: "La web lista GLC, Clase C y GLE en la categoría «Híbridos y Eléctricos» sin aclarar si son enchufables; no se cargaron.", importer: null, source: sources.mercedesOf },
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
    { entity: "BBVA Uruguay", product: "Préstamo para autos eléctricos", status: "vigente (web oficial)",
      accepts: "Sí (producto específico para eléctricos)", condition: "Vehículos 0 km", currencies: "Pesos, unidades indexadas (UI) o dólares", term: "Hasta 72 meses (hasta 36 meses con tasa 0 %, según la automotora)",
      rate: "TEA: 5 % en UI, 5,5 % en USD y 9,25 % en pesos (promoción hasta el 31/10/2026). Tasa 0 % hasta 36 meses: la aplicación depende de cada automotora.", financed: "Hasta 100 % del valor del vehículo 0 km",
      requirements: "Ingreso mínimo $ 25.000 (pesos o UI) o $ 50.000 (dólares); sujeto a aprobación crediticia", fees: "No informadas en la página",
      url: sources.bbvaAuto.url, simulator: null, source: sources.bbvaAuto, date: "2026-10-22" },
    { entity: "Scotiabank", product: "Préstamo Automotor (0 km y usados, incluye híbridos y eléctricos)", status: "vigente (web oficial)",
      accepts: "Sí (la página lista «Híbridos y Eléctricos» y «Tasa 0 %» sin dar el detalle)", condition: "0 km y usados de hasta 15 años; valor mínimo US$ 6.000; todas las marcas", currencies: "UI y dólares", term: "Hasta 60 cuotas mensuales",
      rate: "Desde 6,4 % en UI y 7,5 % en USD (0 km); usados desde 6,4 % en UI y 8 % en USD. La página no aclara si es TEA o TNA.", financed: "Hasta 100 % del valor, máximo US$ 100.000; a sola firma (sin prenda)",
      requirements: "Edad de 18 a 74 años; cédula vigente; constancia de domicilio (nuevos clientes); ingreso mínimo $ 30.000", fees: "No informadas en la página",
      url: sources.scotiaAuto.url, simulator: "https://www.scotiabank.com.uy/Personas/Prestamos/Herramientas/calculadora-de-prestamos", source: sources.scotiaAuto, date: "2026-10-22" },
    { entity: "Santander", product: "MiAuto — Crédito Convencional (tasa fija)", status: "vigente (web oficial)",
      accepts: "Sí (plazo ampliado para híbridos y eléctricos)", condition: "Autos nuevos y usados en automotoras adheridas; también ofrece «Compra Inteligente» (20 % de entrega, 30 % en 24 cuotas y 50 % de valor futuro mínimo garantizado)", currencies: "UI, dólares o pesos", term: "De 6 a 60 cuotas; hasta 72 cuotas para híbridos o eléctricos",
      rate: "TEA: UI desde 5,8 % hasta 13,8 %; pesos desde 18,5 % hasta 29 %; dólares desde 6,4 % hasta 15,5 %. La tasa depende del perfil y es fija durante todo el préstamo.", financed: "Hasta US$ 50.000",
      requirements: "El contrato se firma en la automotora según el vehículo, la entrega y el plazo; seguro de vida incluido", fees: "Gastos de otorgamiento: 40 UI más 8 UI por cuota, con tope de 120 UI. Precancelación: 3 meses de interés sobre el capital financiado.",
      url: sources.santanderMiAutoCC.url, simulator: "https://www.miauto.com.uy/#simulador", source: sources.santanderMiAutoCC, date: "2026-10-22" },
    { entity: "Itaú", product: "Préstamos Automotores: amortizable a sola firma y amortizable tasa 0", status: "vigente (web oficial)",
      accepts: "Sí (la página lista «Eléctricos e híbridos»)", condition: "0 km y usados sin límite de antigüedad (tasa 0: solo 0 km y solo en automotoras o concesionarias); a sola firma sirve también para comprar a un particular", currencies: "Pesos, dólares o UI (tasa 0: solo dólares)", term: "Hasta 60 meses (tasa 0: hasta 36 meses)",
      rate: "A sola firma: la tasa no se publica, se obtiene en el simulador. Tasa 0 %: sin interés, pero con comisión única de 5,5 % + IVA (12 meses) o 7 % + IVA (24 a 36 meses) sobre el monto; 6 % + IVA con Paquete Personal Bank.", financed: "Hasta 100 % del valor del vehículo",
      requirements: "12 meses de antigüedad laboral; edad de 18 a 74 años; estar al día con el banco; comprobante de ingresos y factura proforma", fees: "Sin gastos para el cliente en el préstamo a sola firma; seguro de vida incluido",
      url: sources.itauAuto.url, simulator: "https://www.itau.com.uy/inst/prestamosMiautoCalculador.html", source: sources.itauAuto, date: "2026-10-22" }
  ];


  /* Ventas 2025 por modelo (ACAU, vía Autoblog Uruguay). Incluye ventas al público, concesionarios, licitaciones e importaciones; no son patentamientos.
     No se halló un ranking por modelo de 2026. «ids» enlaza con las fichas del catálogo cuando existen. */
  const sales = {
    year: 2025, source: sources.rankAutoblog,
    note: "Cifras de 2025 de la Asociación del Comercio Automotor (ACAU) publicadas por Autoblog Uruguay el 17/02/2026. Un modelo muy vendido no es necesariamente el mejor: úsalo como señal de popularidad y de disponibilidad de servicio.",
    ev: [
      { pos: 1, model: "BYD Yuan Pro", units: 3362, ids: ["byd-yuan-pro-ev"] },
      { pos: 2, model: "BYD Seagull", units: 2061, ids: ["byd-seagull"] },
      { pos: 3, model: "Dongfeng Nammi", units: 1196, ids: ["dongfeng-nammi-330", "dongfeng-nammi-430"] },
      { pos: 4, model: "BYD New e2", units: 832, ids: ["byd-new-e2-x"] },
      { pos: 5, model: "Chevrolet Spark EUV", units: 737, ids: ["chevrolet-spark-euv-activ"] },
      { pos: 6, model: "JMC JMEV EV3 / 3", units: 589, ids: ["jmc-jmev-3"] },
      { pos: 7, model: "Geely EX5", units: 515, ids: ["geely-ex5-urban", "geely-ex5-pro", "geely-ex5-max"] },
      { pos: 8, model: "BYD Yuan Plus", units: 475, ids: ["byd-yuan-plus-gl", "byd-yuan-plus-lux"] },
      { pos: 9, model: "Omoda E5", units: 469, ids: ["omoda-e5"] },
      { pos: 10, model: "JAC Ytterby / E-S3 Ytterby", units: 394, ids: [] }
    ],
    hybrid: [
      { pos: 1, model: "Suzuki Fronx Hybrid", units: 999, ids: ["suzuki-fronx-hybrid"] },
      { pos: 2, model: "Suzuki Swift Hybrid (India)", units: 985, ids: ["suzuki-swift-hybrid"] },
      { pos: 3, model: "Toyota Corolla Cross Hybrid", units: 597, ids: ["toyota-corolla-cross-hybrid"] },
      { pos: 4, model: "Chery Tiggo 4 Hybrid", units: 281, ids: ["chery-tiggo-4-hybrid"] },
      { pos: 5, model: "Omoda C5 MHEV", units: 246, ids: [] },
      { pos: 6, model: "Omoda 5 SHS", units: 220, ids: ["omoda-5-shs-luxury", "omoda-5-shs-premium"] },
      { pos: 7, model: "Hyundai Kona Hybrid", units: 194, ids: ["hyundai-kona-hibrida"] },
      { pos: 8, model: "Changan Q05 / CS55 Plus iDD", units: 189, ids: ["changan-cs55-plus-luxury", "changan-cs55-plus-elite"] },
      { pos: 9, model: "BMW X3", units: 161, ids: [] },
      { pos: 10, model: "BYD Song Plus DM-i", units: 142, ids: ["byd-song-plus-dmi"] }
    ]
  };

  /* Qué concesionarias toman tu usado como parte de pago. Evidencia: (1) Autoblog afirma que casi todas las marcas lo hacen y que Tesla no;
     (2) el campo «Acepta permuta» que declaran los vendedores en MercadoLibre (muestra del 22/10/2026). Cada concesionaria decide qué usados acepta: consultar. */
  const tradeIn = {
    checked: "2026-10-22",
    general: "Según Autoblog Uruguay (jul. 2026), tomar un usado como parte de pago de un 0 km es algo que hacen casi todas las marcas en el país.",
    generalSource: sources.autoblogTesla,
    exceptions: [{ name: "Tesla", detail: "No toma usados como parte de pago de un 0 km (compra directa y en línea).", source: sources.autoblogTesla }],
    sample: { listings: 184, accept: 183, note: "De 184 anuncios de eléctricos e híbridos 0 km revisados en MercadoLibre Uruguay que muestran el campo «Acepta permuta», 183 lo marcan «Sí». Es lo que declara cada vendedor: no garantiza que acepten tu modelo, año o estado.", source: sources.mlPermuta },
    dealers: [
      { name: "Vipercar Automóviles", listings: 24 }, { name: "Moreira Automóviles", listings: 11 }, { name: "Eximar (MG, Volvo)", listings: 9 },
      { name: "Carrica", listings: 6 }, { name: "Alonso Automóviles", listings: 5 }, { name: "Grupo Fiancar", listings: 4 }, { name: "Barriola", listings: 3 },
      { name: "Dongfeng (tienda oficial en MercadoLibre)", listings: 3 }, { name: "Califano Automóviles", listings: 1 }, { name: "Chery (tienda oficial en MercadoLibre)", listings: 1 },
      { name: "Chevrolet Montevideo", listings: 1 }, { name: "Gonzalo Garage Automóviles", listings: 1 }, { name: "Leapmotor (tienda oficial en MercadoLibre)", listings: 1 },
      { name: "Marino Sport", listings: 1 }, { name: "Oliva Automotores", listings: 1 }, { name: "R. Cristofano", listings: 1 }, { name: "Silca", listings: 1 }
    ],
    unnamed: "Otros 109 anuncios de concesionarias con identidad verificada, sin tienda propia visible, también marcan «Acepta permuta: Sí» (108 de 109).",
    network: [
      { brand: "Hyundai", name: "Fidocar", dept: "Montevideo", place: "Florida 1234", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai Pocitos", dept: "Montevideo", place: "Av. Brasil 3149", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Oliva Automotores", dept: "Montevideo", place: "Av. Italia 5108", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Solé y Lorenzo", dept: "Montevideo", place: "Constituyente 1832", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Zucchino Motors", dept: "Montevideo", place: "Av. Centenario 3078", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Horacio Barreiro Automóviles", dept: "Montevideo", place: "L. A. de Herrera 590", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Fidocar", dept: "Canelones", place: "Ruta Interbalnearia Km 22.500", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Lagomar Automóviles", dept: "Canelones", place: "Av. Giannattasio Km 21", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "ByPass Automotores", dept: "Artigas", place: "Bypass 164", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai Punta del Este", dept: "Maldonado", place: "Av. Roosevelt, parada 13", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai San José", dept: "San José", place: "Ruta 3 km 91", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai Colonia", dept: "Colonia", place: "José Pedro Varela 548", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai Salto", dept: "Salto", place: "Blandengues 233", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Hyundai Florida", dept: "Florida", place: "Wilson Ferreira Aldunate esq. ruta 5", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Rivero Automotores", dept: "Tacuarembó", place: "Catalogne 311", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "OV Car", dept: "", place: "Independencia 975 (el sitio no indica la ciudad)", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Hyundai", name: "Felipe Castro Automóviles", dept: "", place: "Bulevar Francisco Mata 1061 (el sitio no indica la ciudad)", url: "https://www.hyundai.com.uy/red-hyundai" },
      { brand: "Toyota", name: "Casariego", dept: "Treinta y Tres / Cerro Largo", place: "", url: "https://www.toyota.com.uy/" },
      { brand: "Toyota", name: "Olivera", dept: "Tacuarembó / Salto", place: "", url: "https://www.toyota.com.uy/" },
      { brand: "Toyota", name: "Delgado", dept: "Soriano / Durazno", place: "", url: "https://www.toyota.com.uy/" },
      { brand: "Toyota", name: "El Revoltijo", dept: "Salto / Artigas", place: "", url: "https://www.toyota.com.uy/" },
      { brand: "Toyota", name: "Car Plus", dept: "Paysandú", place: "", url: "https://www.toyota.com.uy/" },
      { brand: "BYD", name: "Casa Central, Portones, Punta Carretas, Car One, Ocasiones del León", dept: "Montevideo / Canelones", place: "", url: "https://byd.com.uy/" }
    ],
    networkNote: "Red oficial de venta según los sitios de cada marca (consultados el 22/10/2026). Figurar en la red no confirma que tomen tu usado: se confirma con cada local. Faltan marcas cuyo localizador no pudimos leer (Kia, Chevrolet, GWM, otras).",
    officialPages: [
      { name: "Fidocar (Hyundai, Chery): sitio de usados con cotizador", url: "https://www.usadosfidocar.com.uy/", detail: "Tiene sección «Cotizador»; la web no aclara si cotiza tu auto como parte de pago: consultar." }
    ]
  };

  /* Movimientos de precio con fuente. Solo entran cambios con precio anterior y posterior informados por prensa, con fecha.
     «conf»: cuántas fuentes independientes coinciden. Un cambio de una sola fuente se marca como tal; lo que otra fuente contradice va en «note».
     Los precios son de lista en dólares, sin promociones ni gastos de gestoría. */
  const priceMoves = [
    { id: "byd-seagull", name: "BYD Seagull GL (EV300)", from: 19990, to: 18990, cur: "USD", date: "2026-07-23", period: "2026", conf: "3 fuentes coinciden", srcs: ["ambitoByd", "mvdByd", "teslaPrecio"], note: "Tarifario «línea 2027». El Observador informa el ajuste de US$ 1.000 sin dar cifras." },
    { id: null, name: "BYD Seagull GS (EV380)", from: 21990, to: 20990, cur: "USD", date: "2026-07-23", period: "2026", conf: "2 fuentes coinciden", srcs: ["ambitoByd", "mvdByd"], note: "Tarifario «línea 2027»." },
    { id: "byd-seagull-surf", name: "BYD Seagull Surf", from: 23990, to: 22990, cur: "USD", date: "2026-07-23", period: "2026", conf: "2 fuentes coinciden", srcs: ["ambitoByd", "mvdByd"], note: "Tarifario «línea 2027»." },
    { id: "byd-yuan-plus-lux", name: "BYD Yuan Plus Luxury (EV480)", from: 36990, to: 31990, cur: "USD", date: "2026-07-23", period: "2026", conf: "3 fuentes coinciden", srcs: ["ambitoByd", "mvdByd", "electricosUyLista"], note: "Una de las dos mayores rebajas del tarifario." },
    { id: "byd-song-plus-ev", name: "BYD Song Plus EV (GS)", from: 46990, to: 41990, cur: "USD", date: "2026-07-23", period: "2026", conf: "3 fuentes coinciden", srcs: ["ambitoByd", "mvdByd", "electricosUyLista"], note: "Una de las dos mayores rebajas del tarifario." },
    { id: null, name: "BYD Yuan Pro EV GSX", from: 30990, to: 29990, cur: "USD", date: "2026-07-23", period: "2026", conf: "1 fuente", srcs: ["ambitoByd"], note: "Es la versión GSX; el Yuan Pro de entrada figura hoy en US$ 27.990. Montevideo Portal menciona una rebaja del Yuan Pro GSi Plus sin dar cifras. No se pudo confirmar el monto con una segunda fuente." },
    { id: "byd-yuan-pro-ev", name: "BYD Yuan Pro", from: 30990, to: 27990, cur: "USD", date: "2025-07-31", dateNote: "«en los últimos meses» antes de esa fecha", period: "2025", conf: "2 fuentes coinciden", srcs: ["forbes2025", "teslaPrecio"], note: "El Observador (23/7/2026) cuenta que hace un año BYD recortó US$ 3.000 el Yuan Pro." },
    { id: "byd-seagull", name: "BYD Seagull", from: 21990, to: 19990, cur: "USD", date: "2025-07-31", dateNote: "«en los últimos meses» antes de esa fecha", period: "2025", conf: "2 fuentes coinciden", srcs: ["forbes2025", "teslaPrecio"], note: "El Observador (23/7/2026) cuenta que hace un año BYD recortó US$ 2.000 el Seagull." },
    { id: null, name: "Omoda E5 Comfort (modelo 2025)", from: 33990, to: 31990, cur: "USD", date: "2025-07-31", dateNote: "precio anterior de marzo de 2025", period: "2025", conf: "1 fuente", srcs: ["forbes2025"], note: "Es el modelo anterior al restyling; el E5 renovado (2027) se vende desde US$ 26.990 pero tiene otra batería: no es una comparación equivalente." },
    { id: "volvo-ex30-ultra", name: "Volvo EX30 Ultra", from: 59900, to: 54900, cur: "USD", date: null, dateNote: "fecha no informada (lista a septiembre de 2026)", period: "otro", conf: "1 fuente", srcs: ["electricosUyLista"], note: "Coincide con el precio actual del catálogo." }
  ];
  const marketTimeline = [
    { date: "2025-07-31", title: "«Guerra de precios sin precedentes»", text: "BYD recortó el Yuan Pro (−US$ 3.000) y el Seagull (−US$ 2.000) y otras marcas ajustaron.", srcs: ["forbes2025", "teslaPrecio"] },
    { date: "2026-06", title: "Omoda renueva el E5", text: "El E5 restyling (modelo 2027) se ofrece desde US$ 26.990.", srcs: ["autoblogE5Resty"] },
    { date: "2026-07-01", title: "Se anuncia el IMESI para eléctricos", text: "Previsto desde el 1/1/2027: 0 % hasta US$ 19.000 de valor de importación, 5 % de 19.001 a 27.000 y 9 % por encima. Sin norma oficial verificada.", srcs: ["imesiObservador", "imesiAutoblog"] },
    { date: "2026-07-17", title: "Tesla llega a Uruguay", text: "Publica precios: Model 3 desde US$ 32.990 y Model Y desde US$ 36.490. Más de 200 unidades en 24 horas, según la prensa.", srcs: ["teslaInfobae", "montevideoTesla"] },
    { date: "2026-07-23", title: "BYD publica su tarifario «línea 2027»", text: "Baja de US$ 1.000 a 5.000 en cinco versiones.", srcs: ["ambitoByd", "mvdByd", "teslaPrecio"] },
    { date: "2026-10-05", title: "El MEF analiza postergar el IMESI", text: "Prensa informa que se estudia una breve postergación; sin anuncio oficial.", srcs: ["imesiPostergar"] }
  ];

  const market = {
    ev2025: 14387, growth2025: "147 %", share2026ZeroKm: "36,7 %", shareNote: "Cifras ACAU citadas por prensa (ene–ago 2026).",
    source: sources.acau
  };

  /* Fichas técnicas ampliadas (jul.–oct. 2026): potencia, batería, carga, baúl, torque, etc.
     Cada entrada trae su propia fuente (specSource). Los datos de prensa corresponden al modelo
     presentado en Uruguay; donde la versión no es inequívoca se aclara en specNote. */
  const specs = {
    "tesla-m3-sr": {"batteryKwh": 63, "rangeKm": 520, "rangeCycle": "WLTP", "powerCv": 283, "accel": 6.1, "dcKw": 170, "trunkL": 594, "drive": "Trasera (RWD)", "specSource": {"name": "Autoblog Uruguay — Tesla ya homologó los Model 3 y Model Y", "url": "https://www.autoblog.com.uy/2026/06/tesla-ya-homologo-los-model-3-y-model-y.html", "date": "2026-06", "type": "Prensa especializada"}},
    "tesla-m3-plr": {"batteryKwh": 85, "powerCv": 320, "drive": "Trasera (RWD)", "specSource": {"name": "Autoblog Uruguay — Probamos al Tesla Model 3 Premium Long Range", "url": "https://www.autoblog.com.uy/2026/10/probamos-al-tesla-model-3-premium-long.html", "date": "2026-10", "type": "Prensa especializada"}, "specNote": "Batería y potencia según la prueba de Autoblog (oct. 2026).", "specDisc": "Autoblog (prueba, oct. 2026) lo describe como Long Range RWD (320 cv); Montevideo Portal (7/10/2026) lista el Model 3 de US$ 37.990 como Long Range AWD."},
    "tesla-my-prwd": {"batteryKwh": 63, "powerCv": 299, "accel": 5.9, "dcKw": 175, "trunkL": 822, "drive": "Trasera (RWD)", "specSource": {"name": "Autoblog Uruguay — Tesla ya homologó los Model 3 y Model Y", "url": "https://www.autoblog.com.uy/2026/06/tesla-ya-homologo-los-model-3-y-model-y.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Datos de la versión de 466 km WLTP, que Autoblog (jun. 2026) llama Standard Range RWD; El Observador la nombra «Premium RWD»."},
    "tesla-my-lrrwd": {"batteryKwh": 85, "powerCv": 347, "accel": 5.6, "dcKw": 250, "trunkL": 822, "drive": "Trasera (RWD)", "specSource": {"name": "Autoblog Uruguay — Tesla ya homologó los Model 3 y Model Y", "url": "https://www.autoblog.com.uy/2026/06/tesla-ya-homologo-los-model-3-y-model-y.html", "date": "2026-06", "type": "Prensa especializada"}, "specDisc": "Autoblog (jun. 2026) informa 609 km WLTP para el Long Range RWD; El Observador, 530 km."},
    "byd-yuan-pro-ev": {"batteryKwh": 45.12, "rangeKm": 380, "rangeCycle": "NEDC", "powerCv": 173, "accel": 7.9, "acKw": 6.6, "dcKw": 65, "trunkL": 265, "drive": "Delantera", "torqueNm": 290, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: BYD Yuan Pro", "url": "https://www.autoblog.com.uy/2024/08/lanzamiento-byd-yuan-pro.html", "date": "2024-08", "type": "Prensa especializada"}},
    "gac-aion-ut": {"batteryKwh": 44.12, "rangeKm": 400, "rangeCycle": "NEDC", "powerCv": 134, "accel": 11.4, "acKw": 6.6, "dcKw": 64, "trunkL": 340, "drive": "Delantera", "torqueNm": 145, "topSpeedKmh": 150, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Aion UT", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-gac-aion-ut.html", "date": "2025-12", "type": "Prensa especializada"}},
    "gac-aion-ut-max": {"batteryKwh": 60, "rangeKm": 512, "rangeCycle": "NEDC", "powerCv": 201, "accel": 7.3, "acKw": 6.6, "dcKw": 87, "trunkL": 340, "drive": "Delantera", "torqueNm": 210, "topSpeedKmh": 150, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Aion UT", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-gac-aion-ut.html", "date": "2025-12", "type": "Prensa especializada"}},
    "gac-aion-es": {"batteryKwh": 55.2, "rangeKm": 442, "rangeCycle": "NEDC", "powerCv": 134, "trunkL": 450, "drive": "Delantera", "torqueNm": 225, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Aion ES", "url": "https://www.autoblog.com.uy/2024/11/lanzamiento-gac-aion-es.html", "date": "2024-11", "type": "Prensa especializada"}, "specNote": "GAC no declaró aceleración ni potencia de carga."},
    "gac-aion-v": {"batteryKwh": 75.26, "rangeKm": 602, "rangeCycle": "NEDC", "powerCv": 200, "accel": 7.9, "acKw": 6.6, "dcKw": 180, "trunkL": 427, "drive": "Delantera", "torqueNm": 240, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Aion V", "url": "https://www.autoblog.com.uy/2025/08/lanzamiento-gac-aion-v.html", "date": "2025-08", "type": "Prensa especializada"}, "specDisc": "La web del importador muestra dos autonomías (505 y 602 km); Autoblog informa 602 km NEDC para la versión única que llega."},
    "gac-hyptec-ht": {"batteryKwh": 72.7, "rangeKm": 511, "rangeCycle": "NEDC", "powerCv": 245, "accel": 5.8, "acKw": 6.6, "dcKw": 163, "trunkL": 670, "drive": "Trasera", "torqueNm": 309, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Hyptec HT", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-gac-hyptec-ht.html", "date": "2025-09", "type": "Prensa especializada"}, "specDisc": "La web del importador informa 0-100 km/h en 6,8 s; Autoblog (sep. 2025), 5,8 s."},
    "jmc-jmev-3": {"powerCv": 68, "acKw": 5.5, "dcKw": 50, "trunkL": 250, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: JMC JMEV 3", "url": "https://www.autoblog.com.uy/2026/01/lanzamiento-jmc-jmev-3.html", "date": "2026-01", "type": "Prensa especializada"}, "specNote": "Aceleración 0-50 km/h: 4,5 s (no se informa 0-100).", "specDisc": "Anuncios de MercadoLibre indican garantía de 3 años o 100.000 km; Autoblog informó 3 años o 80.000 km."},
    "dongfeng-nammi-330": {"acKw": 3.3, "dcKw": 60, "trunkL": 309, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamientos: Nammi 330 y 430", "url": "https://www.autoblog.com.uy/2024/09/lanzamientos-nammi-330-y-430.html", "date": "2024-09", "type": "Prensa especializada"}},
    "dongfeng-nammi-430": {"acKw": 6.6, "dcKw": 60, "trunkL": 309, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamientos: Nammi 330 y 430", "url": "https://www.autoblog.com.uy/2024/09/lanzamientos-nammi-330-y-430.html", "date": "2024-09", "type": "Prensa especializada"}},
    "geely-ex5-urban": {"powerCv": 214, "accel": 6.9, "acKw": 11, "dcKw": 100, "trunkL": 461, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Geely EX5 Urban", "url": "https://www.autoblog.com.uy/2026/09/lanzamiento-geely-ex5-urban.html", "date": "2026-09", "type": "Prensa especializada"}},
    "geely-ex5-pro": {"accel": 6.9, "acKw": 11, "dcKw": 110, "trunkL": 461, "torqueNm": 320, "topSpeedKmh": 175, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Geely EX5", "url": "https://www.autoblog.com.uy/2025/06/lanzamiento-geely-ex5.html", "date": "2025-06", "type": "Prensa especializada"}},
    "geely-ex5-max": {"rangeKm": 430, "rangeCycle": "WLTP", "accel": 7.1, "acKw": 11, "dcKw": 110, "trunkL": 461, "torqueNm": 320, "topSpeedKmh": 175, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Geely EX5", "url": "https://www.autoblog.com.uy/2025/06/lanzamiento-geely-ex5.html", "date": "2025-06", "type": "Prensa especializada"}},
    "omoda-5-shs-luxury": {"powerCv": 224, "torqueNm": 290, "accel": 7.9, "drive": "Delantera", "trunkL": 372, "lengthMm": 4450, "widthMm": 1830, "heightMm": 1588, "wheelbaseMm": 2600, "consumption": "19,6 km/l combinado (valor de laboratorio, según la web)", "batteryKwh": 1.83, "specSource": sources.omoda5Of, "specNote": "Híbrido no enchufable: no se carga desde la red. La web no informa la batería; los 1,83 kWh vienen de Autoblog (oct. 2025). Consumo de laboratorio: puede variar en uso real."},
    "omoda-5-shs-premium": {"powerCv": 224, "torqueNm": 290, "accel": 7.9, "drive": "Delantera", "trunkL": 372, "lengthMm": 4450, "widthMm": 1830, "heightMm": 1588, "wheelbaseMm": 2600, "consumption": "19,6 km/l combinado (valor de laboratorio, según la web)", "batteryKwh": 1.83, "specSource": sources.omoda5Of, "specNote": "Híbrido no enchufable: no se carga desde la red. La web no informa la batería; los 1,83 kWh vienen de Autoblog (oct. 2025). Consumo de laboratorio: puede variar en uso real."},
    "jaecoo-5-ev": {"batteryKwh": 58.9, "rangeKm": 461, "rangeCycle": "NEDC", "powerCv": 211, "torqueNm": 288, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Omoda 5 SHS y Jaecoo 5 EV", "url": "https://www.autoblog.com.uy/2025/10/lanzamiento-omoda-5-shs-y-jaecoo-5-ev.html", "date": "2025-10", "type": "Prensa especializada"}, "specNote": "Uso real estimado por el importador: alrededor de 400 km."},
    "zeekr-x-premium": {"accel": 5.6, "acKw": 11, "dcKw": 150, "trunkL": 362, "drive": "Trasera (RWD)", "torqueNm": 343, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Zeekr X", "url": "https://www.autoblog.com.uy/2024/07/lanzamiento-zeekr-x.html", "date": "2024-07", "type": "Prensa especializada"}},
    "zeekr-x-flagship": {"accel": 3.8, "acKw": 22, "dcKw": 150, "trunkL": 362, "drive": "Integral (AWD)", "torqueNm": 543, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Zeekr X", "url": "https://www.autoblog.com.uy/2024/07/lanzamiento-zeekr-x.html", "date": "2024-07", "type": "Prensa especializada"}},
    "jac-e-s1": {"powerCv": 60, "accel": 10.7, "trunkL": 121, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: JAC e-S1", "url": "https://www.autoblog.com.uy/2022/02/lanzamiento-jac-e-s1.html", "date": "2022-02", "type": "Prensa especializada"}},
    "mg4-urban": {"powerCv": 147, "accel": 8.7, "acKw": 11, "dcKw": 82, "trunkL": 382, "drive": "Delantera", "specSource": {"name": "El Observador — MG mueve sus fichas en Uruguay: el nuevo eléctrico", "url": "https://www.elobservador.com.uy/mg-mueve-sus-fichas-uruguay-asi-es-el-nuevo-electrico-que-llega-ampliar-su-publico-n6055793", "date": "s/f", "type": "Prensa"}},
    "mgs5-sr": {"trunkL": 453, "torqueNm": 250, "specSource": {"name": "El Observador — El SUV eléctrico con el que MG quiere dar el gran golpe en Uruguay", "url": "https://www.elobservador.com.uy/brand-studio/el-suv-electrico-el-que-mg-quiere-dar-el-gran-golpe-uruguay-450-km-autonomia-y-precios-competitivos-n6045431", "date": "s/f", "type": "Prensa"}},
    "mgs5-luxury-sr": {"trunkL": 453, "torqueNm": 250, "specSource": {"name": "El Observador — El SUV eléctrico con el que MG quiere dar el gran golpe en Uruguay", "url": "https://www.elobservador.com.uy/brand-studio/el-suv-electrico-el-que-mg-quiere-dar-el-gran-golpe-uruguay-450-km-autonomia-y-precios-competitivos-n6045431", "date": "s/f", "type": "Prensa"}},
    "mgs5-lr": {"trunkL": 453, "torqueNm": 350, "specSource": {"name": "El Observador — El SUV eléctrico con el que MG quiere dar el gran golpe en Uruguay", "url": "https://www.elobservador.com.uy/brand-studio/el-suv-electrico-el-que-mg-quiere-dar-el-gran-golpe-uruguay-450-km-autonomia-y-precios-competitivos-n6045431", "date": "s/f", "type": "Prensa"}},
    "leapmotor-t03": {"accel": 14, "trunkL": 210, "drive": "Delantera", "torqueNm": 158, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Leapmotor T03", "url": "https://www.autoblog.com.uy/2022/12/lanzamiento-leapmotor-t03.html", "date": "2022-12", "type": "Prensa especializada"}, "specDisc": "Autoblog informa 300 km WLTP; Montevideo Portal, 280 km WLTP."},
    "volvo-ex90-plus": {"batteryKwh": 111, "rangeKm": 570, "rangeCycle": "WLTP", "powerCv": 408, "drive": "Integral (AWD)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento Volvo EX90", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-volvo-ex90-los-apuntes-del.html", "date": "2025-09", "type": "Prensa especializada"}},
    "volvo-ex90-ultra": {"batteryKwh": 111, "rangeKm": 570, "rangeCycle": "WLTP", "powerCv": 517, "drive": "Integral (AWD)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento Volvo EX90", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-volvo-ex90-los-apuntes-del.html", "date": "2025-09", "type": "Prensa especializada"}},
    "foton-e-view-connect": {"acKw": 6.6, "dcKw": 50, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Foton e-View Connect", "url": "https://www.autoblog.com.uy/2026/07/lanzamiento-foton-e-view-connect.html", "date": "2026-07", "type": "Prensa especializada"}},
    "foton-e-tunland": {"powerCv": 174, "acKw": 6.6, "dcKw": 120, "drive": "Trasera", "torqueNm": 330, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Foton e-Tunland", "url": "https://www.autoblog.com.uy/2025/02/lanzamiento-foton-e-tunland.html", "date": "2025-02", "type": "Prensa especializada"}, "specNote": "Capacidad de carga: 600 kg."},
    "kia-ev3": {"batteryKwh": 58.3, "rangeKm": 436, "rangeCycle": "WLTP", "powerCv": 204, "drive": "Delantera (2WD)", "torqueNm": 283, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Kia EV3", "url": "https://www.autoblog.com.uy/2025/10/lanzamiento-kia-ev3-los-apuntes-del.html", "date": "2025-10", "type": "Prensa especializada"}, "specNote": "Se asignan los datos de la versión de acceso (Light, 58,3 kWh; 436 km WLTP, el mínimo del rango que publica Autoblog) por ser la de precio «desde»; la Light+ (81,4 kWh) llega a 605 km. Confirmar en el configurador."},
    "kia-ev5": {"batteryKwh": 88.16, "rangeKm": 550, "rangeCycle": "WLTP", "powerCv": 217, "drive": "Delantera (2WD)", "torqueNm": 310, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Kia EV5", "url": "https://www.autoblog.com.uy/2025/03/lanzamiento-kia-ev5-los-apuntes-del.html", "date": "2025-03", "type": "Prensa especializada"}, "specNote": "Datos de la versión Land 2WD Long Range, la única que Autoblog describe; la versión «desde» de la web puede ser otra (p. ej. Air)."},
    "chevrolet-blazer-rs-ev": {"batteryKwh": 102, "rangeKm": 520, "rangeCycle": "EPA (EE.UU.)", "powerCv": 347, "accel": 5.8, "acKw": 22, "dcKw": 190, "trunkL": 436, "drive": "Trasera (RWD)", "torqueNm": 440, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chevrolet Blazer EV", "url": "https://www.autoblog.com.uy/2025/01/lanzamiento-chevrolet-blazer-ev.html", "date": "2025-01", "type": "Prensa especializada"}},
    "chevrolet-equinox-ev": {"batteryKwh": 85, "rangeKm": 488, "rangeCycle": "EPA (EE.UU.)", "powerCv": 288, "accel": 5.8, "acKw": 22, "dcKw": 150, "trunkL": 441, "drive": "Integral (eAWD)", "torqueNm": 451, "warranty": {"vehicle": "3 años o 100.000 km", "battery": "8 años o 160.000 km", "note": "Según Autoblog (prueba, dic. 2025)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chevrolet Equinox EV", "url": "https://www.autoblog.com.uy/2025/01/lanzamiento-chevrolet-equinox-ev.html", "date": "2025-01", "type": "Prensa especializada"}},
    "chevrolet-captiva-ev": {"batteryKwh": 60, "rangeKm": 415, "rangeCycle": "NEDC", "powerCv": 201, "accel": 9.9, "acKw": 6.6, "dcKw": 100, "trunkL": 532, "drive": "Delantera", "torqueNm": 310, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chevrolet Captiva EV", "url": "https://www.autoblog.com.uy/2025/10/lanzamiento-chevrolet-captiva-ev.html", "date": "2025-10", "type": "Prensa especializada"}},
    "toyota-bz4x": {"batteryKwh": 73.11, "rangeKm": 525, "rangeCycle": "WLTC", "powerCv": 221, "accel": 7.4, "acKw": 22, "dcKw": 150, "trunkL": 452, "warranty": {"vehicle": "3 años o 100.000 km (extensible a 10 años o 200.000 km)", "battery": null, "note": "Según Autoblog (lanzamiento, abr. 2026)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Toyota bZ4X", "url": "https://www.autoblog.com.uy/2026/04/lanzamiento-toyota-bz4x.html", "date": "2026-04", "type": "Prensa especializada"}, "specNote": "Datos de la versión Limited 2WD (525 km, 221 cv, 7,4 s); el AWD-i rinde 338 cv, 5,1 s y 480 km."},
    "gwm-ora-03": {"batteryKwh": 57.7, "powerCv": 171, "accel": 8.3, "acKw": 11, "dcKw": 80, "trunkL": 228, "drive": "Delantera", "torqueNm": 250, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GWM ORA 03 MY2026", "url": "https://www.autoblog.com.uy/2026/05/lanzamiento-gwm-ora-03-my2026.html", "date": "2026-05", "type": "Prensa especializada"}, "specNote": "Se asigna la batería de 57,7 kWh (SVOLT) por el precio de US$ 28.990 (versión SR); la nota de Autoblog da 400 y 480 km sin aclarar cuál es WLTP y cuál NEDC. La batería de 47,8 kWh (CATL) lleva 64 kW DC."},
    "hyundai-ioniq-5": {"specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Ioniq 5 (facelift)", "url": "https://www.autoblog.com.uy/2025/02/lanzamiento-hyundai-ioniq-5-facelift.html", "date": "2025-02", "type": "Prensa especializada"}, "specDisc": "Autoblog (feb. 2025) informa para el IONIQ 5 renovado 84 kWh, 228 cv y 570 km (Safe) / 530 km (Limited) WLTP, tracción trasera; la web del importador mostraba 72,6 kWh y 225 hp."},
    "byd-yuan-pro-dmi": {"specSource": {"name": "Autoblog Uruguay — Lanzamiento: BYD Yuan Pro DM-i", "url": "https://www.autoblog.com.uy/2026/06/lanzamiento-byd-yuan-pro-dm-i.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Versiones: GL (7,85 kWh, 45 km NEDC, 166 cv, 9,1 s, 3,3 kW AC) y GS (18,03 kWh, 110 km NEDC, 212 cv, 7,5 s, 6,6 kW AC); baúl 425 L; tracción delantera. La web del importador no indica a cuál corresponde el precio."},
    "changan-cs55-plus-luxury": {"batteryKwh": 18.99, "rangeKm": 125, "rangeCycle": "CLTC", "powerCv": 215, "accel": 7.3, "acKw": 6.6, "trunkL": 475, "drive": "Delantera", "torqueNm": 330, "consumption": "15,4 kWh/100 km (eléctrico, CLTC); 1,3 l/100 km (mixto, CLTC)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Changan CS55 Plus PHEV", "url": "https://www.autoblog.com.uy/2026/05/lanzamiento-changan-cs55-plus-phev.html", "date": "2026-05", "type": "Prensa especializada"}, "specNote": "Potencia combinada declarada por Changan (motor naftero 108 cv + eléctrico 211 cv).", "specDisc": "La web del importador informa 107 km (NEDC); Autoblog, 125 km CLTC (ciclos distintos)."},
    "changan-cs55-plus-elite": {"batteryKwh": 18.99, "rangeKm": 125, "rangeCycle": "CLTC", "powerCv": 215, "accel": 7.3, "acKw": 6.6, "trunkL": 475, "drive": "Delantera", "torqueNm": 330, "consumption": "15,4 kWh/100 km (eléctrico, CLTC); 1,3 l/100 km (mixto, CLTC)", "warranty": {"vehicle": "4 años o 100.000 km", "battery": "8 años o 150.000 km", "note": "Según Autoblog (jul. 2025)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Changan CS55 Plus iDD", "url": "https://www.autoblog.com.uy/2025/07/lanzamiento-changan-cs55-plus-idd.html", "date": "2025-07", "type": "Prensa especializada"}, "specDisc": "La web del importador informa 107 km (NEDC); Autoblog, 125 km CLTC (ciclos distintos)."},
    "changan-lumin": {"batteryKwh": 17.65, "rangeKm": 205, "rangeCycle": "CLTC", "acKw": 3.3, "torqueNm": 83, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Changan Lumin", "url": "https://www.autoblog.com.uy/2026/04/lanzamiento-changan-lumin.html", "date": "2026-04", "type": "Prensa especializada"}, "specNote": "Autoblog informa también 190 km NEDC. Potencia informada: 35 kW."},
    "renault-koleos-full-hybrid": {"batteryKwh": 1.64, "powerCv": 245, "trunkL": 633, "drive": "Delantera", "torqueNm": 545, "warranty": {"vehicle": "3 años o 100.000 km", "battery": null, "note": "Según Autoblog (sep. 2025)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Renault Koleos E-Tech Hybrid", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-renault-koleos-e-tech-hybrid.html", "date": "2025-09", "type": "Prensa especializada"}},
    "renault-kangoo-etech": {"acKw": 22, "dcKw": 80, "drive": "Delantera", "torqueNm": 250, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Renault Kangoo E-Tech", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-renault-kangoo-e-tech.html", "date": "2025-12", "type": "Prensa especializada"}, "specNote": "Furgón: volumen de carga 4,3 m³ y carga útil 800 kg."},
    "xpeng-g6": {"batteryKwh": 91.4, "rangeKm": 500, "powerCv": 469, "accel": 4.1, "drive": "Integral (AWD)", "torqueNm": 660, "specSource": {"name": "Autoblog Uruguay — Es oficial: Xpeng desembarca en Uruguay importado por Santa Rosa", "url": "https://www.autoblog.com.uy/2025/04/es-oficial-xpeng-desembarca-en-uruguay.html", "date": "2025-04", "type": "Prensa especializada"}, "specNote": "Datos de prensa de abril de 2025 (anuncio de llegada); el ciclo de homologación de la autonomía no se informa."},
    "xpeng-g9": {"batteryKwh": 98, "rangeKm": 520, "rangeCycle": "WLTP", "powerCv": 551, "accel": 3.9, "drive": "Integral (AWD)", "torqueNm": 717, "specSource": {"name": "Autoblog Uruguay — Es oficial: Xpeng desembarca en Uruguay importado por Santa Rosa", "url": "https://www.autoblog.com.uy/2025/04/es-oficial-xpeng-desembarca-en-uruguay.html", "date": "2025-04", "type": "Prensa especializada"}, "specNote": "Datos de prensa de abril de 2025: batería de 98 kWh (93,1 kWh utilizables); tres filas de asientos."},
    "mercedes-glb-eq": {"importer": "Autolider S.A.", "trunkL": 540, "warranty": {"vehicle": "2 años sin límite de kilometraje", "battery": "8 años o 160.000 km", "note": "Motor y batería: 8 años o 160.000 km (Autoblog, 8/10/2026). Preventa; sin fecha de entrega."}, "batteryKwh": 85, "rangeKm": 631, "rangeCycle": "WLTP", "powerCv": 272, "accel": 7.4, "drive": "Trasera", "torqueNm": 335, "topSpeedKmh": 210, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Mercedes-Benz GLB con tecnología EQ", "url": "https://www.autoblog.com.uy/2026/10/lanzamiento-mercedes-benz-glb-con.html", "date": "2026-10", "type": "Prensa especializada"}, "specNote": "Versión 250+; llega desde Hungría. Una nota previa de Autoblog (dic. 2025) daba 270 cv."},
    "mini-cooper-electrico": {"batteryKwh": 40.7, "powerCv": 184, "torqueNm": 290, "rangeKm": 293, "rangeCycle": "WLTP", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: MINI Cooper E y SE", "url": "https://www.autoblog.com.uy/2024/10/lanzamiento-mini-cooper-e-y-se.html", "date": "2024-10", "type": "Prensa especializada"}, "specNote": "Datos del Cooper E (versión de acceso), 293–305 km WLTP; el Cooper SE tiene 54,2 kWh, 218 cv y 387–402 km. Se asigna el E por ser el de precio «desde»; confirmar."},
    "mini-aceman": {"powerCv": 184, "torqueNm": 290, "rangeKm": 310, "rangeCycle": "WLTP", "specSource": {"name": "Autoblog Uruguay — Es oficial: el MINI Aceman llegará a Uruguay", "url": "https://www.autoblog.com.uy/2024/04/es-oficial-el-mini-aceman-llegara-en-el.html", "date": "2024-04", "type": "Prensa especializada"}, "specNote": "Datos del Aceman E (versión de acceso); el Aceman SE llega a 407 km WLTP. Se asigna el E por ser el de precio «desde»; confirmar."},
    "peugeot-e-3008-gt": {"batteryKwh": 73, "rangeKm": 497, "rangeCycle": "WLTP", "powerCv": 325, "torqueNm": 509, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Peugeot E-3008", "url": "https://www.autoblog.com.uy/2026/05/lanzamiento-peugeot-e-3008_01257935696.html", "date": "2026-05", "type": "Prensa especializada"}, "specDisc": "La web del importador informa 495 km WLTP; Autoblog, 497 km."},
    "peugeot-e-2008-gt": {"powerCv": 156, "torqueNm": 260, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Motor de 115 kW; llega desde Vigo (España)."},
    "leapmotor-c10-ev": {"torqueNm": 320, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Leapmotor C10", "url": "https://www.autoblog.com.uy/2025/04/lanzamiento-leapmotor-c10.html", "date": "2025-04", "type": "Prensa especializada"}},
    "leapmotor-b10": {"torqueNm": 240, "specSource": {"name": "Autoblog Uruguay — Probamos al Leapmotor B10", "url": "https://www.autoblog.com.uy/2026/05/probamos-al-leapmotor-b10-tercer.html", "date": "2026-05", "type": "Prensa especializada"}, "specNote": "Autoblog informa dos baterías: 56,2 kWh (442 km) y 67,1 kWh (516 km), autonomía teórica."},
    "leapmotor-c16": {"batteryKwh": 67.7, "torqueNm": 360, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Leapmotor C16", "url": "https://www.autoblog.com.uy/2025/04/lanzamiento-leapmotor-c16.html", "date": "2025-04", "type": "Prensa especializada"}, "specNote": "Carrocería extendida de seis plazas."},
    "volvo-ex30-core": {"batteryKwh": 51, "rangeKm": 344, "rangeCycle": "WLTP", "powerCv": 272, "drive": "Trasera", "torqueNm": 343, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Volvo EX30 MY2025", "url": "https://www.autoblog.com.uy/2024/11/lanzamiento-volvo-ex30-my2025.html", "date": "2024-11", "type": "Prensa especializada"}, "specNote": "Core Single Engine: batería LFP de 51 kWh según Autoblog (nov. 2024, año modelo 2025)."},
    "volvo-ex30-ultra": {"batteryKwh": 69, "rangeKm": 476, "rangeCycle": "WLTP", "powerCv": 272, "drive": "Trasera", "torqueNm": 343, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Volvo EX30 MY2025", "url": "https://www.autoblog.com.uy/2024/11/lanzamiento-volvo-ex30-my2025.html", "date": "2024-11", "type": "Prensa especializada"}, "specNote": "Versión Extended Range: batería NMC de 69 kWh según Autoblog (nov. 2024)."},
    "suzuki-fronx-hybrid": {"powerCv": 103, "trunkL": 304, "torqueNm": 137, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Suzuki Fronx Hybrid", "url": "https://www.autoblog.com.uy/2023/10/lanzamiento-suzuki-fronx-hybrid.html", "date": "2023-10", "type": "Prensa especializada"}, "specNote": "Micro-híbrido 1.5 (SHVS) importado de India; depósito de 37 L."},
    "nissan-x-trail-e-power": {"batteryKwh": 1.73, "trunkL": 575, "drive": "Integral (e-4ORCE)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Nissan X-Trail e-Power (restyling)", "url": "https://www.autoblog.com.uy/2026/07/lanzamiento-nissan-x-trail-e-power.html", "date": "2026-07", "type": "Prensa especializada"}, "specNote": "Autoblog informa 205 cv combinados y baúl de 575 L (120 L con siete plazas); depósito de 55 L.", "specDisc": "La web del importador mostraba 210 cv; Autoblog (jul. 2026) informa 205 cv."},
    "toyota-corolla-cross-hybrid": {"trunkL": 440, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Toyota Corolla Cross Hybrid", "url": "https://www.autoblog.com.uy/2021/03/lanzamiento-toyota-corolla-cross-hybrid.html", "date": "2021-03", "type": "Prensa especializada"}, "specNote": "Dato de la nota de lanzamiento (2021)."},
    "toyota-yaris-cross-hybrid": {"powerCv": 111, "specSource": {"name": "Autoblog Uruguay — Tras la preventa, llegaron los primeros Toyota Yaris Cross Hybrid", "url": "https://www.autoblog.com.uy/2026/02/tras-la-preventa-llegaron-los-primeros.html", "date": "2026-02", "type": "Prensa especializada"}, "specNote": "Motor 1.5 de 91 cv más eléctrico de 80 cv; 111 cv combinados según Autoblog."},
    "toyota-rav4-phev": {"rangeKm": 142, "rangeCycle": "WLTP", "powerCv": 329, "acKw": 11, "dcKw": 50, "drive": "Integral (E-Four)", "warranty": {"vehicle": "3 años o 100.000 km", "battery": "8 años o 160.000 km (extensible)", "note": "Según Autoblog (lanzamiento, jul. 2026)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Toyota RAV4 PHEV", "url": "https://www.autoblog.com.uy/2026/07/lanzamiento-toyota-rav4-phev.html", "date": "2026-07", "type": "Prensa especializada"}, "specNote": "Garantía 3 años/100.000 km; batería hasta 8 años/160.000 km (extensible)."},
    "gwm-tank-300-hev": {"batteryKwh": 1.75, "powerCv": 346, "drive": "Integral", "torqueNm": 615, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GWM Tank 300 HEV", "url": "https://www.autoblog.com.uy/2024/07/lanzamiento-gwm-tank-300-hev.html", "date": "2024-07", "type": "Prensa especializada"}},
    "gwm-h6-phev": {"powerCv": 364, "torqueNm": 760, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GWM Haval H6 PHEV", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-gwm-haval-h6-phev.html", "date": "2025-12", "type": "Prensa especializada"}, "specNote": "Cifras de la variante AWD (364 cv, 760 Nm); la 2WD rinde 326 cv y 540 Nm. Autoblog no informa batería ni autonomía eléctrica."},
    "gwm-h6-gt-phev": {"powerCv": 364, "drive": "Integral", "torqueNm": 750, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GWM Haval H6 PHEV", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-gwm-haval-h6-phev.html", "date": "2025-12", "type": "Prensa especializada"}},
    "chery-tiggo-7-csh": {"batteryKwh": 18.3, "rangeKm": 93, "rangeCycle": "NEDC", "powerCv": 275, "torqueNm": 365, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chery Tiggo 7 CSH", "url": "https://www.autoblog.com.uy/2026/02/lanzamiento-chery-tiggo-7-csh.html", "date": "2026-02", "type": "Prensa especializada"}, "specNote": "Otra fuente (El Cero KM) informa 18,4 kWh y 278 cv."},
    "hyundai-santa-fe-hev": {"batteryKwh": 1.49, "torqueNm": 270, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Hyundai Santa Fe Hybrid", "url": "https://www.autoblog.com.uy/2024/12/lanzamiento-hyundai-santa-fe-hybrid-los.html", "date": "2024-12", "type": "Prensa especializada"}, "specNote": "Motor 1.6 turbo de 180 cv y 270 Nm más eléctrico de 64 cv."},
    "kia-sorento-hev": {"seats": 7, "drive": "Integral (AWD)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento Kia Sorento HEV", "url": "https://www.autoblog.com.uy/2026/04/lanzamiento-kia-sorento-hev-los-apuntes.html", "date": "2026-04", "type": "Prensa especializada"}, "specNote": "Siete plazas (2+3+2).", "specDisc": "Potencia combinada: 215 cv según el lanzamiento y 238 cv según la prueba posterior de Autoblog."},
    "kia-carnival-hev": {"seats": 8, "powerCv": 245, "torqueNm": 367, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Kia Carnival HEV", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-kia-carnival-hev.html", "date": "2025-09", "type": "Prensa especializada"}, "specNote": "Ocho plazas (2+3+3)."},
    "gac-gs4-max-hev": {"powerCv": 232, "warranty": {"vehicle": "5 años o 150.000 km", "battery": null, "note": "Según Autoblog (sep. 2026)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento GAC GS4 Max y S7", "url": "https://www.autoblog.com.uy/2026/09/lanzamiento-gac-gs4-max-y-s7-los.html", "date": "2026-09", "type": "Prensa especializada"}, "specNote": "Motor 2.0 de 138 cv más eléctrico de 134 kW; no se conecta a la red."},
    "gac-s7-ultra-awd": {"powerCv": 493, "accel": 5.4, "drive": "Integral (AWD)", "torqueNm": 600, "warranty": {"vehicle": null, "battery": "8 años o 160.000 km (componentes eléctricos)", "note": "Según El Observador (sep. 2026)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento GAC GS4 Max y S7", "url": "https://www.autoblog.com.uy/2026/09/lanzamiento-gac-gs4-max-y-s7-los.html", "date": "2026-09", "type": "Prensa especializada"}, "specNote": "Motor 1.5 turbo generador de 158 cv y dos motores eléctricos."},
    "omoda-e5": {"powerCv": 201, "accel": 7.6, "acKw": 9.9, "dcKw": 110, "torqueNm": 288, "topSpeedKmh": 172, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Omoda E5 restyling", "url": "https://www.autoblog.com.uy/2026/06/lanzamiento-omoda-e5-restyling.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Autoblog informa baterías LFP de 51 y 59–60 kWh (350 y 450 km WLTP; 422 y 505 km NEDC)."},
    "mg3-hybrid-plus": {"torqueNm": 425, "specSource": {"name": "Autoblog Uruguay — Lanzamiento MG3 Hybrid+", "url": "https://www.autoblog.com.uy/2026/02/lanzamiento-mg3-hybrid-los-apuntes-del.html", "date": "2026-02", "type": "Prensa especializada"}, "specNote": "Motor 1.5 Atkinson de 191 cv con dos motores eléctricos."},
    "citroen-ami": {"batteryKwh": 5.4, "rangeCycle": "WMTC", "topSpeedKmh": 45, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Citroën Ami ëlectric", "url": "https://www.autoblog.com.uy/2024/06/lanzamiento-citroen-ami-electric.html", "date": "2024-06", "type": "Prensa especializada"}, "specNote": "Homologado en Uruguay como categoría L7. Autoblog (jun. 2024) lo vendía a US$ 12.990 en versión Tonic."},
    "byd-new-e2-x": {"batteryKwh": 44.9, "rangeKm": 390, "rangeCycle": "NEDC", "powerCv": 173, "accel": 7.5, "acKw": 6.6, "dcKw": 65, "trunkL": 345, "drive": "Delantera", "torqueNm": 290, "topSpeedKmh": 160, "warranty": {"vehicle": "5 años o 150.000 km", "battery": null, "note": "Según anuncios de concesionarias en MercadoLibre Uruguay (22/10/2026); confirmar con el importador. Autoblog (jul. 2025) había informado 3 años o 150.000 km para el GSi Plus."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: BYD New e2 GSi Plus", "url": "https://www.autoblog.com.uy/2025/07/lanzamiento-byd-new-e2-gsi-plus.html", "date": "2025-07", "type": "Prensa especializada"}, "specNote": "Datos del New e2 GSi Plus según Autoblog (jul. 2025); el precio de US$ 25.990 coincide con el que esa nota da para el nivel GS, y se asume la misma mecánica; confirmar con el importador. La nota da 44,9 kWh en un pasaje y 44,5 kWh en otro."},
    "bmw-ix3-50-xdrive-m-sport-pro": {"batteryKwh": 108.7, "rangeKm": 717, "rangeCycle": "WLTP", "powerCv": 469, "accel": 4.9, "acKw": 11, "dcKw": 400, "drive": "Integral (xDrive)", "torqueNm": 645, "topSpeedKmh": 210, "specSource": {"name": "Autoblog Uruguay — Lanzamiento BMW iX3 (Neue Klasse)", "url": "https://www.autoblog.com.uy/2026/06/lanzamiento-bmw-ix3-los-apuntes-del.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Datos del lanzamiento local (Autoblog, jun. 2026): 717–805 km WLTP según llantas. Aceleración, carga y velocidad máxima: ficha internacional del iX3 50 xDrive."},
    "bmw-ix2-edrive20": {"powerCv": 204, "accel": 8.6, "dcKw": 130, "trunkL": 525, "drive": "Delantera", "torqueNm": 247, "topSpeedKmh": 170, "batteryKwh": 64.8, "specSource": {"name": "BMW Group PressClub España — ficha técnica iX2 eDrive20", "url": "https://www.press.bmwgroup.com/spain/article/attachment/T0444944ES/621945", "date": "s/f", "type": "Ficha del fabricante o prensa internacional"}, "specNote": "Ficha europea: batería de 64,8 kWh netos y 439–478 km WLTP según equipamiento; en Uruguay el modelo 2027 puede diferir. La batería de 64,8 kWh figura en el título de un anuncio 0 km de MercadoLibre Uruguay (iX2 eDrive20 M Sport Plus 2026)."},
    "dongfeng-vigo": {"batteryKwh": 44.94, "rangeKm": 401, "rangeCycle": "CLTC", "powerCv": 160, "torqueNm": 230, "topSpeedKmh": 150, "accel": 8.9, "price": {"list": 25990, "promo": null, "currency": "USD", "validOn": "2025-11", "note": "Precio de lanzamiento del Vigo E2 según Autoblog (nov. 2025); no verificado en la web de Fidocar.", "verification": "parcial"}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Dongfeng Vigo", "url": "https://www.autoblog.com.uy/2025/11/lanzamiento-dongfeng-vigo-los-apuntes.html", "date": "2025-11", "type": "Prensa especializada"}, "specNote": "Se asignan los datos del Vigo E2 (44,94 kWh, 401 km CLTC, 0-100 en 8,9 s, US$ 25.990). El Vigo E2+ tiene 51,87 kWh, 471 km CLTC, 9,2 s y cuesta US$ 28.990. Batería Sunwoda."},
    "mg4-deluxe-er": {"batteryKwh": 77, "rangeKm": 520, "rangeCycle": "WLTP", "powerCv": 241, "accel": 6.5, "dcKw": 144, "drive": "Trasera", "torqueNm": 350, "topSpeedKmh": 180, "consumption": "16,5 kWh/100 km", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: MG4 Deluxe Extended Range 2WD (77 kWh)", "url": "https://www.autoblog.com.uy/2025/11/lanzamiento-mg4-deluxe-extended-range.html", "date": "2025-11", "type": "Prensa especializada"}, "specNote": "Batería NMC de CATL; carga del 10 al 80 % en 38 minutos o menos."},
    "zeekr-7x": {"powerCv": 630, "accel": 3.8, "acKw": 22, "dcKw": 450, "trunkL": 539, "drive": "Integral (AWD)", "torqueNm": 710, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Zeekr 7X", "url": "https://www.autoblog.com.uy/2025/09/lanzamiento-zeekr-7x.html", "date": "2025-09", "type": "Prensa especializada"}, "specNote": "Datos de la versión Privilege AWD (100 kWh, 543 km WLTP); la Core RWD tiene 75 kWh, 480 km, 416 cv y 6,0 s.", "specDisc": "La web del importador informa 615 km (ciclo no indicado); Autoblog, 543 km WLTP para la versión de 100 kWh."},
    "zeekr-001": {"acKw": 20, "dcKw": 200, "trunkL": 539, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Zeekr 001", "url": "https://www.autoblog.com.uy/2024/07/lanzamiento-zeekr-001.html", "date": "2024-07", "type": "Prensa especializada"}, "specNote": "Versión RWD: 272 cv, 343 Nm, 7,2 s, 620 km WLTC. Versión AWD: 536 cv, 543 Nm, 3,8 s, 580 km WLTC. Batería de 100 kWh (94 kWh utilizables)."},
    "deepal-s7-ev": {"powerCv": 214, "torqueNm": 320, "price": {"list": 42990, "promo": null, "currency": "USD", "validOn": "2026-10-22", "note": "Precio de anuncios 0 km de concesionarias en MercadoLibre Uruguay (varios coinciden); no es lista oficial y puede cambiar. En el lanzamiento (ene. 2025) Autoblog informó US$ 49.990.", "verification": "parcial"}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Deepal S7", "url": "https://www.autoblog.com.uy/2025/01/lanzamiento-deepal-s7-los-apuntes-del.html", "date": "2025-01", "type": "Prensa especializada"}},
    "deepal-s7-reev": {"powerCv": 254, "torqueNm": 320, "price": {"list": 42990, "promo": null, "currency": "USD", "validOn": "2026-10-22", "note": "Precio de anuncios 0 km de concesionarias en MercadoLibre Uruguay (varios coinciden); no es lista oficial y puede cambiar. En el lanzamiento (ene. 2025) Autoblog informó US$ 44.990.", "verification": "parcial"}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Deepal S7", "url": "https://www.autoblog.com.uy/2025/01/lanzamiento-deepal-s7-los-apuntes-del.html", "date": "2025-01", "type": "Prensa especializada"}, "specNote": "Autonomía eléctrica 175 km NEDC; combinada hasta 985 km NEDC."},
    "hyundai-elexio": {"powerCv": 217, "accel": 8.9, "acKw": 11, "dcKw": 141, "trunkL": 506, "drive": "Delantera", "torqueNm": 310, "price": {"list": 44990, "promo": null, "currency": "USD", "validOn": "2026-10", "note": "Precio de la versión Limited Extended según Autoanuario (lanzamiento local); los anuncios de concesionarias en MercadoLibre coinciden. Verificar con Hyundai.", "verification": "parcial"}, "version": "Limited Extended FWD (88 kWh)", "warranty": {"vehicle": "5 años, sin límite de km", "battery": "8 años o 160.000 km", "note": "Según Autoanuario (lanzamiento local); coincide con los anuncios de MercadoLibre."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Elexio", "url": "https://www.autoblog.com.uy/5027/06/lanzamiento-hyundai-elexio.html", "date": "2026-10", "type": "Prensa especializada"}, "specNote": "Datos de la versión Limited Extended FWD (88 kWh, 610 km WLTP). Otras: Limited FWD 62 kWh (450 km) y Ultimate AWD 88 kWh (540 km, 313 cv, 480 Nm, 6,2 s). Dimensiones: 4.615 x 1.875 x 1.695 mm, distancia entre ejes 2.750 mm (Autoanuario). Equipamiento destacado: pantalla de 27 pulgadas, head-up display, audio Bose, techo panorámico, nueve airbags y ADAS."},
    "hyundai-ioniq-9": {"powerCv": 218, "acKw": 11, "dcKw": 233, "trunkL": 338, "seats": "6 o 7 según versión", "torqueNm": 350, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Ioniq 9", "url": "https://www.autoblog.com.uy/5027/06/lanzamientos-hyundai-ioniq-9.html", "date": "2026-07", "type": "Prensa especializada"}, "specNote": "Datos de la versión Ultimate RWD (160 kW, 350 Nm); la Calligraphy AWD rinde 313 cv y 605 Nm. Baúl de 338 L con siete plazas en uso."},
    "hyundai-kona-electric": {"rangeKm": 377, "rangeCycle": "WLTP", "torqueNm": 255, "drive": "Delantera", "warranty": {"vehicle": "5 años, sin límite de km", "battery": "8 años o 160.000 km", "note": "Según Autoblog (mayo de 2024)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Kona Electric", "url": "https://www.autoblog.com.uy/2024/05/lanzamiento-hyundai-kona-electric.html", "date": "2024-05", "type": "Prensa especializada"}, "specNote": "Garantía 5 años sin límite de km; batería 8 años o 160.000 km (nota de 2024)."},
    "hyundai-kona-hibrida": {"powerCv": 141, "trunkL": 466, "drive": "Delantera", "warranty": {"vehicle": "5 años, sin límite de km", "battery": null, "note": "Según anuncios de concesionarias en MercadoLibre Uruguay (22/10/2026); confirmar con el importador."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Kona Hybrid", "url": "https://www.autoblog.com.uy/2023/10/lanzamiento-hyundai-kona-hybrid.html", "date": "2023-10", "type": "Prensa especializada"}, "specNote": "Motor 1.6 de 105 cv más eléctrico de 43,5 cv; depósito de 38 L."},
    "hyundai-tucson-hev": {"batteryKwh": 1.49, "powerCv": 230, "trunkL": 536, "torqueNm": 350, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Tucson Hybrid", "url": "https://www.autoblog.com.uy/2023/12/lanzamiento-hyundai-tucson-hybrid.html", "date": "2023-12", "type": "Prensa especializada"}, "specNote": "Motor 1.6 turbo de 180 cv más eléctrico de 60 cv; depósito de 52 L."},
    "toyota-corolla-hybrid": {"powerCv": 122, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Toyota Corolla Hybrid", "url": "https://www.autoblog.com.uy/2019/09/lanzamiento-toyota-corolla-hybrid.html", "date": "2019-09", "type": "Prensa especializada"}, "specNote": "Motor híbrido 1.8; datos de la nota de lanzamiento (2019)."},
    "toyota-rav4-hybrid": {"drive": "Delantera o integral según versión", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Toyota RAV4 Hybrid", "url": "https://www.autoblog.com.uy/2019/04/lanzamiento-toyota-rav4-hybrid.html", "date": "2019-04", "type": "Prensa especializada"}, "specNote": "La nota de lanzamiento (2019) informa 218 cv en tracción delantera y 222 cv en AWD.", "specDisc": "La web del importador muestra 226 cv; Autoblog (2019) informó 218/222 cv."},
    "kia-sportage-hev": {"batteryKwh": 1.49, "powerCv": 230, "torqueNm": 367, "drive": "Integral (AWD)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Kia Sportage HEV (facelift)", "url": "https://www.autoblog.com.uy/2025/12/lanzamiento-kia-sportage-hev-facelift.html", "date": "2025-12", "type": "Prensa especializada"}, "specNote": "Datos de la versión X-Line Plus AWD, la única que informa Autoblog."},
    "changan-eado-plus-luxury": {"batteryKwh": 18.99, "trunkL": 500, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Changan Eado Plus iDD", "url": "https://www.autoblog.com.uy/2025/07/lanzamiento-changan-eado-plus-idd.html", "date": "2025-07", "type": "Prensa especializada"}, "specNote": "Motor 1.5 de 108 cv más eléctrico de 211 cv. Fuentes argentinas dan 18,4 kWh y 132 km NEDC."},
    "changan-eado-plus-elite": {"batteryKwh": 18.99, "trunkL": 500, "drive": "Delantera", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Changan Eado Plus iDD", "url": "https://www.autoblog.com.uy/2025/07/lanzamiento-changan-eado-plus-idd.html", "date": "2025-07", "type": "Prensa especializada"}, "specNote": "Motor 1.5 de 108 cv más eléctrico de 211 cv. Fuentes argentinas dan 18,4 kWh y 132 km NEDC."},
    "gwm-h6-hev": {"batteryKwh": 1.8, "powerCv": 243, "trunkL": 407, "drive": "Delantera", "torqueNm": 530, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Haval H6 HEV", "url": "https://www.autoblog.com.uy/2022/09/lanzamiento-haval-h6-hev.html", "date": "2022-09", "type": "Prensa especializada"}, "specNote": "Datos de la nota de lanzamiento de 2022; la fábrica no declaró aceleración ni consumo."},
    "gwm-h7-phev": {"specSource": {"name": "Autoblog Uruguay — Lanzamiento: GWM Haval H7 PHEV", "url": "https://www.autoblog.com.uy/2026/09/lanzamiento-gwm-haval-h7-phev.html", "date": "2026-09", "type": "Prensa especializada"}, "specNote": "Versión 2WD: 326 cv y 540 Nm; versión 4WD: 364 cv y 760 Nm. Autoblog no informa batería ni autonomía eléctrica."},
    "gwm-ora-5": {"batteryKwh": 58.3, "rangeKm": 435, "rangeCycle": "WLTP", "powerCv": 204, "drive": "Delantera", "torqueNm": 260, "warranty": {"vehicle": "5 años o 150.000 km", "battery": null, "note": "Según anuncios de concesionarias en MercadoLibre Uruguay (22/10/2026); confirmar con el importador. Un anuncio de la versión High indica 6 años."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento GWM ORA 5", "url": "https://www.autoblog.com.uy/2026/07/lanzamiento-ora-5-los-apuntes-del-doble.html", "date": "2026-07", "type": "Prensa especializada"}, "specNote": "Autoblog informa también 520 km NEDC. Versiones Middle (US$ 24.990) y High (US$ 26.990)."},
    "geely-ex5-em-i": {"batteryKwh": 18.4, "rangeKm": 83, "rangeCycle": "WLTP", "accel": 8.0, "acKw": 6.6, "dcKw": 30, "trunkL": 461, "drive": "Delantera", "torqueNm": 262, "consumption": "14,7 kWh/100 km (eléctrico, WLTP)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Geely EX5 EM-i", "url": "https://www.autoblog.com.uy/5025/09/lanzamiento-geely-ex5-em-i.html", "date": "2025-09", "type": "Prensa especializada"}, "specNote": "Motor 1.5 de 98 cv más eléctrico de 214 cv. Autonomía eléctrica 105 km NEDC; combinada 943 km WLTP."},
    "chery-tiggo-4-hybrid": {"batteryKwh": 1.83, "trunkL": 342, "drive": "Delantera", "torqueNm": 310, "consumption": "5,4 l/100 km (mixto)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chery Tiggo 4 Hybrid", "url": "https://www.autoblog.com.uy/2025/06/lanzamiento-chery-tiggo-4-hybrid.html", "date": "2025-06", "type": "Prensa especializada"}, "specNote": "Motor 1.5 de 95–97 cv más eléctrico de 150 kW (204 cv); la nota es inconsistente y no da potencia combinada."},
    "gac-emkoo-ge-hev": {"batteryKwh": 2.078, "powerCv": 243, "accel": 7.5, "trunkL": 638, "drive": "Delantera", "consumption": "4,7 l/100 km (mixto)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: GAC Emkoo HEV", "url": "https://www.autoblog.com.uy/2024/11/lanzamiento-gac-emkoo-hev.html", "date": "2024-11", "type": "Prensa especializada"}, "specNote": "Motor 2.0 de 138 cv más eléctrico de 179 cv; antecesor del GS4 Max HEV."},
    "byd-song-plus-dmi": {"batteryKwh": 18.3, "rangeKm": 105, "rangeCycle": "NEDC", "accel": 8.3, "acKw": 6.6, "trunkL": 574, "drive": "Delantera", "consumption": "5,1 l/100 km (mixto, NEDC)", "specSource": {"name": "Autoblog Uruguay — Lanzamiento: BYD Song Plus DM-i (restyling)", "url": "https://www.autoblog.com.uy/2024/10/lanzamiento-byd-song-plus-dm-i-restyling.html", "date": "2024-10", "type": "Prensa especializada"}, "specNote": "Motor 1.5 turbo de 136 cv más eléctrico de 150 kW; la fábrica no declaró potencia combinada. GL y GS comparten mecánica."},
    "suzuki-swift-hybrid": {"powerCv": 80, "trunkL": 265, "torqueNm": 112, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Suzuki Swift Hybrid", "url": "https://www.autoblog.com.uy/2024/12/lanzamiento-suzuki-swift-hybrid.html", "date": "2024-12", "type": "Prensa especializada"}, "specNote": "Micro-híbrido 1.2 de tres cilindros (cuarta generación); depósito de 37 L; sin datos de consumo ni aceleración."},
    "mini-countryman-electrico": {"batteryKwh": 64.6, "rangeKm": 423, "rangeCycle": "WLTP", "powerCv": 204, "drive": "Delantera", "torqueNm": 247, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: MINI Countryman E y SE ALL4", "url": "https://www.autoblog.com.uy/2024/06/lanzamiento-mini-countryman-e-y-se-all4.html", "date": "2024-06", "type": "Prensa especializada"}, "specNote": "Datos del Countryman E (versión de acceso; 423–462 km WLTP). El SE ALL4 rinde 313 cv, 494 Nm y 399–432 km. Se asigna el E por ser el de precio «desde»; confirmar."},
    "mercedes-glc-eq": {"batteryKwh": 94, "rangeKm": 713, "rangeCycle": "WLTP", "powerCv": 483, "accel": 4.3, "acKw": 22, "dcKw": 330, "trunkL": 570, "drive": "Integral (4MATIC)", "torqueNm": 800, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Mercedes-Benz GLC EQ", "url": "https://www.autoblog.com.uy/5026/06/lanzamiento-mercedes-benz-glc-eq.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Preventa; versión 400 4MATIC (Avantgarde US$ 102.990 y AMG Line US$ 121.990 según Autoblog)."},
    "renault-filante-hybrid": {"batteryKwh": 1.64, "torqueNm": 565, "specSource": {"name": "Autoblog Uruguay — Renault revela al Filante", "url": "https://www.autoblog.com.uy/2026/02/el-hermano-mayor-de-koleos-llegara.html", "date": "2026-02", "type": "Prensa especializada"}, "specNote": "Llegará a Uruguay en 2027 según Autoblog; datos de la presentación mundial."},
    "renault-4-e-tech": {"batteryKwh": 52, "accel": 8.5, "dcKw": 100, "topSpeedKmh": 150, "specSource": {"name": "Autoblog Uruguay — Renault revela al 4 E-Tech en el Salón de París", "url": "https://www.autoblog.com.uy/2024/10/renacimiento-electrico-renault-revela.html", "date": "2024-10", "type": "Prensa especializada"}, "specNote": "Datos de la presentación del modelo (Salón de París 2024), versión de 52 kWh; no hay nota de lanzamiento local."},
    "peugeot-2008-hybrid-145-gt": {"powerCv": 145, "torqueNm": 230, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Sistema micro-híbrido 48 V: motor 1.2 turbo de 136 cv más eléctrico de 29 cv; caja automática e-DCS6."},
    "peugeot-3008-hev-allure": {"powerCv": 145, "torqueNm": 230, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Sistema micro-híbrido 48 V: motor 1.2 turbo de 136 cv más eléctrico de 29 cv; caja automática e-DCS6."},
    "peugeot-3008-hev-gt": {"powerCv": 145, "torqueNm": 230, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Sistema micro-híbrido 48 V: motor 1.2 turbo de 136 cv más eléctrico de 29 cv; caja automática e-DCS6."},
    "peugeot-5008-hev-gt": {"powerCv": 145, "torqueNm": 230, "specSource": {"name": "Autoblog Uruguay — Lanzamiento Peugeot 2008, 3008 y 5008 Hybrid", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-peugeot-2008-3008-y-5008.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Sistema micro-híbrido 48 V: motor 1.2 turbo de 136 cv más eléctrico de 29 cv; caja automática e-DCS6."},
    "byd-seagull": {"batteryKwh": 30.08, "rangeKm": 300, "rangeCycle": "CLTC", "powerCv": 75, "accel": 13.9, "acKw": 6.6, "dcKw": 30, "trunkL": 230, "drive": "Delantera", "torqueNm": 135, "warranty": {"vehicle": "5 años o 150.000 km", "battery": null, "note": "Según anuncios de concesionarias en MercadoLibre Uruguay (22/10/2026); confirmar con el importador."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: BYD Seagull MY2025.5", "url": "https://www.autoblog.com.uy/2025/06/lanzamiento-byd-seagull-my2025.html", "date": "2025-06", "type": "Prensa especializada"}, "specNote": "Datos de la versión EV300 GLi (batería de 30,08 kWh); la web actual del importador no precisa la versión, y un anuncio de MercadoLibre de 2026 ofrece el «GLI 300» a US$ 18.990. La EV380 GSi tiene 38 kWh y 380 km CLTC. Coincide con las cifras de la ficha del importador citadas en un resumen de Google (30,08 kWh, 55 kW, 135 Nm, baúl de 230 L); el resumen no es una fuente propia."},
    "chevrolet-spark-euv-activ": {"acKw": 6.6, "dcKw": 50, "trunkL": 355, "drive": "Delantera", "torqueNm": 180, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Chevrolet Spark EUV", "url": "https://www.autoblog.com.uy/2025/05/lanzamiento-chevrolet-spark-euv.html", "date": "2025-05", "type": "Prensa especializada"}, "specNote": "Autonomía 298 km WLTP o 360 km NEDC; el artículo no publica aceleración 0-100."},
    "peugeot-308-hev-gt": {"powerCv": 145, "trunkL": 412, "torqueNm": 230, "warranty": {"vehicle": "3 años o 100.000 km", "battery": "8 años o 160.000 km", "note": "Según Autoblog (feb. 2026)."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Peugeot 308 Hybrid (facelift)", "url": "https://www.autoblog.com.uy/2026/02/lanzamiento-peugeot-308-hybrid-facelift.html", "date": "2026-02", "type": "Prensa especializada"}, "specNote": "Motor 1.2 turbo de 136 cv más eléctrico de 29 cv (21 kW), caja e-DCS6; baúl de 412 L (1.302 L); depósito de 52 L. Garantía 3 años/100.000 km y batería 8 años/160.000 km. La versión Allure dejó de ofrecerse (Autoblog, mayo de 2026).", "specDisc": "Autoblog (feb. 2026) informa para la versión GT un precio de US$ 40.990; la web de Peugeot Uruguay mostraba US$ 39.990 al 22/10/2026."},
    "bmw-ix3-neue-klasse": {"batteryKwh": 108.7, "rangeKm": 717, "rangeCycle": "WLTP", "powerCv": 469, "drive": "Integral (xDrive)", "torqueNm": 645, "specSource": {"name": "Autoblog Uruguay — Lanzamiento BMW iX3 (Neue Klasse)", "url": "https://www.autoblog.com.uy/2026/06/lanzamiento-bmw-ix3-los-apuntes-del.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Corresponde al iX3 50 xDrive Luxury (US$ 105.990 en el evento de lanzamiento): 108,7 kWh, 717–805 km WLTP según llantas. Autoblog informa también el M Sport a US$ 111.990 y el M Sport Pro a US$ 116.990; llega desde Hungría."},
    "bmw-ix3-40-edrive-urban": {"batteryKwh": 82.6, "rangeKm": 566, "rangeCycle": "WLTP", "powerCv": 320, "drive": "Trasera (sDrive)", "torqueNm": 500, "specSource": {"name": "Autoblog Uruguay — Lanzamiento BMW iX3 (Neue Klasse)", "url": "https://www.autoblog.com.uy/2026/06/lanzamiento-bmw-ix3-los-apuntes-del.html", "date": "2026-06", "type": "Prensa especializada"}, "specNote": "Autoblog lo describe como iX3 40 sDrive (tracción trasera, 235 kW), de 566–637 km WLTP; se sumaría más adelante a la gama. El anuncio de MercadoLibre lo rotula «40 eDrive Urban»."},
    "deepal-s05-ev": {"powerCv": 238, "accel": 7.3, "drive": "Trasera", "price": {"list": 34990, "promo": null, "currency": "USD", "validOn": "2026-10-22", "note": "Precio de anuncios 0 km de concesionarias en MercadoLibre Uruguay (varios coinciden); no es lista oficial y puede cambiar.", "verification": "parcial"}, "specSource": {"name": "Electrive — Deepal lanza las ventas del SUV compacto S05 (ficha internacional)", "url": "https://www.electrive.com/es/2024/10/21/deepal-lanza-las-ventas-del-suv-compacto-s05/", "date": "2024-10", "type": "Ficha del fabricante o prensa internacional"}, "specNote": "Ficha internacional (no hay nota uruguaya hallada): motor de 175 kW (238 cv), 0-100 en 7,3 s. Batería y autonomía vienen de la web del importador."},
    "deepal-s05-reev": {"powerCv": 218, "accel": 7.9, "drive": "Trasera", "price": {"list": 34990, "promo": null, "currency": "USD", "validOn": "2026-10-22", "note": "Precio de anuncios 0 km de concesionarias en MercadoLibre Uruguay (varios coinciden); no es lista oficial y puede cambiar.", "verification": "parcial"}, "specSource": {"name": "Electrive — Deepal lanza las ventas del SUV compacto S05 (ficha internacional)", "url": "https://www.electrive.com/es/2024/10/21/deepal-lanza-las-ventas-del-suv-compacto-s05/", "date": "2024-10", "type": "Ficha del fabricante o prensa internacional"}, "specNote": "Ficha internacional (no hay nota uruguaya hallada): motor eléctrico de 218 cv, 0-100 en 7,9 s. Batería y autonomía vienen de la web del importador."},
    "tesla-m3-perf": {"batteryKwh": 85, "rangeKm": 528, "rangeCycle": "WLTP", "powerCv": 627, "accel": 3.1, "dcKw": 250, "trunkL": 594, "drive": "Integral (AWD)", "specSource": {"name": "Autoblog Uruguay — Tesla ya homologó los Model 3 y Model Y", "url": "https://www.autoblog.com.uy/2026/06/tesla-ya-homologo-los-model-3-y-model-y.html", "date": "2026-06", "type": "Prensa especializada"}},
    "hyundai-elexio-limited": {"batteryKwh": 62, "rangeKm": 450, "rangeCycle": "WLTP", "powerCv": 217, "accel": 8.9, "acKw": 11, "dcKw": 141, "trunkL": 506, "drive": "Delantera", "torqueNm": 310, "warranty": {"vehicle": "5 años, sin límite de km", "battery": "8 años o 160.000 km", "note": "Según Autoanuario (lanzamiento local); coincide con los anuncios de MercadoLibre."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Elexio", "url": "https://www.autoblog.com.uy/5027/06/lanzamiento-hyundai-elexio.html", "date": "2026-10", "type": "Prensa especializada"}, "specNote": "Precio de la versión según Autoanuario (lanzamiento local); los anuncios de concesionarias en MercadoLibre coinciden."},
    "hyundai-elexio-ultimate": {"batteryKwh": 88, "rangeKm": 540, "rangeCycle": "WLTP", "powerCv": 313, "accel": 6.2, "acKw": 11, "dcKw": 141, "trunkL": 506, "drive": "Integral (AWD)", "torqueNm": 480, "warranty": {"vehicle": "5 años, sin límite de km", "battery": "8 años o 160.000 km", "note": "Según Autoanuario (lanzamiento local); coincide con los anuncios de MercadoLibre."}, "specSource": {"name": "Autoblog Uruguay — Lanzamiento: Hyundai Elexio", "url": "https://www.autoblog.com.uy/5027/06/lanzamiento-hyundai-elexio.html", "date": "2026-10", "type": "Prensa especializada"}, "specNote": "Precio de la versión según Autoanuario (lanzamiento local); los anuncios de concesionarias en MercadoLibre coinciden."},
    "byd-yuan-plus-gl": {"lengthMm": 4455, "widthMm": 1875, "heightMm": 1615, "wheelbaseMm": 2720, "trunkMaxL": 1330},
    "byd-yuan-plus-lux": {"lengthMm": 4455, "widthMm": 1875, "heightMm": 1615, "wheelbaseMm": 2720, "trunkMaxL": 1330},
    "byd-shark": {"lengthMm": 5457, "widthMm": 1971, "heightMm": 1925, "wheelbaseMm": 3260},
    "byd-atto-8": {"trunkMaxL": 1960, "trunkNote": "270 L con las tres filas, 960 L con la tercera fila abatida y 1.960 L con las dos filas abatidas (según la web de BYD Uruguay)."}
  };
  /* Fichas técnicas oficiales de los importadores (PDF recibidos el 2026-10-23). Tienen prioridad sobre prensa; donde chocan con otra fuente se deja la discrepancia a la vista. */
  const specs2 = {
    "deepal-s05-ev": {"powerCv": 238, "torqueNm": 320, "drive": "Trasera", "seats": 5, "lengthMm": 4620, "widthMm": 1900, "heightMm": 1600, "wheelbaseMm": 2880, "acKw": 7, "chargeNote": "30 %–80 % en 15 min (carga rápida, ficha del importador); carga lenta 7 kW en ≤ 8 h; conector Tipo 2",
      "consumption": null, "specSource": sources.deepalFicha, "specNote": "Ficha oficial del importador: 175 kW, 320 Nm, batería 56,12 kWh, 458 km NEDC (la ficha rotula «WLTC» pero indica NEDC), peso en vacío 1.770 kg, neumáticos 245/45 R20, pantalla central 15,4″, HUD, 14 parlantes, función de central eléctrica móvil (V2L), menús en español e inglés. La ficha no informa baúl ni garantía."},
    "deepal-s05-reev": {"powerCv": 218, "torqueNm": 320, "drive": "Trasera", "seats": 5, "lengthMm": 4620, "widthMm": 1900, "heightMm": 1600, "wheelbaseMm": 2880, "acKw": 7, "chargeNote": "30 %–80 % en 20 min (carga rápida, ficha del importador); carga lenta 7 kW en ≤ 6 h; conector Tipo 2",
      "specSource": sources.deepalFicha, "specNote": "Ficha oficial del importador: motor trasero 160 kW / 320 Nm, batería 27,28 kWh, 158 km eléctricos NEDC, peso en vacío 1.835 kg, 8 parlantes. La ficha indica además «72 kW / 125 Nm» como potencia y par del motor (probablemente el generador del extensor de autonomía, sin aclararlo). No informa baúl ni garantía."},
    "deepal-s7-ev": {"powerCv": 255, "torqueNm": 320, "drive": "Trasera", "lengthMm": 4750, "widthMm": 1930, "heightMm": 1625, "wheelbaseMm": 2900, "chargeNote": "Conector Tipo 2 (estándar europeo)",
      "warranty": {"vehicle": "5 años o 150.000 km", "battery": "8 años o 150.000 km", "note": "Según el catálogo oficial del importador (oct. 2026)."},
      "specSource": sources.deepalS7Cat, "specNote": "Catálogo oficial: 620 km CLTC (ciclo distinto al NEDC de la web, no comparables), 255 HP, 320 Nm, pantalla central 15,6″, audio de 14 parlantes, cámara 360°, 6 airbags, ADAS completo, techo solar, peso en vacío 1.990 kg.",
      "specDisc": "Potencia: la ficha del importador indica 255 HP (antes 214 cv según prensa). Batería: la ficha indica 67 kWh y la web 79,97 kWh; se conserva el valor de la web hasta confirmarlo con el importador."},
    "deepal-s7-reev": {"powerCv": 235, "torqueNm": 236, "drive": "Trasera", "lengthMm": 4750, "widthMm": 1930, "heightMm": 1625, "wheelbaseMm": 2900, "chargeNote": "Conector Tipo 2 (estándar europeo)",
      "warranty": {"vehicle": "5 años o 150.000 km", "battery": "8 años o 150.000 km", "note": "Según el catálogo oficial del importador (oct. 2026)."},
      "specSource": sources.deepalS7Cat, "specNote": "Catálogo oficial: 1.120 km combinados CLTC, 235 HP, 236 Nm, pantalla central 15,6″, 14 parlantes, cámara 360°, 6 airbags, ADAS completo, techo solar.",
      "specDisc": "Batería y autonomía eléctrica: el mismo catálogo dice 37,7 kWh en la ficha y 21,7 kWh con 200 km eléctricos en el texto; la web indica 31,7 kWh y 175 km NEDC. Se conserva el valor de la web hasta confirmarlo con el importador. Potencia: 235 HP en la ficha (antes 254 cv según prensa)."},
    "geely-ex5-urban": {"powerCv": 218, "torqueNm": 320, "topSpeedKmh": 175, "accel": 6.9, "seats": 5, "lengthMm": 4615, "widthMm": 1901, "heightMm": 1670, "wheelbaseMm": 2750, "trunkL": 461, "trunkMaxL": 1877, "drive": "Delantera", "consumption": "13,9 kWh/100 km (NEDC, ficha)",
      "chargeNote": "10 %–80 % en 34 min (DC); conector CCS2",
      "warranty": {"vehicle": "5 años o 150.000 km", "battery": "8 años o 150.000 km", "note": "Según la ficha oficial del importador (oct. 2026)."},
      "specSource": sources.geelyFicha, "specNote": "Ficha oficial: 160 kW (218 HP), 320 Nm, batería LFP de 49,52 kWh (140 Wh/kg), 410 km NEDC (345 km WLTP), peso en vacío 1.715 kg, tracción delantera, neumáticos R18, pantalla de 15,4″."},
    "geely-ex5-pro": {"powerCv": 218, "torqueNm": 320, "topSpeedKmh": 175, "accel": 6.9, "seats": 5, "lengthMm": 4615, "widthMm": 1901, "heightMm": 1670, "wheelbaseMm": 2750, "trunkL": 461, "trunkMaxL": 1877, "drive": "Delantera", "consumption": "14 kWh/100 km (NEDC, ficha); la etiqueta oficial indica 7 km/kWh",
      "chargeNote": "10 %–80 % en 28 min (DC); conector CCS2",
      "warranty": {"vehicle": "5 años o 150.000 km", "battery": "8 años o 150.000 km", "note": "Según la ficha oficial del importador (oct. 2026)."},
      "specSource": sources.geelyFicha, "specNote": "Ficha oficial: 160 kW (218 HP), 320 Nm, batería LFP de 60,22 kWh, 495 km NEDC (425 km WLTP), peso en vacío 1.765 kg, neumáticos R18. Etiqueta oficial de eficiencia energética (UNIT 1130, registro PR3214/01): 495 km y 7 km/kWh."},
    "geely-ex5-max": {"powerCv": 218, "torqueNm": 320, "topSpeedKmh": 175, "accel": 6.9, "rangeKm": 425, "rangeCycle": "WLTP", "seats": 5, "lengthMm": 4615, "widthMm": 1901, "heightMm": 1670, "wheelbaseMm": 2750, "trunkL": 461, "trunkMaxL": 1877, "drive": "Delantera", "consumption": "14 kWh/100 km (NEDC, ficha); la etiqueta oficial indica 7 km/kWh",
      "chargeNote": "10 %–80 % en 28 min (DC); conector CCS2",
      "warranty": {"vehicle": "5 años o 150.000 km", "battery": "8 años o 150.000 km", "note": "Según la ficha oficial del importador (oct. 2026)."},
      "specSource": sources.geelyFicha, "specNote": "Ficha oficial: 160 kW (218 HP), 320 Nm, batería LFP de 60,22 kWh, 495 km NEDC (425 km WLTP), peso en vacío 1.765 kg, neumáticos R19, techo panorámico, 16 parlantes, masaje en asientos delanteros. Etiqueta oficial de eficiencia energética (UNIT 1130, registro PR3215/01): 470 km y 7 km/kWh.",
      "specDisc": "Autonomía: la ficha indica 495 km NEDC para Pro y Max, pero la etiqueta oficial de eficiencia del Max indica 470 km."}
  };
  /* Tesla Model 3 MY2027 (Autoblog, 19/10/2026): cifras actualizadas de autonomía, potencia y carga. */
  const specs3 = {
    "tesla-m3-sr": {"rangeKm": 534, "rangeCycle": "WLTP", "accel": 6.2, "topSpeedKmh": 201, "acKw": 11, "dcKw": 170, "specSource": sources.autoblogM3my27, "specNote": "Model 3 MY2027: 63 kWh LFP (CATL), 208 kW (283 hp), 13,0 kWh/100 km WLTP. Entregas previstas de diciembre a enero; reserva con US$ 250."},
    "tesla-m3-plr": {"rangeKm": 691, "rangeCycle": "WLTP", "powerCv": 320, "accel": 5.2, "topSpeedKmh": 201, "acKw": 11, "dcKw": 170, "warranty": {"vehicle": "4 años o 80.000 km", "battery": "8 años o 192.000 km", "note": "Garantía de batería de 192.000 km para el paquete de 85 kWh (Autoblog, oct. 2026)."}, "specSource": sources.autoblogM3my27, "specNote": "Model 3 MY2027: 85 kWh NMC (LG), 235 kW (320 hp). 691 km WLTP con llantas de 19″ y 750 km con llantas de 18″."},
    "tesla-m3-perf": {"rangeKm": 571, "rangeCycle": "WLTP", "powerCv": 658, "accel": 3.1, "topSpeedKmh": 262, "acKw": 11, "dcKw": 250, "warranty": {"vehicle": "4 años o 80.000 km", "battery": "8 años o 192.000 km", "note": "Garantía de batería de 192.000 km para el paquete de 85 kWh (Autoblog, oct. 2026)."}, "specSource": sources.autoblogM3my27, "specNote": "Model 3 MY2027 Performance: 491 kW (658 hp), antes 461 kW (627 hp). 16,5 kWh/100 km WLTP."}
  };
  Object.keys(specs3).forEach(function (id) { specs[id] = Object.assign({}, specs[id] || {}, specs3[id]); });

  Object.keys(specs2).forEach(function (id) {
    const a = specs[id] || {}, b = specs2[id];
    specs[id] = Object.assign({}, a, b);
    if (a.specDisc && b.specDisc) specs[id].specDisc = a.specDisc + " " + b.specDisc;
    else if (a.specDisc) specs[id].specDisc = a.specDisc;
  });

  vehicles.forEach(function (v) {
    const p = specs[v.id]; if (!p) return;
    Object.keys(p).forEach(function (k) {
      if (k === "specDisc") v.discrepancy = v.discrepancy ? v.discrepancy + " " + p[k] : p[k];
      else v[k] = p[k];
    });
  });

  return { checked: CHECKED, typeLabels, origins, sources, vehicles, pendingBrands, benefits, financing, market, sales, tradeIn, priceMoves, marketTimeline };
})();
