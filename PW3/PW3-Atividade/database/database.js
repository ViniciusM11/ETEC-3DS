const Sequelize = require('sequelize');

const connection = new Sequelize(
    'atividade_pw3',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;