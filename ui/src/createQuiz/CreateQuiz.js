import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'tabler-react';
import auth from '../login/auth';

export default class CreateQuiz extends React.Component {
    logOut = () =>{
        auth.logout(this.logOutRedirect);
    }
    logOutRedirect =() =>{
        this.props.history.push("/");
    }
    render() {

        //Quiz Name
        //New -Wrong or all
        //Select Subject
        //Select number of questions
        //Select chapter 
        //
        return (
            <Container>
                <h1>Create Quiz</h1>
                <span className="badge bg-blue">blue</span>
<span className="badge bg-azure">azure</span>
<span className="badge bg-indigo">indigo</span>
<span className="badge bg-purple">purple</span>
<span className="badge bg-pink">pink</span>
<span className="badge bg-red">red</span>
<span className="badge bg-orange">orange</span>
<span className="badge bg-yellow">yellow</span>
<span className="badge bg-lime">lime</span>
<span className="badge bg-green">green</span>
<span className="badge bg-teal">teal</span>
<span className="badge bg-cyan">cyan</span>
<span className="badge badge-pill bg-blue">1</span>
<span className="badge badge-pill bg-azure">2</span>
<span className="badge badge-pill bg-indigo">3</span>
<span className="badge badge-pill bg-purple">4</span>
<span className="badge badge-pill bg-pink">5</span>
<span className="badge badge-pill bg-red">6</span>
<span className="badge badge-pill bg-orange">7</span>
<span className="badge badge-pill bg-yellow">8</span>
<span className="badge badge-pill bg-lime">9</span>
<span className="badge badge-pill bg-green">10</span>
<span className="badge badge-pill bg-teal">11</span>
<span className="badge badge-pill bg-cyan">12</span>
            </Container>
        );
    }
}