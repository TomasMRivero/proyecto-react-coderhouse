import { Button, Container, Grid, Typography } from "@mui/material"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import useCounter from "../../hooks/useCounter";
import Counter from "../Counter/Counter"

export const ItemDetail = ( {item} ) => {

    const { agregarAlCarrito, estaEnCarrito } = useContext(CartContext);

    const {counter, increment, decrement} = useCounter(0, item.stock);

    const handleAgregar = () => {
        counter > 0 && agregarAlCarrito({
                            id: item.id,
                            precio: item.precio,
                            nombre: item.nombre,
                            talle: item.talle,
                            color: item.color,
                            cantidad: counter
        });
    }

    return (
        <Container maxwidth="lg" sx={{p:3}}>
            <Grid container columnSpacing={3}>
                <Grid item xs={7} sx={{overflow:"hidden"}}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src = {item.imgDetail}
                    alt={item.nombre}/>
                </Grid>
                <Grid item xs={5} container direction="column">
                    <Typography variant="h3" gutterBottom>{item.nombre}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Precio: <b>${item.precio}</b></Typography>
                    <Typography variant="body" gutterBottom>{item.descripcion}</Typography>
                    {estaEnCarrito(item.id)
                        ?   <Button variant="outlined" disabled>Ir a comprar</Button>                        
                        :   <Counter 
                                increment = {increment}
                                decrement = {decrement}
                                onAdd = {handleAgregar}
                                counter = {counter}
                                max = {item.stock}
                            >
                                <Button variant="outlined" onClick={handleAgregar}>Agregar al carrito</Button>
                            </Counter>
                        }
                </Grid>
            </Grid>
        </Container>
    )
}