# Fase 2 — Base de datos, panel admin y contactos (Supabase gratis)

## Cuentas que debes crear (todas con plan gratuito, sin tarjeta)
1. **Supabase** — https://supabase.com → «Start your project» → entrar con GitHub o email.
2. **Hosting del sitio** (una): Cloudflare Pages, Netlify o GitHub Pages (ver README).
3. *(Opcional, más adelante)* un dominio propio (de pago, ~US$ 10–15/año).

> Plan gratuito de Supabase: los proyectos inactivos más de 7 días se pausan y hay que reactivarlos a mano; tiene límites de almacenamiento. Es suficiente para empezar, no para producción comercial sin supervisión.

## Pasos exactos
1. En Supabase: **New project** → nombre `ev-uruguay`, elegí una contraseña de base de datos (guardala en un gestor de contraseñas, no en este proyecto) y región cercana (South America – São Paulo).
2. **SQL Editor → New query** → pegá todo el contenido de `supabase/migrations/001_schema.sql` → **Run**. Debe decir «Success».
3. **Authentication → Users → Add user → Create new user**: tu email y una contraseña fuerte; marcá «Auto confirm user». 
4. Copiá el UUID de ese usuario (columna *User UID*) y en **SQL Editor** ejecutá (reemplazando el UUID):
   ```sql
   insert into public.admin_users(user_id, role) values ('PEGAR-UUID-AQUI', 'admin');
   ```
5. **Authentication → Providers → Email**: desactivá «Allow new users to sign up» (así nadie más puede crear cuentas).
6. **Project Settings → API**: copiá **Project URL** y la clave **anon public**. Pegalas en `assets/config.js`. **Nunca** uses ni pegues la clave `service_role`.
7. Abrí `admin.html` (en local con `python3 -m http.server 8000` o ya publicado) → entrá → pestaña **Vehículos → «Importar datos iniciales desde data.js»**. Eso carga el catálogo actual.
8. Probá `contacto.html`: enviá una solicitud de prueba y verificala en **Contactos** del panel.
9. Para publicar cambios: panel → **Exportar al sitio → Generar data.js → Descargar**, reemplazá `assets/data.js` y volvé a publicar.

## Cómo funciona (decisiones)
- **El sitio público sigue siendo estático** (rápido, gratis, resiliente). La base es la fuente de verdad para editar; «Exportar» regenera `data.js`. Es menos «en vivo» que leer la base directo, pero evita depender de Supabase para que el sitio funcione y de su pausa por inactividad.
- **Cada ficha es un JSON** con las mismas claves que `data.js` (importar/exportar sin pérdida). Se validan: fuente con URL y fecha, precio con moneda y fecha, «vigente» solo con fuente.
- **Seguridad real = RLS en la base**: público solo lee filas activas; escribir exige estar en `admin_users`; los contactos solo se pueden *crear* (con consentimiento obligatorio) y solo los admins los leen. El chequeo de la página admin solo oculta la interfaz.
- **Historial**: triggers registran cada alta/cambio/borrado con usuario, fecha, valores antes y después (pestaña Historial).
- **Contactos**: guardan consentimiento (texto y versión), fecha, estado y destinatario (`shared_with`, vacío = no compartido). Conservación 180 días.
- **Antiabuso**: campo trampa (honeypot), pausa de 15 s en el cliente y límites de longitud en la base. Esto **no** es un rate-limit real; si hay spam, agregar Cloudflare Turnstile.

## Borrar contactos vencidos (mensual)
En SQL Editor: `select public.purge_expired_leads();`

## Lo que NO se probó
Este código **no se ha probado contra un proyecto Supabase real** (no hay credenciales en este entorno). Revisalo con el paso 7–8 y avisá cualquier error. Tampoco hay aún: contactos compartidos con empresas, panel comercial, campañas, importación CSV ni analítica.
