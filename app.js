const express = require('express');
const authenticationHandler = require("./Middlewares/authentication");
const logHandler = require("./Middlewares/logger");
const bears = require("./routes/bears");
const home = require("./routes/home");
const app = express();

app.use(express.json());//parse jSON objects in req
app.use(logHandler);
app.use(authenticationHandler);
app.use('/',home);
app.use('/api/bears',bears);



app.listen(3000, () =>{
    console.log("Listening on Port 3000")
});


