import {HttpMethods} from '../services/HttpMethods';

const RegistrationService = {};

RegistrationService.registerUser = (userDetails, callback) =>{

    HttpMethods.postData('user/', userDetails, RegistrationService.registerCallback, callback);
}
RegistrationService.registerCallback = (status, callback, response) =>{

    response.then(data =>{
        if(data)
            callback(status);
    })
}

export default RegistrationService;