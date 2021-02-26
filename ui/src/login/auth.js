import {HttpMethods} from '../services/HttpMethods';
class Auth{

    constructor(){
    }
    login(userDetails, callback){
        HttpMethods.postData('user/validateUser', userDetails, this.setAuthenticated, callback);
        // this.authenticated = true;
        // callback();
    }
    logout(callback){
        sessionStorage.setItem('access_token', undefined);
        callback();
    }
    isAuthenticated(){
        let isAuth =  sessionStorage.getItem('access_token')?true: false;
        console.log("is authenticated  = " + isAuth);
        return sessionStorage.getItem('access_token')?true: false;
    }
    setAuthenticated(status, callback, response){
        console.log(status);
        response.then(
            data => {
                console.log(data)
            if(data && data.token){
                sessionStorage.setItem('access_token', data.token);
            }
            callback(status);
        });
    }
}

export default new Auth();