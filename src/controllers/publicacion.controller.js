const { response } = require('express');
const { Op } = require('sequelize');
const Publicacion = require('../models/publicacion.model');
const Empleado = require('../models/empleado.model');
const publicacionCtrl = {};

//Obtener todas
publicacionCtrl.getPublicaciones = async(req, res) => {
    try{
        const publicaciones = await Publicacion.findAll({
            include:[{
                model: Empleado,
                as: 'propietario'
            }]
        });
        res.json(publicaciones);
    }catch(error){
        res.status(500).json({message: 'Error al obtener PUBLICACIONES', error: error.message});
    }
}

//dar de alta Publicacion
publicacionCtrl.darDeAlta = async(req, res) => {
    try{
        const data = req.body;

        if(data.propietario && data.propietario.id){
            data.propietarioId = data.propietario.id; // asignar el ID del responsable al compo corre
        }

        await Publicacion.create(data);

        res.status(200).json({status: '1', msg: 'PUBLICACION guardada'});
    }catch(error){
        res.status(500).json({message: 'Error al obtener PUBLICACIONES', error: error.message});
    }
}

//DELETE PUBLICACION
publicacionCtrl.deletePublicacion = async (req, res) => {
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(publicacion){
            await publicacion.destroy();
            res.status(200).json({status:'1',msg: 'Publicacion eliminada'});
        }else{
            res.status(404).json({status: '0', msg: 'Publicacion no encontrada.'});
        }
    }catch(error){
        res.status(500).json({message: 'Error al eliminar Publicacion', error: error.message});
    }
}

publicacionCtrl.modificarPublicacion = async (req, res) => {
    const data = req.body;
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(publicacion){
            if(data.propietario && data.propietario.id){
                data.propietarioId = data.propietario.id;
            }
            await publicacion.update(data);
            res.status(200).json({status:'1', msg: 'Publicacion actualizada'});
        } else{
            res.status(404).json({status:'0', msg: 'Publicacion no encontrada'});
        }
    }
    catch(error){
        res.status(500).json({message: 'Error al actualizar Publicacion', error: error.message});
    }
}

//Recuperar con TITULO Y VIGENCIA
publicacionCtrl.getBusquedaCombinada = async(req, res) => {
    try{
        const publicaciones = await Publicacion.findAll({
            where:{
                titulo:{
                    [Op.like]: `%${req.params.titulo}%`
                },
                vigente: req.params.booleano
            },
            include:[{
                model: Empleado,
                as: 'propietario'
            }]
        });
        res.json(publicaciones);
    }catch(error){
        res.status(500).json({message: 'Error al obtener PUBLICACION COMBINADA', error: error.message});
    }
}

module.exports = publicacionCtrl;