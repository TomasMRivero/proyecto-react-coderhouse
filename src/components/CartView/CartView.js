import { Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { removeFromLocalStorage } from "../../redux/actions/cartActions";
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
        <Container maxWidth="lg" sx={{p:3}}>
            <Grid
                container
                direction = "column"
                alignContent="space-between"
                spacing={3}
            >
                {
                    cart.map(cartItem =>
                        <Grid item zeroMinWidth>
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                remove={() => dispatch(removeFromLocalStorage(cartItem.id))}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}