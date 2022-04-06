const express = require('express');
const medico = require('../model/Medico');
const router = express.Router();

router.post(
    '/medico/cadastrarMedico',
    (req, res)=>{
       
        
        let { 
            cod_medico, 
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeCodEspecialidade 
        } = req.body;

        medico.create(
            {
                cod_medico, 
                nome_medico,
                email_medico,
                telefone_medico,
                celular_medico,
                tblEspecialidadeCodEspecialidade
            }
        ).then(
            ()=>{
                res.send('MEDICO CADASTRADO COM SUCESSO!');
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
    '/medico/listarMedico/:cod_medico',
    (req, res)=>{

        let {cod_medico} = req.params;

        medico.findByPk(cod_medico)
        .then(
            (medico)=>{
                res.send(medico)
            }
        );        
    }
);

router.put(
    '/medico/editarMedico',
    (req, res)=>{

        let { 
            nome_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeCodEspecialidade,
            cod_medico
        } = req.body;

        medico.update(
            { 
                nome_medico,
                email_medico,
                telefone_medico,
                celular_medico,
                tblEspecialidadeCodEspecialidade},
            {where: {cod_medico}}
        ).then(
            ()=>{
                res.send('MEDICO ALTERADO COM SUCESSO');
            }
        );
    }
);

router.delete(
    '/medico/excluirMedico',
    (req, res)=>{

        let { cod_medico } = req.body;

        medico.findByPk(cod_medico)
        .then((medico)=>{
            
            medico.destroy(
                {where: {cod_medico}}
            ).then(
                ()=>{
                    res.send('MEDICO EXCLUIDO COM SUCESSO');
                }
            );

        })
    }
);

module.exports = router;