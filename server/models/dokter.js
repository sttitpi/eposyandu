const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Dokter extends Model {}

Dokter.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Dokter'
});

module.exports = Dokter;