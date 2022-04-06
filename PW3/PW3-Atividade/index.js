/* Importação do pacote express */
const express = require('express');

/*Instancia executavel do express */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Importação da conexão com o banco de dados*/
const connection = require('./database/database');

/*Importação das models*/
const Especialidade = require('./model/Especialidade');
const Medico = require('./model/Medico');

/*Importação das rotas*/
const EspecialidadeController = require('./controller/EspecialidadeController');
app.use('/', EspecialidadeController);

const MedicoController = require('./controller/MedicoController');
app.use('/', MedicoController);

/*Servidor de requisições da aplicação */
app.listen(3000, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://Localhost3000');
}); 