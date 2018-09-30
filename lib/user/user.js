const Sequalize = require('sequelize');
const db = require('../db/db')

const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequalize.INTEGER
    },
    firstname: {
        type: Sequalize.STRING
    },
    lastname: {
        type: Sequalize.STRING
    },
    address: {
        type: Sequalize.STRING
    },
    phone: {
        type: Sequalize.STRING
    }
}, {timestamps: false});

module.exports = User;