
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres','postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 9,
        min:0,
        idle:10000
    }
});

module.exports = sequelize;
