const Express = require('express');
const loginUserDB = require('../dao/login');
const loginHelper = require('../helperService/loginHelper');

const express = Express.Router();

express.post("/", async (req, res, next) => {
    try{
        console.log(req.body);
        let userDetails = {
            username: req.body.username,
            password: loginHelper.generatePasswordHash(req.body.password)
        }
        let results = await loginUserDB.createUser(userDetails);
        res.json({"userid": results.insertId});
    }catch (e){
        console.log(e);
        res.sendStatus(500);
    }
})

express.post("/validateUser", async (req, res, next) => {
    try{
        console.log(req.body);
        if(req.body.username &&  req.body.password ){
            let password = loginHelper.generatePasswordHash(req.body.password);
            let results = await loginUserDB.validateUser(req.body.username, password);
            if(results.length > 0){
                console.log(loginHelper.generateJWTToken(results));
                res.json({"valid user": results});
            }else{
                res.status(401).send({message: "Unauthorized user"});
            }

        }else{
            throw ("Error Username and password is required");
        }
    }catch (e){
        console.log(e);
        res.status(500).send({"message": e});
    }
})

express.get("/validUsername/:username", async (req, res, next) => {
    try{
        let results = await loginUserDB.validateUsername(req.params.username);
        let validUsername = true;
        if(results.length > 0){
            validUsername = false;
        }
        res.json({"isValid": validUsername});
    }catch (e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports=express;