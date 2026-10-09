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

import { supabase } from './supabase';

export default function App() {
  const [catalog, setCatalog] = useState({ productos: [], generos: [], tematicas: [], disenos_vaso: [] });
  const [configProduct, setConfigProduct] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        // 1. Cargamos las categorías del JSON local (para los menús)
        const res = await fetch('/datos.json');
        const localData = await res.json();
        
        // 2. Cargamos LOS PRODUCTOS REALES desde la nube (Supabase)
        const { data: dbProducts, error } = await supabase.from('productos').select('*');
        
        if (error) {
          console.error("Error leyendo de Supabase:", error);
          setCatalog(localData); // Si falla, usa los de mentira
        } else {
          console.log("¡Productos cargados desde la base de datos real!", dbProducts);
          setCatalog({ ...localData, productos: dbProducts });
        }
      } catch (err) {
        console.error("Error cargando el catálogo:", err);
      }
    }
    loadData();
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
