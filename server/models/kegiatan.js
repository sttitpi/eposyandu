const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Kegiatan extends Model {}

Kegiatan.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jenis: {
        type: DataTypes.ENUM('balita','lansia'),
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'Kegiatan'
});

module.exports = Kegiatan;