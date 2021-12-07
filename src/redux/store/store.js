import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { productsReducer } from '../reducers/productReducer';
import { uiReducer } from '../reducers/uiReducer';

export const reducers = combineReducers({
    productos: productsReducer,
    ui: uiReducer,
    cart: cartReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)