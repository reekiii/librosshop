import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(rgba(44, 40, 37, 0.4), rgba(44, 40, 37, 0.6)), url('https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=1920&q=80')`
        }}>
            <div className="hero-content">
                <span className="hero-subtitle">Descubre la magia de leer a ciegas</span>
                <h1>El regalo perfecto para amantes de los libros</h1>
                <p>Elige tu género y preferencias. Nosotras seleccionamos tu historia y preparamos una caja llena de sorpresas y detalles hechos a mano.</p>
                <Link to="/tienda" className="btn-primary" style={{marginTop: '1rem'}}>Comprar ahora</Link>
            </div>
        </section>
    );
}
