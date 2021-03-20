import  React  from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ProtectedRoute } from './ProtectedRoute';
import { DashboardComponent } from './dashboard/DashboardComponent';
import { RegistrationComponent } from './userRegisteration/RegistrationComponent';
import { LoginComponent } from './login/LoginComponent';
import { Container } from 'react-bootstrap';
import Navbar from './common/Navbar';
import CreateQuiz from './createQuiz/CreateQuiz';
import  QuizHistory  from './quizHistory/QuizHistory';
import ShowQuiz from './startQuiz/ShowQuiz';
import { LOG_OUT_URL } from './common/constants';
import Logout from './logout/Logout';

function AppRoutes() {

    return(
        <Switch>
            <Route exact path="/" exact component={LoginComponent}></Route>
            <Route exact path="/login"  component={LoginComponent}></Route>
            <Route exact path="/register"  component={RegistrationComponent}></Route>
            <ProtectedRoute exact path="/dashboard" component={DashboardComponent}></ProtectedRoute>
            <ProtectedRoute exact path="/quizList" component={QuizHistory }></ProtectedRoute>
            <ProtectedRoute exact path="/attemptQuiz" component={ShowQuiz}></ProtectedRoute>
            <ProtectedRoute exact path="/quizAnalytics" component={LoginComponent}></ProtectedRoute>
            <ProtectedRoute exact path="/createQuiz" component={CreateQuiz}></ProtectedRoute>
            <ProtectedRoute exact path={LOG_OUT_URL} component={Logout}></ProtectedRoute>
            <Route path="*" component={() => "Page not found"}></Route>
        </Switch>
    )
}
export default AppRoutes;
