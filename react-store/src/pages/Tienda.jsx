import ProductCard from '../components/ProductCard';

export default function Tienda({ catalog, onSelectProduct }) {
    if (!catalog.productos) return <p>Cargando tienda...</p>;

    const cajas = catalog.productos.filter(p => p.tipo === 'caja');
    const personalizados = catalog.productos.filter(p => p.tipo === 'vaso');

    return (
        <div className="page-container tienda-page">
            <div className="section-header">
                <h2>Nuestra Tienda</h2>
                <div className="divider"></div>
                <p>Descubre nuestros packs literarios y opciones personalizadas.</p>
            </div>
            
            <section className="category-section">
                <h3 className="category-title">Cajas Literarias</h3>
                <p className="category-desc">Nuestra selección principal. Elige tu formato ideal, dinos tus preferencias y nosotras nos encargamos de sorprenderte.</p>
                <div className="products-grid">
                    {cajas.map(prod => (
                        <ProductCard key={prod.id} product={prod} onSelect={() => onSelectProduct(prod)} />
                    ))}
                </div>
            </section>

            <section className="category-section" style={{marginTop: '5rem'}}>
                <h3 className="category-title">Personalizados</h3>
                <p className="category-desc">Vasos diseñados y personalizados a mano, acompañados de accesorios para tus momentos de lectura.</p>
                <div className="products-grid">
                    {personalizados.map(prod => (
                        <ProductCard key={prod.id} product={prod} onSelect={() => onSelectProduct(prod)} />
                    ))}
                </div>
            </section>
        </div>
    );
}
