//defino controlador para el manejo de CRUD
const socioCtrl = require("../controllers/socio.controller.js");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', socioCtrl.getAllSocios);
router.post("/", socioCtrl.postDarDeAltaSocio);
router.delete("/:id", socioCtrl.deleteSocio);
router.put("/:id", socioCtrl.modificarSocio);
router.get('/activos', socioCtrl.getSociosActivos);


//exportamos el modulo de rutas
module.exports = router;
