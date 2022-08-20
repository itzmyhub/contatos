import React from 'react'

import {AppBar, Box, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactForm from "../../components/ContactForm";

function CreateContact() {

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
                        </Grid>
                </Box>
            </Typography>
        </Paper>
    )
}


export default CreateContact