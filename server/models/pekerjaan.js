const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Pekerjaan extends Model {}

Pekerjaan.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Pekerjaan'
});

module.exports = Pekerjaan;