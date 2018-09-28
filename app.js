const express = require("express");
const DBService = require("./lib/db/services/db-service")
const bodyParser = require("body-parser");

const port = 8080;
const app = express();

const userRoute = require("./lib/user/routes/user-route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/v1/user", userRoute);

app.use(function(error, req, res, next){
    res.send(error.message);
    next();
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