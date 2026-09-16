export default function HowItWorks() {
    const steps = [
        {
            icon: "📦",
            title: "1. Elige tu experiencia",
            description: "Selecciona el pack que más te guste: solo el libro, acompañado de un vaso personalizado, o un pack doble para compartir."
        },
        {
            icon: "✨",
            title: "2. Cuéntanos tus gustos",
            description: "Dinos qué género prefieres, qué temática te apetece leer y qué libros tienes ya para asegurarnos de no repetirlos."
        },
        {
            icon: "💌",
            title: "3. Preparamos la magia",
            description: "Desde nuestros talleres seleccionamos tu lectura ideal y preparamos tu paquete a mano cuidando cada detalle."
        },
        {
            icon: "☕",
            title: "4. ¡A disfrutar!",
            description: "Recibe tu caja sorpresa, prepara una bebida caliente en tu vaso personalizado y descubre tu próxima historia favorita."
        }
    ];

    return (
        <section id="como-funciona" className="how-it-works-section">
            <div className="section-header">
                <h2>¿Cómo funciona?</h2>
                <div className="divider"></div>
                <p>Una experiencia diseñada para mantener viva la ilusión de descubrir algo nuevo.</p>
            </div>
            
            <div className="steps-grid">
                {steps.map((step, index) => (
                    <div key={index} className="step-card">
                        <div className="step-icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
