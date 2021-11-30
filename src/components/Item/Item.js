export const Item = ( {item} ) => {

    return (
        <div>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.desc}</p>
            <button>Ver más</button>
        </div>
    )
}