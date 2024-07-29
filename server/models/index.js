const sequelize = require('../db.config');
const Balita = require('./balita');
const Dokter = require('./dokter');
const Lansia = require('./lansia');
const OrangTua = require('./orangtua');
const Pekerjaan = require('./pekerjaan');
const PemeriksaanLansia = require('./pemeriksaan_lansia');
const Pendidikan = require('./pendidikan');
const Pengguna = require('./pengguna');
const PerkembanganBalita = require('./perkembangan_balita');
const Wali = require('./wali');

OrangTua.hasMany(Balita, { foreignKey: 'id_orangtua' });
Balita.belongsTo(OrangTua, { foreignKey: 'id_orangtua' });
Wali.hasMany(Lansia, { foreignKey: 'wali' });
Lansia.belongsTo(Wali, { foreignKey: 'wali' });
Pekerjaan.hasOne(Lansia, { foreignKey: 'pekerjaan' });
Lansia.belongsTo(Pekerjaan, { foreignKey: 'pekerjaan' });
Pendidikan.hasOne(Lansia, { foreignKey: 'pendidikan' });
Lansia.belongsTo(Pendidikan, { foreignKey: 'pendidikan' });
Pekerjaan.hasMany(OrangTua, { foreignKey: 'pekerjaan_ibu', as: 'pekerjaanIbu' });
Pekerjaan.hasMany(OrangTua, { foreignKey: 'pekerjaan_ayah', as: 'pekerjaanAyah' });
OrangTua.belongsTo(Pekerjaan, { foreignKey: 'pekerjaan_ibu', as: 'pekerjaanIbu' });
OrangTua.belongsTo(Pekerjaan, { foreignKey: 'pekerjaan_ayah', as: 'pekerjaanAyah' });
Pendidikan.hasMany(OrangTua, { foreignKey: 'pendidikan_ibu', as: 'pendidikanIbu' });
Pendidikan.hasMany(OrangTua, { foreignKey: 'pendidikan_ayah', as: 'pendidikanAyah' });
OrangTua.belongsTo(Pendidikan, { foreignKey: 'pendidikan_ibu', as: 'pendidikanIbu' });
OrangTua.belongsTo(Pendidikan, { foreignKey: 'pendidikan_ayah', as: 'pendidikanAyah' });
Lansia.hasMany(PemeriksaanLansia, { foreignKey: 'lansia' });
PemeriksaanLansia.belongsTo(Lansia, { foreignKey: 'lansia' });
Pengguna.hasMany(PemeriksaanLansia, { foreignKey: 'kader' });
PemeriksaanLansia.belongsTo(Pengguna, { foreignKey: 'kader' });
Dokter.hasMany(PemeriksaanLansia, { foreignKey: 'dokter' });
PemeriksaanLansia.belongsTo(Dokter, { foreignKey: 'dokter' });
OrangTua.hasMany(Pengguna, { foreignKey: 'orangtua' });
Pengguna.belongsTo(OrangTua, { foreignKey: 'orangtua' });
Wali.hasMany(Pengguna, { foreignKey: 'wali' });
Pengguna.belongsTo(Wali, { foreignKey: 'wali' });
Balita.hasMany(PerkembanganBalita, { foreignKey: 'balita' });
PerkembanganBalita.belongsTo(Balita, { foreignKey: 'balita' });
Pengguna.hasMany(PerkembanganBalita, { foreignKey: 'kader' });
PerkembanganBalita.belongsTo(Pengguna, { foreignKey: 'kader' });
Dokter.hasMany(PerkembanganBalita, { foreignKey: 'dokter' });
PerkembanganBalita.belongsTo(Dokter, { foreignKey: 'dokter' });
Pekerjaan.hasMany(Wali, { foreignKey: 'pekerjaan' });
Wali.belongsTo(Pekerjaan, { foreignKey: 'pekerjaan' });
Pendidikan.hasMany(Wali, { foreignKey: 'pendidikan' });
Wali.belongsTo(Pendidikan, { foreignKey: 'pendidikan' });

module.exports = {
    Balita,
    Dokter,
    Lansia,
    OrangTua,
    Pekerjaan,
    PemeriksaanLansia,
    Pendidikan,
    Pengguna,
    PerkembanganBalita,
    Wali,
    sequelize
};