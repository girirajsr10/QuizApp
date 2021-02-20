const Express = require('express');
const quizApi = require("./express/quizApi");
const app = Express();

app.use("/quiz", quizApi);

const port = 3000;




app.listen(port, () => console.log("listening on port " + port));