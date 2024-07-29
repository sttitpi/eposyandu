const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const OrangTua = require('./orangtua');

class Balita extends Model {}

Balita.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    orangtua: {
        type: DataTypes.INTEGER,
        references: {
            model: OrangTua,
            key: 'id'
        }
    },
    nik: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('l','p'),
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    berat_badan_awal: {
        type: DataTypes.INTEGER
    },
    tinggi_badan_awal: {
        type: DataTypes.INTEGER
    },
    riwayat_penyakit: {
        type: DataTypes.STRING
    },
    riwayat_kelahiran: {
        type: DataTypes.STRING
    },
    keterangan: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Balita'
});

module.exports = Balita;