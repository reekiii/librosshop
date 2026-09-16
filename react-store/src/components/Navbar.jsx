import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { cart, setIsCartOpen } = useCart();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const closeMobile = () => setIsMobileOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Menú Izquierda (Desktop) */}
                <ul className="nav-left nav-links">
                    <li><Link to="/tienda">Tienda</Link></li>
                    <li><Link to="/generos">Géneros</Link></li>
                    <li><Link to="/tematicas">Colecciones</Link></li>
                </ul>
                
                {/* Menú Hamburguesa (Mobile) */}
                <div className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </div>
                
                {/* Logo Central */}
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMobile}>
                        <h2>Cajas Literarias</h2>
                    </Link>
                </div>
                
                {/* Menú Derecha (Desktop) */}
                <ul className="nav-right nav-links">
                    <li><Link to="/como-funciona">Cómo Funciona</Link></li>
                    <li><Link to="/sobre-nosotras">Nosotras</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li className="cart-icon" onClick={() => setIsCartOpen(true)} style={{marginLeft: '1rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>Cesta</span>
                        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                    </li>
                </ul>

                {/* Carrito en Mobile (Separado del menú colapsable) */}
                <div className="mobile-cart-btn cart-icon" onClick={() => setIsCartOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                </div>
            </div>

            {/* Dropdown Mobile */}
            <div className={`mobile-dropdown ${isMobileOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/tienda" onClick={closeMobile}>Tienda</Link></li>
                    <li><Link to="/como-funciona" onClick={closeMobile}>Cómo Funciona</Link></li>
                    <li><Link to="/generos" onClick={closeMobile}>Géneros Literarios</Link></li>
                    <li><Link to="/tematicas" onClick={closeMobile}>Colecciones</Link></li>
                    <li><Link to="/sobre-nosotras" onClick={closeMobile}>Sobre Nosotras</Link></li>
                    <li><Link to="/faq" onClick={closeMobile}>Preguntas Frecuentes</Link></li>
                    <li><Link to="/contacto" onClick={closeMobile}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}
