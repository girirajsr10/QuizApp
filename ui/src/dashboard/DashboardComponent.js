import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'tabler-react';
import auth from '../login/auth';
import Navbar from './../common/Navbar';
import { ProtectedRoute } from './../ProtectedRoute';
import { LoginComponent } from './../login/LoginComponent';
import CreateQuiz from './../createQuiz/CreateQuiz';

export class DashboardComponent extends React.Component {

    render() {
        return (
            <>
                <h1>Dashboard</h1>
            </>
        );
    }
}