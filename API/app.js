const Express = require('express');
const quizApi = require("./express/quizApi");
const app = Express();

app.use(Express.json());
app.use("/quiz", quizApi);

const port = 8090;




app.listen(port, () => console.log("listening on port " + port));