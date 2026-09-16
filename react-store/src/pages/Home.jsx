import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home({ catalog, onSelectProduct }) {
    const cajas = catalog.productos?.filter(p => p.tipo === 'caja') || [];

    return (
        <div className="home-page">
            {/* 1. HERO (EL GANCHO) */}
            <section className="hero" style={{
                backgroundImage: `linear-gradient(rgba(44, 40, 37, 0.3), rgba(44, 40, 37, 0.6)), url('https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=1920&q=80')`
            }}>
                <div className="hero-content">
                    <span className="hero-subtitle">Una experiencia a tu medida</span>
                    <h1 style={{fontSize: '4.5rem', marginBottom: '0.5rem'}}>Vuelve a emocionarte</h1>
                    <div className="accent-text" style={{color: 'white', marginBottom: '2rem'}}>descubriendo nuevas historias</div>
                    <p style={{maxWidth: '600px', margin: '0 auto 3rem'}}>Tú eliges el género. Nosotras seleccionamos el libro perfecto y te preparamos una caja sorpresa llena de magia y detalles artesanales.</p>
                    <Link to="/tienda" className="btn-primary" style={{padding: '1.2rem 3rem'}}>Empezar la experiencia</Link>
                </div>
            </section>
            
            {/* 2. PROMESAS (CONFIANZA) */}
            <div className="trust-banner">
                <div className="trust-item">
                    <span className="trust-icon">🎁</span>
                    <strong className="trust-title">Envuelto a mano</strong>
                    <p>Con mimo desde nuestro taller</p>
                </div>
                <div className="trust-item">
                    <span className="trust-icon">📚</span>
                    <strong className="trust-title">100% a tu gusto</strong>
                    <p>Tú eliges la temática y el género</p>
                </div>
                <div className="trust-item">
                    <span className="trust-icon">✨</span>
                    <strong className="trust-title">Garantía sin repetidos</strong>
                    <p>Dinos qué tienes y protegemos la sorpresa</p>
                </div>
            </div>

            {/* 3. CÓMO FUNCIONA VISUAL (LÓGICA RÁPIDA) */}
            <section className="page-container" style={{paddingTop: '6rem', paddingBottom: '3rem'}}>
                <div className="section-header">
                    <h2>La magia en 3 pasos</h2>
                    <div className="divider"></div>
                </div>
                <div className="steps-home-grid">
                    <div className="step-home-card">
                        <div className="accent-text" style={{fontSize: '4rem', color: 'var(--border-light)'}}>01</div>
                        <h3>Eliges tu pack</h3>
                        <p>Selecciona si quieres solo el libro, añadirle un vaso personalizado, o un pack doble.</p>
                    </div>
                    <div className="step-home-card">
                        <div className="accent-text" style={{fontSize: '4rem', color: 'var(--border-light)'}}>02</div>
                        <h3>Nos das pistas</h3>
                        <p>Cuéntanos qué géneros te apasionan, qué ambiente buscas y qué libros ya tienes en tu estantería.</p>
                    </div>
                    <div className="step-home-card">
                        <div className="accent-text" style={{fontSize: '4rem', color: 'var(--border-light)'}}>03</div>
                        <h3>Recibes la sorpresa</h3>
                        <p>Llevamos a cabo nuestra labor de detectives, seleccionamos tu lectura y la envolvemos con amor.</p>
                    </div>
                </div>
            </section>

            {/* 4. COLECCIÓN ESTRELLA (CAJAS) */}
            <section className="page-container" style={{paddingTop: '3rem', backgroundColor: 'var(--bg-secondary)', maxWidth: '100%'}}>
                <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                    <div className="section-header">
                        <h2>Nuestras Cajas Literarias</h2>
                        <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>el regalo perfecto</div>
                        <div className="divider"></div>
                    </div>
                    <div className="products-grid">
                        {cajas.map(prod => (
                            <ProductCard key={prod.id} product={prod} onSelect={() => onSelectProduct(prod)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SEPARADOR ARTESANAL (VASOS) */}
            <section className="split-section">
                <div className="split-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=80')`}}></div>
                <div className="split-content">
                    <div className="accent-text">El toque de Vicky</div>
                    <h2>Vasos Personalizados</h2>
                    <p>No hay lectura perfecta sin una buena bebida caliente. En nuestro taller, personalizamos cada vaso de cristal a mano, grabando constelaciones, flores o iniciales para que tus momentos de desconexión sean únicos.</p>
                    <Link to="/personalizacion" className="btn-secondary" style={{marginTop: '2rem'}}>Ver opciones de personalización</Link>
                </div>
            </section>

            {/* 6. TESTIMONIOS (PRUEBA SOCIAL) */}
            <section className="page-container">
                <div className="section-header">
                    <h2>Lo que dicen de nosotras</h2>
                    <div className="divider"></div>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Tenía miedo de que me enviaran un libro que no me gustara, pero acertaron de pleno. El empaquetado es precioso, da pena hasta abrirlo."</p>
                        <strong className="testimonial-author">— Laura G.</strong>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Pedí el pack con el vaso personalizado y es espectacular. Se nota el cariño y el mimo que hay en cada detalle de la caja."</p>
                        <strong className="testimonial-author">— Carmen M.</strong>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Fue un regalo para mi novia y alucinó. La idea de que sea sorpresa es genial, volveré a comprar para Navidad seguro."</p>
                        <strong className="testimonial-author">— Pablo R.</strong>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section style={{padding: '5rem 2rem', textAlign: 'center', backgroundColor: 'var(--text-dark)', color: 'var(--bg-cream)'}}>
                <div className="accent-text" style={{color: 'var(--accent-rose)', marginBottom: '1rem'}}>¿Lista para dejarte sorprender?</div>
                <h2 style={{color: 'white', marginBottom: '2rem'}}>Tu próxima historia favorita te está esperando</h2>
                <Link to="/tienda" className="btn-primary">Ver el catálogo completo</Link>
            </section>
        </div>
    );
}
