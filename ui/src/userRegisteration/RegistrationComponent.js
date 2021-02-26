import React from 'react';
import { Card, Container, Alert, Form, Button } from 'tabler-react';
import RegistrationService from './registrationService';
import RegistrationSuccessComponent from './RegistrationSuccessComponent';

export class RegistrationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            failed: false,
            userPopup: false
        }
    }
    updateField = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    }
    registerUser = () =>{
        RegistrationService.registerUser(this.state, this.registerCallback);
        // this.registerCallback(true);
    }
    registerCallback = (status) =>{
        if(!status){
            this.setState({failed: true});
        }
        else{
            this.setState({userPopup:true});
        }
    }
    login = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <Container>
                <Card>
                    <Card.Header>
                        <Card.Title>Register New User</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {this.state.failed && <Alert type="danger">
                            <strong>Registration Failed </strong>as Username alredy exists.
                        </Alert>}
                        {this.state.userPopup && <RegistrationSuccessComponent closePopop={this.login} isOpen={true}/>}
                        <Form.FieldSet>
                            <Form.Group label="Username" isRequired>
                                <Form.Input name="username" onChange={(event) => { this.updateField(event, 'username') }} placeholder='Username' />
                            </Form.Group>
                            <Form.Group label="Password" isRequired>
                                <Form.Input name="password" onChange={(event) => { this.updateField(event, 'password') }} placeholder='Password' type="password" />
                            </Form.Group>
                        </Form.FieldSet>
                    </Card.Body>
                    <Card.Footer>
                        <Button.List>
                            <Button color="primary" onClick={this.registerUser}>Register</Button>
                            <Button color="success" onClick={this.login}>Login</Button>
                        </Button.List>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }
}