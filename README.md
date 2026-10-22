# Autos Eléctricos UY — comparador independiente de coches eléctricos

Web **100 % gratuita** (HTML + CSS + JavaScript, sin servidor, sin base de datos de pago, sin build). Hecha según `PROMPT MAESTRO COCHES ELECTRICOS UY.rtf`, adaptada a lo que se puede hacer gratis y sin inventar datos.

## Cómo verla en tu computadora
1. Abrí la Terminal y ejecutá (la carpeta tiene un espacio al final del nombre, por eso las comillas):
   ```bash
   cd "$HOME/Desktop/WEB COCHES ELECTRICOS COMPARATIVA " && python3 -m http.server 8000
   ```
2. Abrí http://localhost:8000 en el navegador. (Hacer doble clic en `index.html` también funciona para casi todo.)
3. Pruebas automáticas: http://localhost:8000/tests.html → debe decir **PASS**.

## Cómo publicarla gratis (elegí una)
- **Cloudflare Pages** o **Netlify Drop** (https://app.netlify.com/drop): arrastrá esta carpeta y listo.
- **GitHub Pages**: subí la carpeta a un repositorio y activá Pages.
Después reemplazá `TU-DOMINIO` en `robots.txt` y `sitemap.xml` por tu dirección real.

## Qué hay (y qué funciona de verdad)
| Función | Estado |
|---|---|
| Catálogo BEV con filtros, orden, búsqueda, fichas | ✅ Funciona, 9 versiones (MG, Tesla, BYD) |
| Comparador hasta 4 + avisos de ciclos distintos + imprimir/PDF | ✅ |
| Simulador de financiación (sistema francés, TNA/TEA) | ✅ probado |
| Calculadora de coste total (TCO) con comparación vs combustión | ✅ probado |
| Beneficios/IMESI con estados + asistente de orientación | ✅ (fuente: prensa; falta norma oficial) |
| Guía «Lo que debes saber antes de comprar», garantías, FAQ | ✅ guía general |
| Fuentes y metodología, legal (borrador), robots, sitemap, metas SEO | ✅ |
| Entidades financieras | ⚠️ Solo BBVA (2020, vigencia no confirmada); resto «pendiente de verificar» |

## Lo que NO está y por qué (honestidad)
- **Catálogo parcial.** Solo se cargó lo verificable en fuentes públicas el 2026-10-22. Casi todo viene de prensa, **no** de fichas oficiales; precios BYD y de otras marcas no se encontraron y figuran como «Consultar». No hay stock ni concesionarios confirmados.
- **Letra pequeña por concesionario, tasas bancarias vigentes, seguros, cargadores públicos:** sin datos verificados todavía; se muestran vacíos/«Consultar».
- **Fase 2 (escrita, NO probada contra Supabase real):** panel `admin.html`, esquema SQL con RLS y auditoría, formulario `contacto.html` con consentimiento. Se activa al crear tu cuenta Supabase: ver `docs/FASE2-SUPABASE.md`. Sin configurar, el formulario y el panel avisan que están desactivados y no recogen nada.
- **Publicidad, patrocinios, afiliación, analítica, importación CSV, compartir contactos con empresas:** no implementados (no hay acuerdos reales).
- **Next.js/TypeScript/Vitest/Playwright:** el equipo no tiene Node.js instalado y el objetivo era gratis y simple; se usó HTML estático con pruebas en `tests.html`. Migrar a Next.js + Supabase es el siguiente paso si querés admin y leads.
- **Una página por vehículo indexable:** `ficha.html?id=` se genera en el navegador (buena para usuarios, débil para SEO). Pendiente: generar páginas estáticas.

## Cómo actualizar datos
Ver `docs/PENDIENTES.md`. Edita `assets/data.js` (precio, fuente, fecha). Todo precio de más de 60 días se marca como posiblemente desactualizado automáticamente.
