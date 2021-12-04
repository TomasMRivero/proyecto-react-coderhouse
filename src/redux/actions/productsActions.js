import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { startLoading, finishLoading } from "./uiActions";

export const LIST_PRODUCTS = 'LIST_PRODUCTS';
export const DISPLAY_PRODUCT = 'GET_PRODUCT';

export const getProductsFromFirebase = (idCategoria) => {
    return ( dispatch ) => {
        dispatch( startLoading() );
        const productosRef = collection(db, 'products');
        const q = idCategoria
            ? query(productosRef, where('categoria', '==', idCategoria))
            : productosRef;

            getDocs(q)
                .then( resp => {
                    const productos = resp.docs.map( doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                    dispatch( listProducts(productos) );
                } )
                .finally( () => {
                    dispatch( finishLoading() );
                } );
    }
}

export const getSigleProductFromFirebase = (idProducto) => {
    return (dispatch) => {
        dispatch( startLoading() );
        const productosRef = collection(db, 'products');
        const docRef = doc(productosRef, idProducto);

        getDoc(docRef)
            .then( doc => {
                const producto = {
                    id: doc.id,
                    ...doc.data()
                };
                dispatch( displayProduct( producto ) );
            })
            .finally( () => 
                dispatch( finishLoading() )
            );
    }
}

export const listProducts = (items) => {
    return {
        type: LIST_PRODUCTS,
        payload: items
    }
}

export const displayProduct = (item) => {
    return {
        type: DISPLAY_PRODUCT,
        payload: item
    }
}