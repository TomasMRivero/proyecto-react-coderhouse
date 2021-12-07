import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { emptyLocalStorage, removeFromLocalStorage } from "../../redux/actions/cartActions";
import { CartItem } from "../CartItem/CartItem";

export const CartView = () => {
    const dispatch = useDispatch();
    const {
        totalCompra,
        removerDelCarrito,
        vaciarCarrito
    } = useContext(CartContext);

    const {cart} = useSelector(state => state)

    if (cart.length === 0) {
        return (
            <Container maxWidth="lg" sx={{p:3}}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                >
                    <Grid item>
                        <Typography variant="h3">Tu carrito está vacío!</Typography>   
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large">
                            <Link to="/">Volver</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }

    return(
        <Container maxWidth="lg" sx={{p:3}} >
            <Grid
                container
                direction = "row"
                alignContent="space-between"
                spacing={3}
            >
                {   
                    cart.map((cartItem, i) =>
                        <Grid item zeroMinWidth xs={12}>
                            <CartItem
                                key={++i}
                                cartItem={cartItem}
                                remove={() => dispatch(removeFromLocalStorage(cartItem.id))}
                            />
                        </Grid>
                    )
                }
                <Grid container item spacing={3} alignItems="center" justifyContent="flex-end" xs={12} >
                    <Grid item flex={1}>
                        <Typography variant="h5">
                            Total: <b>{cart.reduce((acc, el) => acc + el.precio, 0)}</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                            <Button variant="outlined" color="warning" onClick={() => dispatch( emptyLocalStorage() )}>Vaciar Carrito</Button>
                    </Grid>
                    <Grid item>
                            <Button variant="contained">Finalizar Compra</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}