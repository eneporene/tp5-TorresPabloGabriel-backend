const Transaccion = require('../models/transaccion.model.js');
const transaccionCtrl = {};

// Dar de alta
transaccionCtrl.postAltaTransaccion = async (req, res) => {
    try {
    // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Transaccion.create(req.body);
        res.json({ status: '1', msg: 'Transaccion Guardada.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// Recuperar todos
transaccionCtrl.getAllTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener TODAS las transacciones.' });
    }
};


//Recuperar el histórico por el email
transaccionCtrl.getTransaccionesUnCliente = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: {
                emailCliente: req.params.email
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las TRANSACCIONES.' });
    }
};

//Recuperar el histórico por Origen y Destino como parametro
transaccionCtrl.getTransaccionesOrigenDestino = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: {
                idiomaOrigen: req.params.origen,
                idiomaDestino: req.params.destino
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las TRANSACCIONES.' });
    }
};


module.exports = transaccionCtrl;