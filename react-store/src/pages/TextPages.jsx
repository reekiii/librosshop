import React from 'react';
import { Link } from 'react-router-dom';

export function ComoFunciona() {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>El proceso de la magia</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>paso a paso</div>
                <div className="divider"></div>
            </div>
            
            <div className="content-block">
                <h3><span className="accent-text" style={{fontSize: '2.5rem', marginRight: '0.5rem'}}>1.</span> Para una Caja Literaria:</h3>
                <ol className="step-list">
                    <li><span className="highlight">Eliges pack:</span> Solo libro, con vaso personalizado o pack doble.</li>
                    <li><span className="highlight">Eliges género:</span> Romance, Thriller, Fantasía... tú decides el ambiente.</li>
                    <li><span className="highlight">Tus preferencias:</span> Dinos qué temática te apetece y qué libros ya tienes.</li>
                    <li><span className="highlight">Nosotras elegimos:</span> Protegemos la sorpresa buscando tu lectura ideal.</li>
                    <li><span className="highlight">Preparación a mano:</span> Envolvemos con mimo y añadimos accesorios literarios.</li>
                    <li><span className="highlight">El unboxing:</span> Lo recibes en casa listo para descubrir.</li>
                </ol>
            </div>

            <div className="content-block" style={{marginTop: '4rem'}}>
                <h3><span className="accent-text" style={{fontSize: '2.5rem', marginRight: '0.5rem'}}>2.</span> Para el Vaso personalizado:</h3>
                <ol className="step-list">
                    <li><span className="highlight">Eliges diseño:</span> Floral, constelaciones, inicial...</li>
                    <li><span className="highlight">Revisas los accesorios:</span> Descubre qué detalles literarios lo acompañan.</li>
                    <li><span className="highlight">El toque personal:</span> Nos das los detalles de personalización en el carrito.</li>
                    <li><span className="highlight">Elaboración:</span> Lo grabamos a mano en nuestro taller y te lo enviamos.</li>
                </ol>
            </div>
        </div>
    );
}

export function SobreNosotras() {
    return (
        <div className="page-container text-page about-page">
            <div className="section-header">
                <h2>Dos hermanas,</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>una misma ilusión</div>
                <div className="divider"></div>
            </div>
            
            <div className="about-editorial">
                <p className="lead-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '4rem'}}>
                    Somos dos hermanas unidas por nuestra pasión por los libros y la belleza de las cosas <span className="highlight">hechas con mimo</span>. 
                    Este proyecto no nació solo para vender cajas, sino de la ilusión de regalar <span className="highlight">experiencias inolvidables</span>.
                </p>
                
                <div className="about-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem'}}>
                    <div className="about-card" style={{padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: '8px', textAlign: 'center'}}>
                        <div className="accent-text" style={{fontSize: '2.5rem', color: 'var(--brand-main)'}}>El Taller de MªRosa</div>
                        <h3 style={{margin: '1rem 0'}}>La Magia del Papel</h3>
                        <p style={{fontSize: '1rem', color: 'var(--text-muted)'}}>
                            MªRosa es la guardiana de las historias. Su misión es leer, buscar y seleccionar cuidadosamente tu próxima lectura favorita basándose en tus gustos, asegurándose de que la sorpresa que te espera bajo el papel sea exactamente lo que tu alma lectora necesita.
                        </p>
                    </div>
                    
                    <div className="about-card" style={{padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: '8px', textAlign: 'center'}}>
                        <div className="accent-text" style={{fontSize: '2.5rem', color: 'var(--brand-main)'}}>El Taller de Vicky</div>
                        <h3 style={{margin: '1rem 0'}}>El Toque Personal</h3>
                        <p style={{fontSize: '1rem', color: 'var(--text-muted)'}}>
                            Vicky transforma los objetos cotidianos en tesoros. En su taller, cada vaso es personalizado a mano con absoluto cuidado, asegurando que los accesorios literarios que acompañan a tu libro sean únicos, duraderos y lleven tu esencia.
                        </p>
                    </div>
                </div>

                <blockquote style={{
                    fontSize: '1.5rem', 
                    fontFamily: 'var(--font-serif)', 
                    fontStyle: 'italic', 
                    textAlign: 'center', 
                    color: 'var(--accent-rose)',
                    padding: '2rem',
                    borderTop: '1px solid var(--border-light)',
                    borderBottom: '1px solid var(--border-light)'
                }}>
                    "Creemos que la experiencia debe sentirse especial desde el primer instante: descubrir una historia oculta, abrir el envoltorio y encontrar pequeños detalles preparados exclusivamente para ti."
                </blockquote>
            </div>
        </div>
    );
}

export function Generos({ catalog }) {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>Nuestros Géneros</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>historias para todos</div>
                <div className="divider"></div>
                <p>Protegemos el misterio de nuestro catálogo, pero te guiamos para que sepas qué puedes esperar.</p>
            </div>
            <div className="content-block">
                <ul className="text-list">
                    {catalog.generos?.map(g => (
                        <li key={g} style={{marginBottom: '1rem'}}><span className="highlight">{g}</span>: Cuidada selección de títulos emocionantes y atrapantes dentro de este género.</li>
                    ))}
                </ul>
                <div style={{textAlign: 'center', marginTop: '3rem'}}>
                    <Link to="/tienda" className="btn-primary">Ver las Cajas</Link>
                </div>
            </div>
        </div>
    );
}

export function Tematicas({ catalog }) {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>Colecciones Temáticas</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>a tu medida</div>
                <div className="divider"></div>
            </div>
            <div className="content-block">
                <p>A lo largo del año preparamos colecciones estacionales (Navidad, Halloween, Verano) y temáticas permanentes (Cozy, Café, Viajes, Dark Academia) para que tu caja acompañe tu estado de ánimo.</p>
                <ul className="text-list">
                    {catalog.tematicas?.map(t => <li key={t}><span className="highlight">{t}</span></li>)}
                </ul>
            </div>
        </div>
    );
}

export function Personalizacion({ catalog }) {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>Vasos Personalizados</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>el toque de Vicky</div>
                <div className="divider"></div>
            </div>
            <div className="content-block">
                <p>Nuestros vasos están personalizados a mano en el Taller Vicky. Cuidamos cada detalle para ofrecerte un producto artesanal único que acompañe tus horas de lectura.</p>
                <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Diseños actuales:</h3>
                <ul className="text-list">
                    {catalog.disenos_vaso?.map(d => <li key={d}><span className="highlight">{d}</span></li>)}
                </ul>
            </div>
        </div>
    );
}

export function FAQ() {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>Preguntas Frecuentes</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>resolvemos tus dudas</div>
                <div className="divider"></div>
            </div>
            <div className="faq-list">
                <div className="faq-item">
                    <h4>¿Qué pasa si ya tengo el libro?</h4>
                    <p>¡No te preocupes! Al hacer tu pedido podrás indicarnos hasta 5 libros que ya tengas. Además, internamente guardamos tu <span className="highlight">historial de compras</span> con nosotras para no repetirte nunca un título que ya te hayamos enviado.</p>
                </div>
                <div className="faq-item">
                    <h4>¿Cuánto tardan los envíos?</h4>
                    <p>Al ser un trabajo artesanal, elaborado uno a uno en nuestros talleres, tardamos entre <span className="highlight">3 y 5 días</span> en preparar tu paquete con mimo antes de enviarlo.</p>
                </div>
                <div className="faq-item">
                    <h4>¿Aceptan devoluciones?</h4>
                    <p>Los productos personalizados (vasos con iniciales o nombres) no admiten devolución al estar hechos exclusivamente para ti. Para cualquier otra incidencia, contáctanos e intentaremos ayudarte.</p>
                </div>
            </div>
        </div>
    );
}

export function Contacto() {
    return (
        <div className="page-container text-page">
            <div className="section-header">
                <h2>Contacto</h2>
                <div className="accent-text" style={{marginTop: '-1rem', marginBottom: '2rem'}}>hablemos</div>
                <div className="divider"></div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado'); }}>
                <label>Nombre:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required />
                <label>Mensaje:</label>
                <textarea required></textarea>
                <button type="submit" className="btn-primary w-full" style={{marginTop:'1rem'}}>Enviar mensaje</button>
            </form>
        </div>
    );
}
