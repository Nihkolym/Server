const joi = require('joi');
const Requests = require('../db/request-enum');

module.exports = class CheckParamsMiddleware {
    static getCollectionName(req) {
        switch(req.method) {
            case Requests.GET.name:
                return 'query';
            case Requests.POST.name:
            case Requests.PUT.name:
            case Requests.DELETE.name:
                return 'body'
        }
    }

    static validateParamsJoi(schema) {
        return (req, res, next) => {
            let collectionName = CheckParamsMiddleware.getCollectionName(req);
            let result = joi.validate(req[collectionName], schema);

            if(!result.error){
                next();
            }
            else {
                errorLog.error(result.error.message);
                res.status(400).send(result.error);
            }
        }
    }

    static validateParamsSequelize(entity) {
        return async (req, res, next) => {
            let collectionName = CheckParamsMiddleware.getCollectionName(req);
            let model = entity.build(req[collectionName]);

            try {
                await model.validate;
                next();
            }
            catch (err){
                errorLog.error(result.error.message);
                res.status(400).send(err);
            }
        }
    }
}