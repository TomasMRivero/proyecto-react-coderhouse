export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const getProductsFromLocalStorage = () => {
    return ( dispatch ) => {
        const payload = localStorage.getItem("cart");
        if (payload)
            dispatch( addArrayToCart(JSON.parse(payload)) );
    }
}

export const addToLocalStorage = (item) => {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart ? cart.push(item) : cart = [item];
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch ( addToCart(item) );
    }
}

export const removeFromLocalStorage = (id) => {
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart = cart.filter( e => e.id !== id );
        cart.length
            ? localStorage.setItem("cart", JSON.stringify(cart))
            : localStorage.removeItem("cart");
        dispatch ( removeFromCart(id) );
    }
}

export const emptyLocalStorage = () => {
    return (dispatch) => {
        localStorage.removeItem("cart");
        dispatch( clearCart() )
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const addArrayToCart = items => {
    return {
        type: INIT_CART,
        payload: items
    }
}

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}