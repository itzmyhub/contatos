import React from 'react'

import './cadastrar.css'

import {AppBar, Box, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactForm from "../../components/ContactForm";

function CreateContact() {

    /*const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."

        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }*/

    /*const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = ContactForm(initialFValues, true, validate);*/

    /*const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {

            //resetForm()
        }
    }*/

    return (
        <Paper sx={{maxWidth: 500, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                        </Grid>
                        <Grid item xs>
                            <h1>CRIAR CONTATO</h1>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <AccountCircleIcon color="inherit" sx={{display: 'block'}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{my: 5, mx: 2}} color="text.secondary" align="center" component="div">
                <Box
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                        <Grid container>
                            <ContactForm></ContactForm>
                            {/*<Grid item xs={6}>

                                <TextField
                                    name="name"
                                    label="Nome"
                                    //value={values.name}
                                    //onChange={handleInputChange}
                                    //error={errors.name}
                                />

                                <TextField
                                    name="email"
                                    label="Email"
                                    //value={values.email}
                                    //onChange={handleInputChange}
                                    //error={errors.email}
                                />
                            </Grid>
                            <div>
                                <Button
                                    type="submit"
                                    text="Salvar"
                                />
                                <Button
                                    text="Voltar"
                                    color="default"
                                />
                            </div>*/}

                        </Grid>
                </Box>
            </Typography>
        </Paper>
    )
}


export default CreateContact