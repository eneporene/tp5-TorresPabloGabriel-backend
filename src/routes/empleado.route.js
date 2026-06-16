//defino controlador para el manejo de CRUD
const empleadoCtrl = require("../controllers/empleado.controller");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', 
    /*
    #swagger.tags = ['Empleado']
    #swagger.summary = 'Obtener todos los empleados'
    */
    empleadoCtrl.getAllEmpleados);

router.post('/', 
    /*
    #swagger.tags = ['Empleado']
    #swagger.summary = 'Crear un empleado'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Empleado' }
    }
    */
    empleadoCtrl.postDarDeAltaEmpleado);

router.get('/:id', 
    /*
    #swagger.tags = ['Empleado']
    #swagger.summary = 'Obtener un empleado por ID'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    */
    empleadoCtrl.getObtenerEmpleado);


//exportamos el modulo de rutas
module.exports = router;
