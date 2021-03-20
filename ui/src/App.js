import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tabler-react/dist/Tabler.css";
import auth from './login/auth';
import Navbar from './common/Navbar';

function App() {
  return (

    <Router>
      <div className="App">
        {<Navbar/>}
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
