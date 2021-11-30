import { useEffect, useState } from 'react';
import { stock } from '../../data/stock.js'

export const ItemListContainer = ({ greeting = "" }) => {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const pedirDatos = () => {
        return new Promise( (resolve, reject) =>
            setTimeout( () =>
                resolve(stock), 2000 ) 
        );
    }

    useEffect(() => {
        pedirDatos()
            .then( resp => setItems(resp) )
            .catch( err => console.error(err) )
            .finally( () => setLoaded(true) )
    },[]);

    console.log(items);
    return(
        <>
            {
                !loaded
                    ? <h2>Cargando...</h2>
                    : <h2>Cargado! </h2>
            }
        </>
    );
}

export default ItemListContainer;