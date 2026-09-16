import { useCart } from '../context/CartContext';

export default function ConfigModal({ product, catalog, onClose }) {
    const { addToCart } = useCart();

    if (!product) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const cartItem = {
            id: Date.now().toString(),
            producto_id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            configuracion: {}
        };

        if (product.tipo === 'caja') {
            cartItem.configuracion.genero = formData.get('genero');
            cartItem.configuracion.tematica = formData.get('tematica');
            cartItem.configuracion.exclusiones = formData.get('exclusiones');
        }
        if (product.incluye_vaso) {
            cartItem.configuracion.diseno = formData.get('diseno_vaso');
            cartItem.configuracion.texto = formData.get('texto_vaso');
        }

        addToCart(cartItem);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content config-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Personaliza tu pedido</h2>
                    <p>{product.nombre} - {product.precio.toFixed(2)}€</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    {product.tipo === 'caja' && (
                        <div className="form-section">
                            <div className="section-title">
                                <span>1</span> Tu Libro Sorpresa
                            </div>
                            <label>Género Literario:</label>
                            <select name="genero" required>
                                <option value="">Selecciona un género...</option>
                                {catalog.generos.map(g => <option key={g} value={g}>{g}</option>)}
                            </select>

                            <label>Temática u ocasión:</label>
                            <select name="tematica" required>
                                {catalog.tematicas.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>

                            <label>Libros que ya tienes (Lista de seguridad, máx 5):</label>
                            <textarea name="exclusiones" placeholder="Ej: Harry Potter, El nombre del viento..."></textarea>
                        </div>
                    )}

                    {product.incluye_vaso && (
                        <div className="form-section">
                            <div className="section-title">
                                <span>{product.tipo === 'caja' ? '2' : '1'}</span> Tu Vaso Personalizado
                            </div>
                            <label>Diseño del vaso:</label>
                            <select name="diseno_vaso" required>
                                <option value="">Selecciona un diseño...</option>
                                {catalog.disenos_vaso.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                            
                            <label>Texto personalizado (Opcional):</label>
                            <input type="text" name="texto_vaso" placeholder="Ej: Nombre o inicial" />
                        </div>
                    )}

                    <div className="form-footer">
                        <button type="submit" className="btn-primary w-full">Añadir al Carrito - {product.precio.toFixed(2)}€</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
