export default function AboutUs() {
    return (
        <section id="sobre-nosotras" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2>Nuestra Historia</h2>
                    <div className="divider" style={{ margin: '0 0 1.5rem 0' }}></div>
                    <p>
                        Somos dos hermanas unidas por nuestra pasión por los libros y las cosas hechas con mimo. 
                        Este proyecto nació de la ilusión de regalar experiencias, no solo objetos.
                    </p>
                    <p>
                        Creemos que la experiencia debe sentirse especial desde el mismo momento de la compra 
                        hasta el "unboxing": descubrir una historia oculta, abrir el envoltorio y encontrar 
                        pequeños detalles preparados con cariño.
                    </p>
                    <p>
                        Trabajamos de forma artesanal desde nuestros dos pequeños rincones: en el <strong>Taller Vicky</strong> nos encargamos de personalizar tu vaso para que sea único, mientras que en el <strong>Taller MªRosa</strong> seleccionamos y envolvemos cuidadosamente tu próxima lectura favorita.
                    </p>
                </div>
                <div className="about-image-wrapper">
                    <div className="about-image-placeholder">
                        <p>Foto de las dos hermanas trabajando en el taller o preparando cajas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
