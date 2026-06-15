
const Empleado = require('../models/empleado.model');
const empleadoCtrl = {};

// Dar de alta
empleadoCtrl.postDarDeAltaEmpleado = async (req, res) => {
    try {
    // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Empleado.create(req.body);
        res.json({ status: '1', msg: 'EMPLEADO dado de alta.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// Recuperar todos
empleadoCtrl.getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los EMPLEADOS.' });
    }
};

//Recuperar solo socios activos
empleadoCtrl.getObtenerEmpleado = async (req, res) => {
    try {
        const empleados = await Empleado.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener empleado.' });
    }
};

module.exports = empleadoCtrl;