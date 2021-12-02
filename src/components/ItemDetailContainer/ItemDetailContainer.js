import { useEffect, useState } from "react"
import { useParams } from "react-router";
import stock from "../../data/stock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [ item, setItem ] = useState(null);
    const { idProducto } = useParams()
    const pedirItem = ( id ) => {
        return new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                resolve ( stock.find(e => e.id === id) )
            }, 200 );
        } );
    }

    useEffect( () => {
        pedirItem( parseInt(idProducto) )
            .then( resp => setItem(resp) )
    }, [ idProducto ] );

    return (
        <>
            {item
                ? <ItemDetail item={item} />
                : <h2>Cargando...</h2>
            }
        </>
    )
}