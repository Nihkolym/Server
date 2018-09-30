const db = require('../db');

const ControlService = require('./control-service');

module.exports = class DBService{
    static async initDataBase(){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
            await db.sync();

            await ControlService.runMigration();
            await ControlService.runSeeders();
        }

        catch(err) {
            console.log(err);
        }
    }
}