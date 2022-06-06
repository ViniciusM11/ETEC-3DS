/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

const Especialidade = connection.define(
    'tbl_especialidades',
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome_especialidade:{
           type: Sequelize.STRING,
           allowNull: false
        }
    }
);

/*Executar a criação da tabela no Banco de Dados*/
// Especialidade.sync({force:true});

module.exports = Especialidade;