const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const OrangTua = require('./orangtua');
const Wali = require('./wali');

class Pengguna extends Model {}

Pengguna.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    kata_sandi: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('admin', 'kader', 'user')
    },
    no_hp: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    no_kk: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    no_ktp: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    foto_kk: {
        type: DataTypes.STRING,
    },
    orangtua: {
        type: DataTypes.INTEGER,
        references: {
            model: OrangTua,
            key: 'id'
        }
    },
    wali: {
        type: DataTypes.INTEGER,
        references: {
            model: Wali,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Pengguna'
});

module.exports = Pengguna;
