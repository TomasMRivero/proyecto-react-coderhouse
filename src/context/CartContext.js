import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = item => setCart( [...cart, item] );

    const removerDelCarrito = id => 
        setCart( cart.filter( e => e.id !== id ) );

    const estaEnCarrito = id => {
        return cart.some( el => el.id === id );
    }

    const totalCantidad = () => {
        return cart.reduce((acc, el) => acc + el.cantidad, 0);
    }

    const totalCompra = () => {
        return cart.reduce( (acc, el) => 
            acc + el.cantidad * el.precio , 0 );
    }

    const vaciarCarrito = () => setCart([]);

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            estaEnCarrito,
            totalCantidad,
            vaciarCarrito,
            totalCompra,
            removerDelCarrito
          }}>
              {children}
        </CartContext.Provider>
    )

}