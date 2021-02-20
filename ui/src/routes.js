import  React  from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginComponent } from './login/loginComponent';

function AppRoutes() {

    return(
        <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login"  component={LoginComponent}></Route>
            <Route path="/quizList" component={LoginComponent}></Route>
            <Route path="/attemptQuiz" component={LoginComponent}></Route>
            <Route path="/quizAnalytics" component={LoginComponent}></Route>
            <Route path="/createQuiz" component={LoginComponent}></Route>
        </Switch>
    )
}
export default AppRoutes;