
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'tabler-react';
import { useLocation } from 'react-router-dom'
import Classnames from 'classnames';
import { NavItem } from 'react-bootstrap';
import { ATTEMPT_QUIZ_URL, CREATE_QUIZ_URL, DASHBOARD_URL, QUIZ_HISTORY_URL, LOG_OUT_URL } from './constants';
export default function Navbar (){

    
    // render() {
        const location = useLocation();
        let dashboardNavClass = Classnames({'active': location.pathname === DASHBOARD_URL});
        let crQuizNavClass = Classnames({'active': location.pathname === CREATE_QUIZ_URL});
        let attmptQuizNavClass = Classnames({'active': location.pathname === ATTEMPT_QUIZ_URL});
        let quizHistNavClass = Classnames({'active': location.pathname === QUIZ_HISTORY_URL});

        return (
            // <button className={clsNam}>Test Button </button>
            <header className="navbar navbar-expand-md">
                <nav className="navbar navbar-light bg-light justify-content-between container-xl">
                {/* <Nav className="navbar navbar-light bg-light justify-content-between container-xl" textTransform="capitalize"> */}
                {/* <Nav.Item hasSubNav value="Page One" icon="globe">
                    <Nav.SubItem value="Sub Item 1" />
                    <Nav.SubItem>Sub Item 2</Nav.SubItem>
                    <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
                </Nav.Item> */}
                    <NavItem className={dashboardNavClass}><NavLink to={DASHBOARD_URL}>Home</NavLink></NavItem>
                    <NavItem className={crQuizNavClass}><NavLink to={CREATE_QUIZ_URL}>Create Quiz</NavLink></NavItem>
                    <NavItem className={attmptQuizNavClass}><NavLink to={ATTEMPT_QUIZ_URL}>Attempt Quiz</NavLink></NavItem>
                    <NavItem className={quizHistNavClass}><NavLink to={QUIZ_HISTORY_URL}>Quiz History</NavLink></NavItem>
                    <Nav.Item icon="user">Profile</Nav.Item>
                    <NavItem><NavLink to={LOG_OUT_URL}>Log Out</NavLink></NavItem>
                </nav>
                {/* </Nav> */}
            </header>
        )
    // }
}