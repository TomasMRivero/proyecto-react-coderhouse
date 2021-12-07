import { useSelector } from "react-redux";

export const INIT_CART = 'INIT_CART';
export const ADD_TO_CART = 'ADD_TO_CART'

export const getProductsFromLocalStorage = () => {
    return ( dispatch ) => {
        let payload = localStorage.getItem("cart");
        if (payload)
            dispatch( addArrayToCart(JSON.parse(payload)) );
    }
}

export const updateLocalStorage = (cart, item) => {
    return (dispatch) => {
        dispatch ( addToCart(item) );
        localStorage.setItem( "cart", JSON.stringify(cart) );
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