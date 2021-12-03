import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { stock } from '../../data/stock.js'
import { getProductsFromFirebase } from '../../redux/actions/productsActions.js';
import { ItemList } from '../ItemList/ItemList.js';

export const ItemListContainer = ({ greeting = "" }) => {

    const dispatch = useDispatch();
    console.log(useSelector(state => state))
    const { productos } = useSelector(state => state.productos);
    const { loading } = useSelector(state => state.ui);
    const { idCategoria } = useParams();

    useEffect(() => {
        dispatch( getProductsFromFirebase( idCategoria ))
    },[ idCategoria, dispatch ]);

    return(
        <>
            <h2>
                {
                    greeting
                    ? greeting
                    : idCategoria.toUpperCase()
                }
            </h2>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </>
    );
}

export default ItemListContainer;