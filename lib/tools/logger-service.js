const winston = require('winston');
const path = require('path');

var fileSize = 1024000

const Format = winston.format.printf(info => {
    return `${info.timestamp} ${info.level} ${info.message}`;
})

module.exports = class LoggerService {
    constructor() {
        this.successLog = null;
        this.errorLog = null;
    }

    static initLoggers(){
        this.successLog = this.getSuccessLogger();
        this.errorLog = this.getErrorLogger();
    }

    static initGlobalLoggers(){
        global.successLog = this.successLog;
        global.errorLog = this.errorLog;
    }

    static getErrorLogger(){
        const errLogger = new (winston.transports.File)({
            level: "error", 
            filename: path.join("logs", "common", "err.log"),
            handleExceptions: true,
            maxsize: fileSize,
            format: winston.format.combine(
                winston.format.timestamp(),
                Format
            )
        });

        const res = winston.createLogger({
            transports: [
                new (winston.transports.Console)({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        Format
                    )
                }),
                errLogger
            ],
            exceptionHandlers: [
                errLogger
            ]
        })

        return res;
    }
    
    static getSuccessLogger() {
        const successLogger = new (winston.transports.File)({
            level: "info",
            filename: path.join("logs", "common", "success.log"),
            handleExceptions: false,
            maxsize: fileSize,
            format: winston.format.combine(
                winston.format.timestamp(),
                Format
            )
        });

        const res = winston.createLogger({
            transports: [
                new (winston.transports.Console)({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.timestamp(),
                        Format
                    )
                }),
                successLogger
            ]
        })

        return res;
    }
}