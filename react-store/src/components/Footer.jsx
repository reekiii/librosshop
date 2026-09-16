import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Cajas Literarias</h3>
                    <p>La ilusión de descubrir tu próxima historia favorita, envuelta con mimo y cuidando cada detalle.</p>
                </div>
                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul>
                        <li><Link to="/tienda">Tienda</Link></li>
                        <li><Link to="/como-funciona">Cómo Funciona</Link></li>
                        <li><Link to="/generos">Géneros Literarios</Link></li>
                        <li><Link to="/tematicas">Temáticas y Colecciones</Link></li>
                        <li><Link to="/personalizacion">Personalización</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Ayuda y Contacto</h4>
                    <ul>
                        <li><Link to="/faq">Preguntas Frecuentes (FAQ)</Link></li>
                        <li><Link to="/sobre-nosotras">Sobre Nosotras</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Redes Sociales</h4>
                    <ul className="social-links">
                        <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noreferrer">TikTok</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cajas Regalo Literarias. Proyecto de dos hermanas.</p>
            </div>
        </footer>
    );
}
