import { ADD_TO_CART, CLEAR_CART, INIT_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case INIT_CART:
            return [...action.payload];
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter( e => e.id !== action.payload );
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}