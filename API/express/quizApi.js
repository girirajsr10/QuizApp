// import Express from 'express';
const Express = require('express');


const express = Express.Router();

const quizDb = require('../dao/quizdb');

// quizDb.insertQuestion();
fetchQuestions = () => {
    let rows = []
    quizDb.getQuestions().then((res) => {
        rows = res;
        console.log("fetch Questions")
        console.log(rows);
        return rows;
    });

}


express.get("/question", async (req, res, next) => {
    try{
        let results = await quizDb.allQuestions();
        res.json(results);
    }catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});

express.get("/question/:id", async (req, res, next) => {
    try{
        let results = await quizDb.quesById(req.params.id);
        res.json(results);
    }catch (e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = express;