const express = require('express');
const config = require('./config/config.js');
const quizApi = require("./express/quizApi");
const loginApi = require("./express/login");

const app = express();
app.use(express.json());
app.use("/quiz", quizApi);
app.use("/user", loginApi);
// const port = 8090;


app.get('/', (req, res) => {
    res.json(global.gConfig);
});

app.listen(global.gConfig.node_port, () => console.log("listening on port " + global.gConfig.node_port));