import * as Config from '../config/config.json';
const env = process.env.NODE_ENV.trim();
console.log(env);
console.log(Config['default'][env]);
const rootUrl = Config['default'][env].api_url;

export const HttpMethods = {};
HttpMethods.getData = (url, callback) =>{

    fetch(rootUrl+url).then((res) =>{
        console.log(res);
    });
}

HttpMethods.postData = (url, data, callback, innerCallback) =>{
    let body ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    fetch(rootUrl+url, body)
    .then((res) => {console.log(res.headers);
        console.log(res.headers.keys);
        if(res.ok){
            callback(true, innerCallback, res.json());
            // return res.json()
        }else{
            const error = (data && data.message) || res.status;
            return Promise.reject(error);
        }
    })
    // .then((res) =>{
    //     console.log(res);
        
    //     if (res["valid user"] && res["valid user"].length > 0 ) {
    //         callback(true, innerCallback, context);
    //     }else{
    //         const error = (data && data.message) || res.status;
    //         return Promise.reject(error);
    //     }
    // })
    .catch(error => {
        // this.setState({ errorMessage: error.toString() });
        callback(false, innerCallback);
        console.error('There was an error!', error);
    });
}