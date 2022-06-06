const express = require('express');
const medico = require('../model/Medico');
const router = express.Router();

router.post(
    '/medico/cadastrarMedico',
    (req, res)=>{
       
        
        let { 
            id, 
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeId 
        } = req.body;

        medico.create(
            {
                id, 
                nome_medico,
                email_medico,
                telefone_medico,
                celular_medico,
                tblEspecialidadeId
            }
        ).then(
            ()=>{
                res.redirect('http://localhost:3001/listagemMedico');
            }
        );
    }
);

router.get(
    '/medico/listarMedico',
    (req, res)=>{
        medico.findAll()
            .then(
                (medico)=>{
                    res.send(medico);
            }
        );
    }
);

router.get(
    '/medico/listarMedico/:id',
    (req, res)=>{

        let {id} = req.params;

        medico.findByPk(id)
        .then(
            (medico)=>{
                res.send(medico)
            }
        );        
    }
);

router.post(
    '/medico/editarMedico',
    (req, res)=>{

        let { 
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeId,
            id
        } = req.body;

        medico.update(
            { 
                nome_medico,
                email_medico,
                telefone_medico,
                celular_medico,
                tblEspecialidadeId},
            {where: {id}}
        ).then(
            ()=>{
                res.redirect('http://localhost:3001/listagemMedico');
            }
        );
    }
);

router.delete('/excluirMedico/:id', (req, res) => {
    const {id} = req.params;
    medico.destroy(
        {where: {id}
    })
    .then(
        ()=>{
            res.redirect('http://localhost:3001/listagemMedico');
        });
});

module.exports = router;