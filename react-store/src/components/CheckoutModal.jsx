import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
    const { isCheckoutOpen, setIsCheckoutOpen, clearCart, cart, cartTotal } = useCart();

    if (!isCheckoutOpen) return null;

    const handleWhatsAppOrder = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const nombre = formData.get('nombre');
        const direccion = formData.get('direccion');
        
        // 1. Construir el mensaje de WhatsApp con formato
        let mensaje = `¡Hola! Quería hacer un pedido en Cajas Literarias 📚✨\n\n`;
        
        mensaje += `*Mis Datos:*\n`;
        mensaje += `👤 Nombre: ${nombre}\n`;
        mensaje += `📍 Envío: ${direccion}\n\n`;
        
        mensaje += `*Mi Pedido:*\n`;
        cart.forEach(item => {
            mensaje += `📦 *${item.nombre}* - ${item.precio.toFixed(2)}€\n`;
            if (item.configuracion.genero) {
                mensaje += `   - Género: ${item.configuracion.genero}\n`;
                mensaje += `   - Temática: ${item.configuracion.tematica}\n`;
                if (item.configuracion.exclusiones) {
                    mensaje += `   - Ya tengo: ${item.configuracion.exclusiones}\n`;
                }
            }
            if (item.configuracion.diseno) {
                mensaje += `   - Vaso: ${item.configuracion.diseno}\n`;
                if (item.configuracion.texto) {
                    mensaje += `   - Texto vaso: ${item.configuracion.texto}\n`;
                }
            }
            mensaje += `\n`;
        });
        
        mensaje += `*Total estimado:* ${cartTotal.toFixed(2)}€\n\n`;
        mensaje += `Quedo a la espera para realizar el Bizum/Transferencia. ¡Gracias!`;

        // 2. Número de teléfono de tu madre o tía
        // IMPORTANTE: Pon el número real aquí (con el 34 delante si es de España, sin el +)
        const numeroTelefono = "34600000000"; 
        
        // 3. Crear el link de WhatsApp y abrirlo
        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
        
        // 4. Limpiar el carrito y cerrar
        clearCart();
        setIsCheckoutOpen(false);
    };

    return (
        <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
            <div className="modal-content checkout-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setIsCheckoutOpen(false)}>&times;</button>
                <div className="modal-header">
                    <h2>Solicitar Pedido</h2>
                    <p>Tramitamos los pagos manualmente por Bizum o Transferencia bancaria.</p>
                </div>
                
                <form onSubmit={handleWhatsAppOrder} className="checkout-form">
                    <div className="input-group">
                        <label>Nombre Completo:</label>
                        <input type="text" name="nombre" required placeholder="Ej: Laura García" />
                    </div>

                    <div className="input-group">
                        <label>Dirección de Envío completa:</label>
                        <textarea name="direccion" required placeholder="Calle, número, piso, código postal, ciudad..."></textarea>
                    </div>

                    <div style={{
                        backgroundColor: 'rgba(92, 114, 98, 0.1)', 
                        padding: '1rem', 
                        borderRadius: '6px', 
                        marginBottom: '1.5rem', 
                        fontSize: '0.9rem', 
                        color: 'var(--brand-main)',
                        borderLeft: '4px solid var(--brand-main)'
                    }}>
                        <strong>¿Cómo funciona?</strong> Al hacer clic, se abrirá tu WhatsApp con el resumen de tu pedido. Nosotras te responderemos para confirmarlo y facilitarte el número para el pago.
                    </div>

                    <button type="submit" className="btn-primary w-full" style={{
                        backgroundColor: '#25D366', // Color oficial de WhatsApp
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        Enviar pedido por WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
}
