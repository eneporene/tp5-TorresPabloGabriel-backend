//defino controlador para el manejo de CRUD
const empleadoCtrl = require("../controllers/empleado.controller");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', empleadoCtrl.getAllEmpleados);
router.post('/', empleadoCtrl.postDarDeAltaEmpleado);
router.get('/:id', empleadoCtrl.getObtenerEmpleado);


//exportamos el modulo de rutas
module.exports = router;
