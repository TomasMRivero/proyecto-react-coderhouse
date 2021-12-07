export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART'

export const getProductsFromLocalStorage = () => {
    console.log("getting cart from local storage");
    return ( dispatch ) => {
        const payload = localStorage.getItem("cart");
        if (payload)
            dispatch( addArrayToCart(JSON.parse(payload)) );
    }
}

export const addToLocalStorage = (item) => {
    console.log("updating cart to local storage");
    console.log(item);
    return (dispatch) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart ? cart.push(item) : cart = [item];
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch ( addToCart(item) );
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