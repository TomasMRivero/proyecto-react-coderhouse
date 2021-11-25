import ShoppingCartItem from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

export const CartWidget = () => {
    return(
        <IconButton
            size="large"
            aria-label="shopping cart"
            aria-controls="shoppingcart-appbar"
            color="inherit"
        >
            <ShoppingCartItem/>
        </IconButton>
    );
}

export default CartWidget;