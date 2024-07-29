const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const Wali = require('./wali');
const Pekerjaan = require('./pekerjaan');
const Pendidikan = require('./pendidikan');

class Lansia extends Model {}

Lansia.init({
    no_kk: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    wali: {
        type: DataTypes.INTEGER,
        references: {
            model: Wali,
            key: 'id'
        }
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
    status_pernikahan: {
        type: DataTypes.ENUM('Menikah','Duda','Janda','Tidak Menikah'),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Lansia'
});

module.exports = Lansia;