import React from 'react';
import Button from '@mui/material/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Link from "@mui/material/Link";

class MyForm extends React.Component {

    state = {
        name: '',
        email: '',
    }

    handleChangeName = (event) => {
        const name = event.target.value;
        console.log(name)
        this.setState({name});

    }

    handleChangeEmail = (event) => {
        const email = event.target.value;
        console.log(email)
        this.setState({email});
    }

    handleSubmit = () => {
        console.log("deu certo")
    }

    render() {
        const {name} = this.state
        const {email} = this.state;
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Nome"
                    onChange={this.handleChangeName}
                    name="name"
                    value={name}
                    validators={['required']}
                    errorMessages={['Este campo é obrigatório', 'O campo deve ter ao menos 3 caracteres']}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChangeEmail}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Este campo é obrigatório', 'Email inválido']}
                />
                <div>

                    <Link href="/" underline="none">
                        <Button color="error" variant="outlined">
                            Voltar
                        </Button>
                    </Link>

                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </ValidatorForm>
        );
    }
}

export default MyForm