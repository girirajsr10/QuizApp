var pool = require('./database');

let quizdb = {}

quizdb.allQuestions =() =>{
    return new Promise((resolve, reject) =>{
        pool.query("SELECT * FROM questions", (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
}
quizdb.quesById = (id) => {
    return new Promise((resolve, reject) =>{
        pool.query("SELECT * FROM questions WHERE questionId=?",id, (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results)
        });
    });
}
module.exports=quizdb;
// connection.end();