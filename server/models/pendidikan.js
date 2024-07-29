// models/user.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Pendidikan extends Model {}

Pendidikan.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Pendidikan'
});

module.exports = Pendidikan;