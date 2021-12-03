import ShoppingCartItem from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
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
            <Badge badgeContent = {totalCantidad()} color="warning">
                <ShoppingCartItem/>
            </Badge>
        </IconButton>
    );
}

export default CartWidget;