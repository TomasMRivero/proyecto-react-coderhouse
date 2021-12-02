export const ItemDetail = ( {item} ) => {

    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src = {item.img} alt={item.nombre}/>
            <p>Precio: ${item.precio}</p>
            <p>{item.desc}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}