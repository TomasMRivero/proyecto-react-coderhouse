import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { stock } from '../../data/stock.js'
import { ItemList } from '../ItemList/ItemList.js';

export const ItemListContainer = ({ greeting = "" }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const { idCategoria } = useParams();

    const pedirDatos = () => {
        return new Promise( (resolve, reject) =>
            setTimeout( () =>
                resolve(stock), 200 ) 
        );
    }

    useEffect(() => {
        setLoading(true);
        pedirDatos()
            .then( resp => {
                idCategoria
                    ? setItems(resp.filter(e => e.categoria == idCategoria))
                    : setItems(resp);
            })
            .catch( err => console.error(err) )
            .finally( () => setLoading(false) )
    },[ idCategoria ]);

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
                    : <ItemList items={items} />
            }
        </>
    );
}

export default ItemListContainer;