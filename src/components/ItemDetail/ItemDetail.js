import SquareIcon from "@mui/icons-material/Square";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCounter from "../../hooks/useCounter";
import { addToLocalStorage } from "../../redux/actions/cartActions";
import Counter from "../Counter/Counter"

export const ItemDetail = ( { item = {stock: [] } } ) => {

    const dispatch = useDispatch()

    const {cart} = useSelector(state => state)
    
    const [talle, setTalle] = useState('');
    const [colores, setColores] = useState([]);
    const [color, setColor] = useState({});
    const [max, setMax] = useState(0);
    
    const {counter, increment, decrement} = useCounter(0, max);

    const handleChangeTalle = (e) => {
        setTalle(e.target.value);
    }

    useEffect(()=>{
        setColor({});
        const aux = {...item.stock.find(s => s.talle === talle)};
        setColores(aux.colores);
    }, [talle, item]);

    useEffect(() => {
        setMax(color.cantidad);
    }, [color])


    const handleAgregar = (item) => {
        counter > 0 && dispatch (addToLocalStorage(
            {
                id: item.id,
                precio: item.precio,
                nombre: item.nombre,
                img: item.imgCard,
                talle: talle,
                color: color.color,
                cantidad: counter
            }
        ) );
    }

    return (
            <Container maxWidth="lg" sx={{p:3}}>
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

                    <FormControl  sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="talle_select_label">Talle</InputLabel>
                        <Select
                            id="talle_select"
                            labelId="talle_select_label"
                            value={talle}
                            label="Talle"
                            onChange={handleChangeTalle}
                            variant= "outlined"
                        >
                            {item.stock && item.stock.map( (t,i) => 
                                <MenuItem key={i} value={t.talle}>{t.talle}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl  sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="color_select_label">Color</InputLabel>
                        <Select
                            id="color_select"
                            labelId="color_select_label"
                            value={color}
                            label="Color"
                            onChange={(e) =>setColor(e.target.value)}
                            variant= "outlined"
                        >
                            {colores && colores.map( (c,i) => 
                                <MenuItem key={i} value={c}>
                                    <SquareIcon sx = {{color: c.hex, border: 1, borderColor: 'black', mr: 1}} />
                                    {c.color}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    {cart.some( el => el.id === item.id )
                        ?   <Button variant="contained" >
                                <Link to="/carrito" >
                                    Ir a comprar
                                </Link>
                            </Button>                        
                        :   <Counter 
                                increment = {increment}
                                decrement = {decrement}
                                counter = {counter}
                                max = {max}
                            >
                                <Button variant="outlined" onClick={() => handleAgregar(item)}>Agregar al carrito</Button>
                            </Counter>
                        }
                </Grid>
            </Grid>
        </Container>
    )
}