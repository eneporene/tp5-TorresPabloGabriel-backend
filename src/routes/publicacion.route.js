const express = require('express');
const router = express.Router();
const publicacionCtrl = require('./../../src/controllers/publicacion.controller');

router.get('/', publicacionCtrl.getPublicaciones);
router.post('/', publicacionCtrl.darDeAlta);
router.delete('/:id', publicacionCtrl.deletePublicacion);
router.put('/:id', publicacionCtrl.modificarPublicacion);
router.get('/busqueda/:titulo/:booleano', publicacionCtrl.getBusquedaCombinada);

module.exports = router;
