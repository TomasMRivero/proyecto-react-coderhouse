import { Button, Container, Grid, Typography } from "@mui/material"

export const ItemDetail = ( {item} ) => {

    return (
        <Container maxwidth="lg" sx={{p:3}}>
            <Grid container columnSpacing={3}>
                <Grid item xs={7} sx={{overflow:"hidden"}}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src = {item.imgDetail}
                    alt={item.nombre}/>
                </Grid>
                <Grid item xs={5} container direction="column">
                    <Typography variant="h3" gutterBottom>{item.nombre}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Precio: <b>${item.precio}</b></Typography>
                    <Typography variant="body" gutterBottom>{item.descripcion}</Typography>
                    <Button variant="outlined">Agregar al carrito</Button>
                </Grid>
                <Grid></Grid>
            </Grid>
        </Container>
    )
}