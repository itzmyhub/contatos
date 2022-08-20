import React, {useState, useEffect} from 'react'

import axios from 'axios';
import Link from '@mui/material/Link';

import Profile from '../../images/default-avatar-1.png'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Paper,
    AppBar,
    TextField,
    Button,
    IconButton,
    Toolbar,
    Typography,
    CardActions,
    Modal, Box
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Home() {

    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState({id: '', name: '', email: ''})

    const [open, setOpen] = React.useState(false);
    const handleOpen = (contact) => {
        setOpen(true);
        setSelectedContact(contact)
    }
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/contacts")
            .then((response) => {
                setContacts(response.data)
            })
            .catch(() => {
                console.log("Deu errado")
            })
    }, [contacts])

    function deleteContact(id) {
        axios.delete(`http://localhost:8080/contacts/${id}`)
            .then(() => {
                setContacts([])
                handleClose()
            })
            .catch(() => {
                console.log("deu ruim")
            })
        console.log(id)
    }

    return (
        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{display: 'block'}}/>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search backend não está implementado"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {fontSize: 'default'},
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Link href="/createContact">
                                <Button variant="contained" sx={{mr: 1}}>
                                    Add user
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{my: 5, mx: 2}} color="text.secondary" align="center" component="div">
                <Grid container spacing={2}>
                    {contacts.map((contact, key) => {

                        return (
                            <Grid item xs={4} key={key}>
                                <Card style={{maxHeight: '150'}}>
                                    <CardMedia
                                        component="img"
                                        height="120"
                                        image={Profile}
                                        alt="default avatar"
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {contact.name}
                                        </Typography>
                                        <Typography sx={{mb: 1.5}} color="text.secondary">
                                            {contact.email}
                                        </Typography>
                                    </CardContent>
                                    <CardActions flex="center">
                                        <Link href={`/editContact/${contact.id}`}>
                                            <IconButton>
                                                <EditIcon color="inherit" sx={{display: 'block'}}/>
                                            </IconButton>
                                        </Link>
                                        <IconButton onClick={() => handleOpen(contact)}>
                                            <DeleteIcon color="error" sx={{display: 'block'}}/>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Excluir {selectedContact.name}?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Tem certeza que deseja excluir este contato?
                        </Typography>
                        <Button onClick={() => deleteContact(selectedContact.id)}
                                variant="contained" color="error" sx={{mr: 3}}>
                            Excluir
                        </Button>
                    </Box>
                </Modal>
            </Typography>
        </Paper>
    )
}

export default Home