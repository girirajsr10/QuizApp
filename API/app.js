const express = require('express');
const cors = require('cors');
const config = require('./config/config.js');
const quizApi = require("./express/quizApi");
const loginApi = require("./express/login");

var corsOptions = {
    origin: global.gConfig.uiUrl,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/quiz", quizApi);
app.use("/user", loginApi);
// const port = 8090;


app.get('/', (req, res) => {
    res.json(global.gConfig);
});

app.listen(global.gConfig.node_port, () => console.log("listening on port " + global.gConfig.node_port));