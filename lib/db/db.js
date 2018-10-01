const Sequelize = require('sequelize');
const config = require('../../config/database')

const devConfig = config.development;

module.exports = new Sequelize(devConfig.database, devConfig.username, devConfig.password, {
    host: 'localhost', 
    dialect: devConfig.dialect,
    
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
