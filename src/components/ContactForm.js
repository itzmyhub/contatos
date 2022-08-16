import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

const validationSchema = yup.object({
    name: yup
        .string('Digite seu nome')
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .required('Nome é obrigatorio'),
    email: yup
        .string('Digite seu email')
        .email('Digite um email válido')
        .required('Email é obrigatório'),
});

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (formValues, {setSubmitting}) => {
            alert(JSON.stringify(formValues, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <TextField
                    id="name"
                    name="name"
                    label="Nome"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name ? formik.errors.name : ""}
                />
                <TextField
                    id="email"
                    name="email"
                    label="E-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email : ""}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;