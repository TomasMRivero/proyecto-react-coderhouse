import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Item = ( {item} ) => {

    return (
        <Card sx={{display: 'flex', flexDirection: 'column'}}>
        <Link to={`/producto/${item.id}`}>
        <CardActionArea>
            <CardMedia component="img" image = {item.imgCard} alt={item.nombre}/>
            <CardContent>
                <Typography
                    gutterBottom
                    align="center"
                    variant="h5"
                    component="div"
                    noWrap
                >
                    {item.nombre}
                </Typography>
                <Typography variant="subtitle1">Precio: <b>${item.precio}</b></Typography>
                <Typography variant="body" component="div" noWrap>{item.descripcion}</Typography>
            </CardContent>
            </CardActionArea>
        </Link>
        </Card>
    )
}