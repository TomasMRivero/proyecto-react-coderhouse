import { Button, Container, Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCounter from "../../hooks/useCounter";
import { addToLocalStorage } from "../../redux/actions/cartActions";
import Counter from "../Counter/Counter"

export const ItemDetail = ( {item = {} } ) => {

    const dispatch = useDispatch()

    const {cart} = useSelector(state => state)

    const {counter, increment, decrement} = useCounter(0, item.stock);

    const handleAgregar = (item) => {
        counter > 0 && dispatch (addToLocalStorage(
            {
                id: item.id,
                precio: item.precio,
                nombre: item.nombre,
                img: item.imgCard,
                talle: item.talle,
                color: item.color,
                cantidad: counter
            }
        ) );
    }

    return (
        <Container maxWidth="lg" sx={{p:3}}>
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
                    {cart.some( el => el.id === item.id )
                        ?   <Button variant="contained" >
                                <Link to="/carrito" >
                                    Ir a comprar
                                </Link>
                            </Button>                        
                        :   <Counter 
                                increment = {increment}
                                decrement = {decrement}
                                counter = {counter}
                                max = {item.stock}
                            >
                                <Button variant="outlined" onClick={() => handleAgregar(item)}>Agregar al carrito</Button>
                            </Counter>
                        }
                </Grid>
            </Grid>
        </Container>
    )
}