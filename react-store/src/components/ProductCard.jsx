export default function ProductCard({ product, onSelect }) {
    // Imágenes placeholder inmersivas según el tipo de producto
    const imgUrl = product.tipo === 'vaso' 
        ? "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80" // Foto de taza/vaso
        : "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"; // Foto de libro envuelto/cozy

    return (
        <div className="product-card" onClick={onSelect}>
            <div className="product-image-container">
                <div 
                    className="product-image" 
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                ></div>
            </div>
            <div className="product-info">
                <h3>{product.nombre}</h3>
                <span className="price">{product.precio.toFixed(2)}€</span>
                <button className="btn-secondary" style={{marginTop: '1rem', width: '100%'}}>Configurar</button>
            </div>
        </div>
    );
}
