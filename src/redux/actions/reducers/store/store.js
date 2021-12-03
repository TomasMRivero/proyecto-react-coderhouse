import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from '../productReducer';

export const reducers = combineReducers({
    productos: productsReducer
})

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
)