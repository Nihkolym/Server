const express = require("express");
const DBService = require("./lib/db/services/db-service")
const bodyParser = require("body-parser");
const http = require('http');
const winston = require('winston');
const morgan = require('morgan');

const port = 8080;
const app = express();

const loggerService = require("./lib/tools/logger-service");
const userRoute = require("./lib/user/routes/user-route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api/v1/user", userRoute);

app.use(function(error, req, res, next){
    res.send(error.message);
    next();
});   

loggerService.initLoggers();
loggerService.initGlobalLoggers();

const initApp = async () => {
    try {
        await DBService.initDataBase();
        
        var server = http.createServer(app);
        
        server.listen(port, () => {
            successLog.info(`Server is listening on port ${port}`);
        });
    }

    catch(err) {
        errorLog.error(err);
    }
}

initApp();