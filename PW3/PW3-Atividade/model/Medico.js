/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');
const Especialidade = require('./Especialidade');

const Medico = connection.define(
    'tbl_medico',
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome_medico:{
           type: Sequelize.STRING,
           allowNull: false
        },

        email_medico: {
            type: Sequelize.STRING,
            allowNull: false
        },

        telefone_medico: {
            type: Sequelize.STRING,
            allowNull: false
        },

        celular_medico: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

Especialidade.hasMany(Medico);

Medico.belongsTo(Especialidade);

/*Executar a criação da tabela no Banco de Dados*/
// Medico.sync({force:true});

module.exports = Medico;