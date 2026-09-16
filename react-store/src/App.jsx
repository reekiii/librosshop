import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConfigModal from './components/ConfigModal';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import { ComoFunciona, SobreNosotras, Generos, Tematicas, Personalizacion, FAQ, Contacto } from './pages/TextPages';

export default function App() {
  const [catalog, setCatalog] = useState({ productos: [], generos: [], tematicas: [], disenos_vaso: [] });
  const [configProduct, setConfigProduct] = useState(null);

  useEffect(() => {
    fetch('/datos.json')
      .then(res => res.json())
      .then(data => setCatalog(data))
      .catch(err => console.error("Error cargando el catálogo:", err));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        
        <main className="page-transition">
          <Routes>
            <Route path="/" element={<Home catalog={catalog} onSelectProduct={setConfigProduct} />} />
            <Route path="/tienda" element={<Tienda catalog={catalog} onSelectProduct={setConfigProduct} />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/sobre-nosotras" element={<SobreNosotras />} />
            <Route path="/generos" element={<Generos catalog={catalog} />} />
            <Route path="/tematicas" element={<Tematicas catalog={catalog} />} />
            <Route path="/personalizacion" element={<Personalizacion catalog={catalog} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <ConfigModal product={configProduct} catalog={catalog} onClose={() => setConfigProduct(null)} />
        <CartSidebar />
        <CheckoutModal />
        
        <Footer />
      </div>
    </Router>
  );
}
