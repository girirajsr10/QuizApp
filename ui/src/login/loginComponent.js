
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import auth from './auth';
import { Button, Card, Form, Alert } from 'tabler-react';
export class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    login = () => {
        console.log(this);
        auth.login(this.state, this.goToDashboard);
    }
    goToDashboard = (status, res) => {
        if (!status) {
            this.setState({ username: "", password: "", failed: true });
            setTimeout(()=>{
                this.setState({failed: undefined});
            }, 2000);
        } else {
            this.props.history.push("/dashboard");
        }
    }
    register = () => {
        this.props.history.push("/register");
    }
    updateField = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    }
    render() {
        return (
            <Container>
                <Card>
                    <Card.Header>
                        <Card.Title>Login</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {this.state.failed && <Alert type="danger">
                            <strong>Login Failed </strong>due to invalid username or password
                        </Alert>}
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
                            <Button color="primary" onClick={this.login}>Login</Button>
                            <Button color="success" onClick={this.register}>New User</Button>
                        </Button.List>
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}