import { useCart } from '../context/CartContext';

export default function CartSidebar() {
    const { cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen, setIsCheckoutOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={() => setIsCartOpen(false)}></div>
            <div className="cart-sidebar open">
                <div className="cart-header">
                    <h2>Tu Caja Literaria</h2>
                    <button className="close-btn static" onClick={() => setIsCartOpen(false)}>&times;</button>
                </div>
                
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío.</p>
                            <span className="empty-icon">📚</span>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-header">
                                    <h4>{item.nombre}</h4>
                                    <span className="item-price">{item.precio.toFixed(2)}€</span>
                                </div>
                                <div className="cart-item-details">
                                    {item.configuracion.genero && <p><span>Libro:</span> {item.configuracion.genero} ({item.configuracion.tematica})</p>}
                                    {item.configuracion.diseno && <p><span>Vaso:</span> {item.configuracion.diseno}</p>}
                                </div>
                                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="cart-footer">
                    <div className="cart-total-row">
                        <span>Total estimado</span>
                        <span className="total-price">{cartTotal.toFixed(2)}€</span>
                    </div>
                    <button 
                        className="btn-primary w-full" 
                        disabled={cart.length === 0}
                        onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
                    >
                        Solicitar Pedido
                    </button>
                </div>
            </div>
        </>
    );
}
