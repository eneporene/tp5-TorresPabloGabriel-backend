//defino controlador para el manejo de CRUD
const transaccionCtrl = require("../controllers/transaccion.controller.js");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', 
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Obtener todas las transacciones'
    */
    transaccionCtrl.getAllTransacciones);

router.post("/", 
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Registrar una nueva transacción'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Transaccion' }
    }
    */
    transaccionCtrl.postAltaTransaccion);

router.get("/cliente/:emailCliente", 
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Obtener historial de transacciones de un cliente'
    #swagger.parameters['emailCliente'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    */
    transaccionCtrl.getTransaccionesUnCliente);

router.get("/idioma/:origen/:destino", 
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Buscar transacciones por idiomas'
    #swagger.parameters['origen'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    #swagger.parameters['destino'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    */
    transaccionCtrl.getTransaccionesOrigenDestino);

//exportamos el modulo de rutas
module.exports = router;