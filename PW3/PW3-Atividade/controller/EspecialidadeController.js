const express = require('express');
const especialidade = require('../model/Especialidade');
const router = express.Router();

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        let { id, nome_especialidade } = req.body;

        especialidade.create(
                {id,
                nome_especialidade}
        ).then(
            ()=>{
                res.redirect('http://localhost:3001/listagemEspecialidade');
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
    '/especialidade/listarEspecialidade/:id',
    (req, res)=>{

        let {id} = req.params;

        especialidade.findByPk(id)
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

        let {id, nome_especialidade} = req.body;

        especialidade.update(
            {nome_especialidade},
            {where: {id}}
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

        let {id} = req.body;

        especialidade.destroy(
            {where: {id}}
        ).then(
            ()=>{
                res.send('ESPECIALIDADE EXCLUIDA COM SUCESSO');
            }
        );
    }
);

module.exports = router;