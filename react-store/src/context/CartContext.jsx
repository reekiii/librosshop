import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('librosshop_cart')) || []);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('librosshop_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.precio, 0);

    return (
        <CartContext.Provider value={{ 
            cart, addToCart, removeFromCart, clearCart, cartTotal, 
            isCartOpen, setIsCartOpen, 
            isCheckoutOpen, setIsCheckoutOpen 
        }}>
            {children}
        </CartContext.Provider>
    );
}
