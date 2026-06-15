const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database.js'); // Asegúrate de que la ruta apunte a tu archivo
const Empleado = require('./empleado.model.js');

const Publicacion = sequelize.define('Publicacion', {
    // Sequelize crea un campo 'id' autoincrementable automáticamente, no hace falta ponerlo
    titulo: { type: DataTypes.STRING, allowNull: false },

    contenido: { type: DataTypes.STRING, allowNull: false },

    ImagenAsociada: { type: DataTypes.STRING, allowNull: false },

    fechaPublicación: { type: DataTypes.STRING, allowNull: false },

    vigente: { type: DataTypes.BOOLEAN, allowNull: false }
}, {
    tableName: 'publicaciones', // Nombre de la tabla en minúsculas y plural
    timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
});

// DEFINICIÓN DE LA RELACIÓN (Llave Foránea)
// Esto crea automáticamente la columna 'responsableId' en la tabla de sectores
Publicacion.belongsTo(Empleado, {
as: 'propietario' // Alias para cuando recuperemos los datos
});

module.exports = Publicacion;