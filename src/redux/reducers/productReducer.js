import { LIST_PRODUCTS } from "../actions/productsActions";

export const productsReducer = (state = [], action) => {
    switch(action.type){
        case LIST_PRODUCTS:
            return [...action.payload]
        default:
            return state;
    }
}