const util = require("util");
const child_process = require("child_process");
const execP = util.promisify(child_process.exec);


module.exports = class ControlService{
    static async runMigration(){
        execP("npm run migrations");
    }

    static async runSeeders(){
        execP("npm run seeders");
    }
}