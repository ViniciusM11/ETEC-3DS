const express = require('express');
const especialidade = require('../model/Especialidade');
const router = express.Router();

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        let { cod_especialidade, nome_especialidade } = req.body;

        especialidade.create(
                {cod_especialidade,
                nome_especialidade}
        ).then(
            ()=>{
                res.send('ESPECIALIDADE INSERIDA COM SUCESSO!');
            }
        );
    }
);

router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        especialidade.findAll()
            .then(
                (especialidade)=>{
                    res.send(especialidade);
            }
        );
    }
);

router.get(
    '/especialidade/listarEspecialidade/:cod_especialidade',
    (req, res)=>{

        let {cod_especialidade} = req.params;

        especialidade.findByPk(cod_especialidade)
        .then(
            (especialidade)=>{
                res.send(especialidade)
            }
        );        
    }
);

router.put(
    '/especialidade/alterarEspecialidade',
    (req, res)=>{

        let {cod_especialidade, nome_especialidade} = req.body;

        especialidade.update(
            {nome_especialidade},
            {where: {cod_especialidade}}
        ).then(
            ()=>{
                res.send('ESPECIALIDADE ALTERADA COM SUCESSO');
            }
        );
    }
);

router.delete(
    '/especialidade/excluirEspecialidade',
    (req, res)=>{

        let {cod_especialidade} = req.body;

        especialidade.destroy(
            {where: {cod_especialidade}}
        ).then(
            ()=>{
                res.send('ESPECIALIDADE EXCLUIDA COM SUCESSO');
            }
        );
    }
);

module.exports = router;