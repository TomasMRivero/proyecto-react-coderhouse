import { useEffect, useState } from "react"
import stock from "../../data/stock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [ item, setItem ] = useState(null);

    const pedirItem = ( id ) => {
        return new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                resolve ( stock.find(e => e.id === id) )
            }, 2000 );
        } );
    }

    useEffect( () => {
        pedirItem( 1 )
            .then( resp => setItem(resp) )
    }, [] );

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}