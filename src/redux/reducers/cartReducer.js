import { ADD_TO_CART, INIT_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart:[]
};

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case INIT_CART:
            return {cart: [...action.payload]};
        case ADD_TO_CART:
            return {cart: [...state.cart, action.payload]};
        case REMOVE_FROM_CART:
            return {cart: state.cart.filter( e => e.id !== action.payload )};
        default:
            return state;
    }
}