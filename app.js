// --- ESTADO GLOBAL ---
let storeData = {};
let currentProduct = null;
// Fase 2: Iniciar carrito desde el almacenamiento del navegador o vacío
let cart = JSON.parse(localStorage.getItem('librosshop_cart')) || [];

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('datos.json');
        storeData = await response.json();
        renderProducts();
        populateSelects();
        updateCartUI(); // Cargar carrito guardado
    } catch (error) {
        console.error("Error cargando los datos:", error);
        document.getElementById('products-container').innerHTML = 
            "<p>Error al cargar catálogo. Recuerda abrir con Live Server.</p>";
    }
});

// --- RENDERIZADO DEL CATÁLOGO ---
function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    storeData.productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <div class="price">${prod.precio.toFixed(2)}€</div>
            <button class="btn-primary" onclick="openProductModal('${prod.id}')">Configurar</button>
        `;
        container.appendChild(card);
    });
}

function populateSelects() {
    const genSelect = document.getElementById('genero');
    storeData.generos.forEach(g => genSelect.innerHTML += `<option value="${g}">${g}</option>`);

    const temSelect = document.getElementById('tematica');
    storeData.tematicas.forEach(t => temSelect.innerHTML += `<option value="${t}">${t}</option>`);

    const disenoSelect = document.getElementById('diseno_vaso');
    storeData.disenos_vaso.forEach(d => disenoSelect.innerHTML += `<option value="${d}">${d}</option>`);
}

// --- LOGICA DEL MODAL DE PRODUCTO ---
const productModal = document.getElementById('purchase-modal');
const productForm = document.getElementById('purchase-form');

function openProductModal(productId) {
    currentProduct = storeData.productos.find(p => p.id === productId);
    if (!currentProduct) return;

    document.getElementById('modal-title').textContent = `Configurando: ${currentProduct.nombre}`;
    document.getElementById('modal-price').textContent = currentProduct.precio.toFixed(2);
    document.getElementById('selected-product-id').value = productId;

    const cajaOptions = document.getElementById('caja-options');
    const vasoOptions = document.getElementById('vaso-options');

    // Resetear requeridos
    document.getElementById('genero').required = (currentProduct.tipo === 'caja');
    document.getElementById('tematica').required = (currentProduct.tipo === 'caja');
    document.getElementById('diseno_vaso').required = currentProduct.incluye_vaso;

    // Mostrar/Ocultar
    currentProduct.tipo === 'caja' ? cajaOptions.classList.remove('hidden') : cajaOptions.classList.add('hidden');
    currentProduct.incluye_vaso ? vasoOptions.classList.remove('hidden') : vasoOptions.classList.add('hidden');

    productModal.classList.remove('hidden');
}

document.getElementById('close-modal').addEventListener('click', () => {
    productModal.classList.add('hidden');
    productForm.reset();
});

// --- LÓGICA DE AÑADIR AL CARRITO (FASE 2) ---
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(productForm);
    
    // Crear objeto de item para el carrito
    const cartItem = {
        id: Date.now().toString(), // ID único para poder borrarlo
        producto_id: formData.get('selected-product-id'),
        nombre: currentProduct.nombre,
        precio: currentProduct.precio,
        configuracion: {}
    };

    if (currentProduct.tipo === 'caja') {
        cartItem.configuracion.genero = formData.get('genero');
        cartItem.configuracion.tematica = formData.get('tematica');
        cartItem.configuracion.exclusiones = formData.get('exclusiones');
    }

    if (currentProduct.incluye_vaso) {
        cartItem.configuracion.diseno = formData.get('diseno_vaso');
        cartItem.configuracion.texto = formData.get('texto_vaso');
    }

    cart.push(cartItem);
    saveCart();
    
    productModal.classList.add('hidden');
    productForm.reset();
    
    // Mostrar feedback
    openCartSidebar();
});


// --- GESTIÓN DEL CARRITO (FASE 2) ---
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const btnCheckout = document.getElementById('btn-checkout');

document.getElementById('cart-icon').addEventListener('click', openCartSidebar);
document.getElementById('close-cart').addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', () => { closeCartSidebar(); document.getElementById('checkout-modal').classList.add('hidden'); });

function openCartSidebar() {
    cartSidebar.classList.add('open');
    overlay.classList.remove('hidden');
    updateCartUI();
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.add('hidden');
}

function saveCart() {
    localStorage.setItem('librosshop_cart', JSON.stringify(cart));
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function updateCartUI() {
    // Actualizar badge
    document.getElementById('cart-badge').textContent = cart.length;
    
    // Renderizar items
    const itemsContainer = document.getElementById('cart-items');
    itemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="text-align:center; margin-top:2rem;">Tu carrito está vacío.</p>';
        btnCheckout.disabled = true;
    } else {
        btnCheckout.disabled = false;
        cart.forEach(item => {
            total += item.precio;
            
            // Construir texto de configuración
            let configText = '';
            if(item.configuracion.genero) configText += `📚 ${item.configuracion.genero} (${item.configuracion.tematica})<br>`;
            if(item.configuracion.diseno) configText += `☕ Vaso: ${item.configuracion.diseno}`;

            itemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <span>${item.nombre}</span>
                        <span>${item.precio.toFixed(2)}€</span>
                    </div>
                    <div class="cart-item-details">
                        ${configText}
                    </div>
                    <button class="btn-danger" onclick="removeFromCart('${item.id}')">Quitar</button>
                </div>
            `;
        });
    }

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// --- CHECKOUT SIMULADO (FASE 2) ---
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');

btnCheckout.addEventListener('click', () => {
    closeCartSidebar();
    checkoutModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

document.getElementById('close-checkout').addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
    overlay.classList.add('hidden');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí es donde en el futuro (Fase 3/5) se enviará al Backend y Stripe
    const nombre = document.getElementById('cliente_nombre').value;
    
    alert(`¡Gracias por tu compra, ${nombre}!\nEste es el fin de la simulación de la Fase 2.\nEn el futuro esto procesará el pago.`);
    
    // Vaciar carrito
    cart = [];
    saveCart();
    
    checkoutForm.reset();
    checkoutModal.classList.add('hidden');
    overlay.classList.add('hidden');
});
