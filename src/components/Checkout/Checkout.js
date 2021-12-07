
import { Formik } from 'formik'
import * as Yup from 'yup'

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

    const values = {
        nombre: '',
        email: '',
        tel: ''
    };



    return (
        <Formik
            initialValues={values}
            validationSchema={schema}
        >
        
        </Formik>
    );
}