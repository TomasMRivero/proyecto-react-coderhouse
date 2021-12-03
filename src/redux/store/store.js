import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from '../reducers/productReducer';
import { uiReducer } from '../reducers/uiReducer';

export const reducers = combineReducers({
    productos: productsReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
)