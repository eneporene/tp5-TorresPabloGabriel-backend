const express = require('express');
const router = express.Router();
const publicacionCtrl = require('./../../src/controllers/publicacion.controller');

router.get('/', 
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Obtener todas las publicaciones'
    */
    publicacionCtrl.getPublicaciones);

router.post('/', 
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Crear una publicación'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Publicacion' }
    }
    */
    publicacionCtrl.darDeAlta);

router.delete('/:id', 
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Eliminar una publicación'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    */
    publicacionCtrl.deletePublicacion);

router.put('/:id', 
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Modificar una publicación'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Publicacion' }
    }
    */
    publicacionCtrl.modificarPublicacion);

router.get('/busqueda/:titulo/:vigente', 
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Buscar publicaciones por título y vigencia'
    #swagger.parameters['titulo'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    #swagger.parameters['vigente'] = {
        in: 'path',
        required: true,
        type: 'boolean'
    }
   */
    publicacionCtrl.getBusquedaCombinada);

module.exports = router;
