var pool = require('./database');

let loginUserDB = {}

loginUserDB.validateUser = (username, password) =>{
    return new Promise((resolve, reject) =>{
        pool.query("SELECT userid, role, name FROM users WHERE name = ? and password = ?", [username, password], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
}
loginUserDB.createUser = (user) =>{
    return new Promise((resolve, reject) =>{
        pool.query("INSERT INTO users (name, password, role) values (?, ?, ?)",[user.username, user.password, 'user'], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
}
loginUserDB.validateUsername = (username) =>{
    return new Promise((resolve, reject) =>{
        pool.query("SELECT name FROM users WHERE LOWER(name) =?",[username.toLowerCase()], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
}
module.exports=loginUserDB;