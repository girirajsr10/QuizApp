import React from 'react';
import { LOG_IN_URL } from '../common/constants';
import auth from '../login/auth';


const Logout = (props) =>{
    const logOut = () =>{
        auth.logout(logOutRedirect);
    }
    const logOutRedirect =() =>{
        props.history.push(LOG_IN_URL);
    }
    return (
        <div>
            {logOut()}
        </div>
    )
}

export default Logout;