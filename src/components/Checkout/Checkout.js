import { useState } from 'react';
import { Timestamp, collection, addDoc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { emptyLocalStorage } from '../../redux/actions/cartActions';
import { Button, Container, FormControl, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required("Este campo es obligatorio"),
    email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debe ingresar un email válido"),
    tel: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "Formato inválido")
});

export const Checkout = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
    const [orderId, setOrderId] = useState(null);

    const generateOrder = (customer) => {
        const order = {
            customer: customer,
            items: cart,
            total: cart.reduce((acc,e) => acc + e.precio, 0),
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db);

        const ordersref = collection(db, 'orders');
        const prodRef = collection(db, 'products');
        const q = query(prodRef, where(documentId(), 'in', cart.map(el => el.id)));
        
        const outOfStock = [];

        getDocs(q)
            .then(res => {
                
                res.docs.forEach(doc => {
                    const itemToUpdate = cart.find(p => p.id === doc.id);
                    doc.data().stock >= itemToUpdate.cantidad
                        ?   batch.update(doc.ref, {
                            stock: doc.data().stock - itemToUpdate.cantidad
                            })
                        :   outOfStock.push(itemToUpdate);
                });
                if(!outOfStock.length){
                    
                    batch.commit();
                    addDoc(ordersref, order)
                        .then(res => {
                            setOrderId(res.id);
                            dispatch( emptyLocalStorage() );
                        })
                }else{
                    alert("Hay items sin stock!");
                }
            });
    }

    const values = {
        nombre: '',
        email: '',
        tel: ''
    };

    


    return (
        <Container fixed maxWidth="lg" sx={{p:3, mt: 5, border: '1px solid', borderRadius: 3}}>
            {
                orderId
                    ?
                        <>
                            <Typography variant="h3">
                                Gracias por su compra!
                            </Typography>
                            <Typography variant="subtitle1">
                                Su numero de orden es: <b>{orderId}</b>
                            </Typography>
                            <Button variant="outlined">
                                <Link to="/">
                                    Volver al inicio
                                </Link>
                            </Button>
                        </>
                    :
                        <Formik
                            initialValues={values}
                            validationSchema={schema}
                            onSubmit={values => generateOrder(values)}
                        >
                            {formik => (
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <FormControl error={formik.errors.nombre?true:false} fullWidth>
                                                <TextField 
                                                    id="nombre"
                                                    value={formik.values.nombre}
                                                    onChange={formik.handleChange}
                                                    name="nombre"
                                                    label="Nombre"
                                                    type="text"
                                                    aria-describedby="nombre-helper-text"
                                                    required
                                                />
                                                <FormHelperText id="nombre-helper-text">{formik.errors.nombre}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl error={formik.errors.email?true:false} fullWidth>
                                                <TextField
                                                    id="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    name="email"
                                                    label="Email"
                                                    type="email"
                                                    aria-describedby="email-helper-text"
                                                    required
                                                    variant="outlined"
                                                />
                                                <FormHelperText id="email-helper-text">{formik.errors.email}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl error={formik.errors.tel?true:false} fullWidth>
                                                <TextField
                                                    id="tel"
                                                    value={formik.values.tel}
                                                    onChange={formik.handleChange}
                                                    name="tel"
                                                    label="Teléfono"
                                                    type="tel"
                                                    aria-describedby="tel-helper-text"
                                                    required
                                                    variant="outlined"
                                                />
                                                <FormHelperText id="tel-helper-text">{formik.errors.tel}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="success">Enviar</Button>
                                        </Grid>
                                    </Grid>   
                                </form>
                            )}
                        </Formik>
            }
        </Container>
    );
}