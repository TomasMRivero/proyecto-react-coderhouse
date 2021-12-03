import { Grid, IconButton, Paper, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

export const CartItem = ( {cartItem, remove} ) => {

    const onRemove = e => {
        e.preventDefault();
        remove(cartItem.id);
    }
    return (
        <Paper>
            <Grid container direction="row" >
                <Grid item sm={2} sx={ {display:{xs:"none", sm:"inherit"} }}>
                    <img
                    src = {cartItem.img}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    alt={cartItem.nombre}
                    />
                </Grid>
                <Grid
                    item xs={12} sm={10}
                    container
                    direction="row"
                    alignContent="space-evenly"
                    alignItems="center"
                    sx={{p:2}}
                >
                    <Grid
                        item xs={12}
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="h5" align="center" noWrap>
                                <b>{cartItem.nombre}</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size="large"
                                onClick={onRemove}
                                color="inherit"
                                sx={{flexGrow : 0}}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <Typography align="center">Talle: <b>{cartItem.talle}</b></Typography>
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <Typography align="center">Color: <b>{cartItem.color}</b></Typography>
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <Typography align="center">Precio: <b>${cartItem.precio}</b></Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography align="center">Cantidad: <b>{cartItem.cantidad}</b></Typography>                        
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Typography align="right" variant="h6"><b>Total: ${cartItem.cantidad * cartItem.precio}</b></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}