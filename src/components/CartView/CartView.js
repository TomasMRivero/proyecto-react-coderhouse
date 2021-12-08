import { Button, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyLocalStorage, removeFromLocalStorage } from "../../redux/actions/cartActions";
import { CartItem } from "../CartItem/CartItem";

export const CartView = () => {
    const dispatch = useDispatch();
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
                        <Grid item zeroMinWidth xs={12} key={i}>
                            <CartItem
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
                            <Button variant="contained">
                                <Link to="/checkout">
                                    Finalizar Compra
                                </Link>
                            </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}