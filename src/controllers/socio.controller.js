
const Socio = require('../models/socio.model.js');
const socioCtrl = {};

// Dar de alta
socioCtrl.postDarDeAltaSocio = async (req, res) => {
    try {
    // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Socio.create(req.body);
        res.json({ status: '1', msg: 'SOCIO guardado.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// Recuperar todos
socioCtrl.getAllSocios = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los SOCIOS.' });
    }
};

// Eliminar
socioCtrl.deleteSocio = async (req, res) => {
    try {
        // .destroy() elimina el registro que coincida con el ID enviado por parámetro
        await Socio.destroy({
            where: { id: req.params.id }
        });

        //eliminacion logica
        /* await Socio.update(
            { activo: false }, 
            { where: { id: req.params.id } }
        ); */

        res.json({ status: '1', msg: 'Socio eliminado' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

//modificar
socioCtrl.modificarSocio = async (req, res) => {
    const data = req.body;
    try{
        const socios = await Socio.findByPk(req.params.id);
        if(socios){
            if(data.responsable && data.responsable.id){
                data.responsableId = data.responsable.id;
            }
            await socios.update(data);
            res.status(200).json({status:'1', msg: 'Socio actualizado'});
        } else{
            res.status(404).json({status:'0', msg: 'Socio no encontrado'});
        }
    }
    catch(error){
        res.status(500).json({message: 'Error al actualiza socio', error: error.message});
    }
}

//Recuperar solo socios activos
socioCtrl.getSociosActivos = async (req, res) => {
    try {
        const socios = await Socio.findAll({
            where: {
                activo: true
            }
        });
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los SOCIOS.' });
    }
};

module.exports = socioCtrl;