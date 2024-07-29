const express = require('express');
const router = express.Router();
const Lansia = require('../models/lansia');  // Adjust the path as needed

// Create a new Lansia
router.post('/', async (req, res) => {
    try {
        const {
            no_kk, wali, nik, nama, tempat_lahir, tanggal_lahir, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan,
            pendidikan, status_pernikahan
        } = req.body;
        const newLansia = await Lansia.create({
            no_kk, wali, nik, nama, tempat_lahir, tanggal_lahir, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan,
            pendidikan, status_pernikahan
        });
        res.status(201).json(newLansia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Lansias
router.get('/', async (req, res) => {
    try {
        const lansias = await Lansia.findAll();
        res.status(200).json(lansias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Lansia by ID
router.get('/:id', async (req, res) => {
    try {
        const lansia = await Lansia.findByPk(req.params.id);
        if (lansia) {
            res.status(200).json(lansia);
        } else {
            res.status(404).json({ error: 'Lansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Lansia by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            no_kk, wali, nik, nama, tempat_lahir, tanggal_lahir, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan,
            pendidikan, status_pernikahan
        } = req.body;
        const lansia = await Lansia.findByPk(req.params.id);
        if (lansia) {
            lansia.no_kk = no_kk;
            lansia.wali = wali;
            lansia.nik = nik;
            lansia.nama = nama;
            lansia.tempat_lahir = tempat_lahir;
            lansia.tanggal_lahir = tanggal_lahir;
            lansia.alamat_ktp = alamat_ktp;
            lansia.kelurahan_ktp = kelurahan_ktp;
            lansia.kecamatan_ktp = kecamatan_ktp;
            lansia.kota_ktp = kota_ktp;
            lansia.provinsi_ktp = provinsi_ktp;
            lansia.alamat_domisili = alamat_domisili;
            lansia.kelurahan_domisili = kelurahan_domisili;
            lansia.kecamatan_domisili = kecamatan_domisili;
            lansia.kota_domisili = kota_domisili;
            lansia.provinsi_domisili = provinsi_domisili;
            lansia.no_hp = no_hp;
            lansia.email = email;
            lansia.pekerjaan = pekerjaan;
            lansia.pendidikan = pendidikan;
            lansia.status_pernikahan = status_pernikahan;
            await lansia.save();
            res.status(200).json(lansia);
        } else {
            res.status(404).json({ error: 'Lansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Lansia by ID
router.delete('/:id', async (req, res) => {
    try {
        const lansia = await Lansia.findByPk(req.params.id);
        if (lansia) {
            await lansia.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Lansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
