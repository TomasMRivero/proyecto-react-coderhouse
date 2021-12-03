import ShoppingCartItem from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)
    return(
        <IconButton
            size="large"
            aria-label="shopping cart"
            aria-controls="shoppingcart-appbar"
            color="inherit"
        >
            <Link to="/carrito">
                <Badge badgeContent = {totalCantidad()} color="warning">
                    <ShoppingCartItem/>
                </Badge>
            </Link>
        </IconButton>
    );
}

export default CartWidget;