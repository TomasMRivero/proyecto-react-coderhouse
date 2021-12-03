import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { startLoading, finishLoading } from "./uiActions";

export const LIST_PRODUCTS = 'LIST_PRODUCTS';

export const getProductsFromFirebase = (idCategoria) => {
    return ( dispatch ) => {
        dispatch( startLoading() )
        const productosRef = collection(db, 'products');
        const q = idCategoria
            ? query(productosRef, where('categoria', '==', idCategoria))
            : productosRef;

            getDocs(q)
                .then( resp => {
                    console.log(resp)
                    const productos = resp.docs.map( doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });

                    dispatch( listProducts(productos) )
                    dispatch( finishLoading() )
                });
    }
}

export const listProducts = (items) => {
    return {
        type: LIST_PRODUCTS,
        payload: items
    }
}