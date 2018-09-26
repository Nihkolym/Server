const express = require("express");
const DBService = require("./lib/db/services/db-service")
const bodyParser = require("body-parser");

const port = 8080;
const app = express();

const userRoute = require("./lib/user/routes/user-route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/v1/user", userRoute);

app.use(function(error, req, res, next){
    res.status(404).send("404");;
});   



const initApp = async () => {
    try {
        await DBService.initDataBase();
        
        app.listen(port);
    }

    catch(err) {
        console.log(err);
    }
}

initApp();