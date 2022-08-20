import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from "axios";

import Button from '@mui/material/Button';
import {Link, TextField} from "@mui/material";

import { useParams } from "react-router-dom";

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

const ContactFormEdit = ({contacts}) => {

    const { id } = useParams()

    const formik = useFormik({
        initialValues: {
            name: `${contacts.name}`,
            email: `${contacts.email}`,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: async (formValues, {setSubmitting}) => axios.put(`http://localhost:8080/contacts/${id}`, formValues)
            .then(() => {
                alert(JSON.stringify(formValues, null, 2));
            })
            .catch(() => {
                console.log("deu merda")
            }),
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
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
                <div>
                    <Link href="/" underline="none">
                        <Button color="error" variant="outlined">Voltar</Button>
                    </Link>
                    <grid></grid>
                    <Button color="primary" variant="contained" type="submit">
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactFormEdit;