# Pendientes, verificaciones humanas y credenciales

## A. Verificaciones que requieren una persona (prioridad alta)
1. Contrastar cada precio/ficha con la web oficial del importador (Eximar–MG, Sadar–BYD, Tesla Uruguay) y llenar BYD, GWM, Leapmotor, Zeekr, etc.
2. Localizar el **texto oficial del decreto de IMESI (junio 2026)** y su número (se vio «147/026» sin confirmar) en Presidencia/MEF/DGI; verificar si se posterga.
3. Verificar patente de rodados por intendencia (Congreso de Intendentes).
4. Pedir a cada concesionario por escrito: reserva, gastos, entrega, cargador, stock → cargar como condiciones con fuente y fecha.
5. Relevar productos vigentes de BROU, Santander, Itaú, Scotiabank (y HSBC si opera) y confirmar si BBVA mantiene su préstamo eléctrico.
6. Revisión legal de `legal.html` (Ley 18.331 y normas de consumo) antes de recolectar datos o vender.

## B. Cómo actualizar un dato
Abrir `assets/data.js`, editar el vehículo (precio, `validOn`, `source`), guardar y recargar. Dejar `null` si no hay dato fiable.

## C. Credenciales/cuentas que deberás crear tú (no están configuradas)
- Hosting gratuito (Cloudflare Pages / Netlify / GitHub) y, opcional, dominio.
- Supabase (gratis): pasos en `docs/FASE2-SUPABASE.md` (obligatorio para activar admin y contactos).
- Programas de afiliación/anunciantes: solo con acuerdos reales.

## D. Fases siguientes
2) Admin + base de datos (Supabase, RLS, auditoría). 3) Formulario de contacto con consentimiento explícito y destinatario identificado. 4) Páginas estáticas por vehículo/marca y datos estructurados. 5) Publicidad/patrocinio etiquetados, analítica con consentimiento. 6) Importaciones CSV con validación e idempotencia.
