import { doc, setDoc, collection } from "firebase/firestore";
import stock from "../data/stock";
import { db } from "../firebase/config";

const products = stock.map(i => {
    return {
        nombre: i.nombre,
        imgCard: i.imgCard,
        imgDetail: i.imgDetail,
        precio: i.precio,
        descripcion: i.descripcion,
        categoria: i.categoria,
        stock: i.stock
    }
})
export async function populateFirestore() {
    products.forEach(p => {
        const newItemRef = doc(collection(db, 'products'));
        setDoc(newItemRef, p)
            .then( res => 
                console.log(`${p.nombre} cargado con exito!`) )
                .catch(err => {
                console.log(`error al cargar ${p.nombre}:`)
                console.error(err)
                })
    })
}