const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const Pendidikan = require('./pendidikan');
const Pekerjaan = require('./pekerjaan');

class Wali extends Model {}

Wali.init({
    no_kk: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nama: {
        type: DataTypes.STRING,
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
    jenis_kelamin: {
        type: DataTypes.ENUM('l','p'),
        allowNull: false,
    },
    alamat_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kelurahan_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kecamatan_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kota_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provinsi_ktp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat_domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kelurahan_domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kecamatan_domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kota_domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provinsi_domisili: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    no_hp: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    pekerjaan: {
        type: DataTypes.INTEGER,
        references: {
            model: Pekerjaan,
            key: 'id'
        }
    },
    pendidikan: {
        type: DataTypes.INTEGER,
        references: {
            model: Pendidikan,
            key: 'id'
        }
    },
}, {
    sequelize,
    modelName: 'Wali'
});

module.exports = Wali;
