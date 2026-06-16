//defino controlador para el manejo de CRUD
const socioCtrl = require("../controllers/socio.controller.js");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente

router.get('/', 
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Obtener todos los socios'
    */
    socioCtrl.getAllSocios);

router.post("/", 
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Crear un nuevo socio'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Socio' }
    }
    */
    socioCtrl.postDarDeAltaSocio);

router.delete("/:id", 
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Eliminar un socio'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    */
    socioCtrl.deleteSocio);

router.put("/:id", 
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Modificar un socio'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Socio' }
    }
    */
    socioCtrl.modificarSocio);

router.get('/activos', 
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Obtener socios activos'
    */
    socioCtrl.getSociosActivos);


//exportamos el modulo de rutas
module.exports = router;
