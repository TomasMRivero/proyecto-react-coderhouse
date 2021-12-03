import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSigleProductFromFirebase } from '../../redux/actions/productsActions.js';
import stock from "../../data/stock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const dispatch = useDispatch();
    const { producto } = useSelector(state => state.productos);
    const { loading } = useSelector(state => state.ui)
    const { idProducto } = useParams()

    useEffect( () => {
        dispatch( getSigleProductFromFirebase(idProducto) );
    }, [ idProducto, dispatch ] );

    return (
        <>
            {loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={producto} />
            }
        </>
    )
}