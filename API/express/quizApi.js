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


express.get("/question", (req, res) => {
    // req.query
    // req.params
    res.send("Hello world");
    fetchQuestions();
})

module.exports = express;