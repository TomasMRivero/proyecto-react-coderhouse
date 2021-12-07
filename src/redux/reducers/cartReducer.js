import { INIT_CART } from "../actions/cartActions";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case INIT_CART:
            return [...action.payload];
        default:
            return state;
    }
}