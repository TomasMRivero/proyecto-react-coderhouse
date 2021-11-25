import ShoppingCartItem from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

export const CartWidget = () => {
    return(
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <ShoppingCartItem/>
        </IconButton>
    );
}

export default CartWidget;