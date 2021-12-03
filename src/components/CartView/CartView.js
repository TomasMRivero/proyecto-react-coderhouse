import { Button, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem";

export const CartView = () => {
    const { cart,
        totalCompra,
        removerDelCarrito,
        vaciarCarrito
    } = useContext(CartContext);

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
                justifyContent="flex-start"
            >
                {
                    cart.map(cartItem =>
                        <Grid item zeroMinWidth>
                            <CartItem key={cartItem.id} cartItem={cartItem} remove={removerDelCarrito} />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}