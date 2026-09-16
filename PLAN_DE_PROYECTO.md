# Roadmap del Proyecto: Tienda de Cajas Literarias

Este plan divide el desarrollo de la tienda online en 6 fases lógicas. Está pensado para ir validando el negocio con las fundadoras (tu madre y tu tía) antes de escribir código complejo.

## Fase 1: Validación y Frontend Estático (Actual)
**Objetivo:** Tener la "cara visible" de la tienda para confirmar textos, flujos y diseño sin invertir en servidores aún.
* [x] Crear el catálogo en JSON (`datos.json`).
* [x] Interfaz principal con el flujo dinámico de selección (Género -> Temática -> Vaso).
* [ ] Completar las páginas informativas estáticas (Sobre nosotras, Cómo funciona, FAQ).
* [ ] Diseñar la página de "Géneros" (explicando qué tipo de libros van en cada uno sin revelar el catálogo).
* [ ] **Hito:** Revisión completa con tu madre para validar colores, textos de los botones (CTAs) y fotos.

## Fase 2: Carrito y Simulación de Pedidos (Frontend Avanzado)
**Objetivo:** Permitir que el usuario navegue y acumule productos antes de pagar.
* [ ] Crear una página/panel de "Carrito de compras".
* [ ] Usar `LocalStorage` en JavaScript para guardar los productos que el usuario añade al carrito sin perderlos al cambiar de página.
* [ ] Formulario de "Checkout" visual (Datos de envío, nombre, email) pero sin cobro real aún.
* [ ] Asegurar que toda la web se ve perfecta en teléfonos móviles (Diseño Responsive).

## Fase 3: Backend y Base de Datos (El Motor)
**Objetivo:** Pasar del `datos.json` a un servidor real que guarde clientes y productos.
* [ ] Elegir un stack (Recomendación: Node.js o un backend como servicio estilo Supabase/Firebase, que son rápidos para empezar).
* [ ] Crear las tablas/colecciones clave:
  * `Usuarios/Clientes` (Nombre, email, historial de libros).
  * `Pedidos` (Estado, dirección, productos comprados).
  * `Catálogo_Libros` (Títulos reales que tienen en stock).
* [ ] Conectar el Frontend (Fase 2) con el Backend para que los pedidos se guarden en la base de datos real.

## Fase 4: El Panel de Administración (Backoffice)
**Objetivo:** Las herramientas internas para que tu madre y tu tía gestionen el día a día. *Esta es la fase más importante del documento.*
* [ ] Crear un panel privado (con login) para ellas.
* [ ] Vista de pedidos nuevos con su estado ("Pendiente", "Preparando", "Enviado").
* [ ] **Lógica de Talleres:** Sistema visual que indique si un pedido debe ir al "Taller Vicky" (vasos) o "Taller MªRosa" (libros).
* [ ] **Lógica de No Repetición:** Cuando abran un pedido, el sistema debe cruzar el email del cliente con compras anteriores y lanzar una alerta si el libro que le van a enviar ya lo tiene.

## Fase 5: Integración de Pagos y Correos Automáticos
**Objetivo:** Automatizar las ventas y la comunicación con el cliente.
* [ ] Integrar pasarela de pago (Recomendación: **Stripe**, es la más amigable para desarrolladores).
* [ ] Configurar el sistema de envío de emails transaccionales (Ej. SendGrid o Resend).
* [ ] Programar los emails clave:
  * Confirmación de compra.
  * Aviso de que la caja ha sido enviada (con número de seguimiento).

## Fase 6: Lanzamiento y SEO
**Objetivo:** Poner la tienda en internet y asegurar que Google la encuentra.
* [ ] Comprar el dominio definitivo.
* [ ] Desplegar la web en producción (Vercel, Netlify, o un VPS).
* [ ] Revisar el SEO básico definido en el documento: títulos (H1), descripciones, palabras clave (*"cajas regalo literarias"*).
* [ ] Redactar e incorporar los textos legales (Política de devoluciones, privacidad).
* [ ] **Hito:** ¡Lanzamiento oficial y pruebas con usuarios reales!
