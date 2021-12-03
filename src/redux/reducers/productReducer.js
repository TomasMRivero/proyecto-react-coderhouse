import { DISPLAY_PRODUCT, LIST_PRODUCTS } from "../actions/productsActions";

const initialState = {
    productos: [],
    producto: {}
}

export const productsReducer = (state = [], action) => {
    switch(action.type){
        case LIST_PRODUCTS:
            return {
                productos: [...action.payload]
            }
        case DISPLAY_PRODUCT:
            return {
                producto:{...action.payload}
            }
        default:
            return state;
    }
}