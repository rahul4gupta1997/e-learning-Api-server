const Sequelize = require('sequelize');
const sequelize = require('../controller/database.js')

const signup =  sequelize.define('user',{
        id: {
            autoIncrement:true,
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
 module.exports = signup;