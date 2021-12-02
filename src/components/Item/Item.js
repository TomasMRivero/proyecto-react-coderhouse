import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const Item = ( {item} ) => {

    return (
        <Card sx={{display: 'flex', flexDirection: 'column'}}>
            <CardMedia component="img" image = {item.img} alt={item.nombre}/>
            <CardContent>
                <Typography
                    gutterBottom
                    align="center"
                    variant="h5"
                    component="div"
                >
                    {item.nombre}
                </Typography>
                <Typography variant="subtitle1">Precio: <b>${item.precio}</b></Typography>
                <Typography variant="body">{item.descripcion}</Typography>
            </CardContent>
            <CardActions sx={{alignSelf:"center"}}>
                <Button>Ver más</Button>
            </CardActions>
        </Card>
    )
}