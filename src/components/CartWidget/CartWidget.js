import ShoppingCartItem from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { cart } = useSelector(state => state);
    return(
        <IconButton
            size="large"
            aria-label="shopping cart"
            aria-controls="shoppingcart-appbar"
            color="inherit"
        >
            <Link to="/carrito">
                <Badge badgeContent = {cart.reduce((acc, el) => acc + el.cantidad, 0)} color="warning">
                    <ShoppingCartItem/>
                </Badge>
            </Link>
        </IconButton>
    );
}

export default CartWidget;