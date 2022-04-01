
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dcgpucpq6uo1hc','hxurszejhsxjsy','e78dc1f82930c4d2baf9c07a38d8549b8146fe79209b4b39dda8f52632cc44f5',{
    host: 'ec2-34-207-12-160.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        "ssl": true
      },
    pool: {
        max: 9,
        min:0,
        idle:10000
    }
});

module.exports = sequelize;
