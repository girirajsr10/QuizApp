import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'tabler-react';
import auth from '../login/auth';

export class DashboardComponent extends React.Component {
    logOut = () =>{
        auth.logout(this.logOutRedirect);
    }
    logOutRedirect =() =>{
        this.props.history.push("/");
    }
    render() {
        return (
            <Container>
                <h1>Logged In</h1>
                <Button.List>
                    <Button color="primary" id="logout_btn" onClick={this.logOut}>LogOut</Button>
                    {/* <Button color="success" onClick={this.register}>New User</Button> */}
                </Button.List>
            </Container>
        );
    }
}