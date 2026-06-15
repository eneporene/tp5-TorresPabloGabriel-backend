//defino controlador para el manejo de CRUD
const transaccionCtrl = require("../controllers/transaccion.controller.js");

//creamos el manejador de rutas
const express = require("express");
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', transaccionCtrl.getAllTransacciones);
router.post("/", transaccionCtrl.postAltaTransaccion);
router.get("/cliente/:email", transaccionCtrl.getTransaccionesUnCliente);
router.get("/idioma/:origen/:destino", transaccionCtrl.getTransaccionesOrigenDestino);
/* router.delete("/:id", transaccionCtrl.);
router.put("/:id", transaccionCtrl.);
router.get('/activos', transaccionCtrl.); */


//exportamos el modulo de rutas
module.exports = router;