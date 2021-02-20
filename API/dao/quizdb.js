const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'quizdb'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

exports.insertQuestion = async() => {
    const question = { content: 'Q1: test question', location: '\\assessts\\Geography\\Set2\\Q1.JPG', answer: 'd', subject: 'Geography' };
    connection.query('INSERT INTO questions SET ?', question, (err, res) => {
        if (err) throw err;

        console.log('Last insert ID:', res.insertId);
    });
}

exports.getQuestions = async() => {
    await connection.query('SELECT * FROM questions', (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.log(rows);
        return rows;
    });
}

// connection.end();