const db = require('../db');

const MigrationService = require('./migration-service');

module.exports = class DBService{
    static async initDataBase(){
        try {
            await db.authenticate();
            successLog.info('Connection has been established successfully.');
            await db.sync();

            await MigrationService.runMigration();
            await MigrationService.runSeeders();
        }

        catch(err) {
            console.log(err);
        }
    }
}