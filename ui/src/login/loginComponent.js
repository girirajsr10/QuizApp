
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

export class LoginComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>Login</Col>
                </Row>
                <Form>

                    <Row>
                        <Col>
                            Username
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            Password
                    </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}