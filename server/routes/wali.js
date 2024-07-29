const express = require('express');
const router = express.Router();
const Wali = require('../models/wali');  // Adjust the path as needed

// Create a new Wali
router.post('/', async (req, res) => {
    try {
        const {
            no_kk, nik, nama, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan, pendidikan
        } = req.body;
        const newWali = await Wali.create({
            no_kk, nik, nama, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan, pendidikan
        });
        res.status(201).json(newWali);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Walis
router.get('/', async (req, res) => {
    try {
        const walis = await Wali.findAll();
        res.status(200).json(walis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Wali by ID
router.get('/:id', async (req, res) => {
    try {
        const wali = await Wali.findByPk(req.params.id);
        if (wali) {
            res.status(200).json(wali);
        } else {
            res.status(404).json({ error: 'Wali not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Wali by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            no_kk, nik, nama, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat_ktp, kelurahan_ktp,
            kecamatan_ktp, kota_ktp, provinsi_ktp, alamat_domisili, kelurahan_domisili,
            kecamatan_domisili, kota_domisili, provinsi_domisili, no_hp, email, pekerjaan, pendidikan
        } = req.body;
        const wali = await Wali.findByPk(req.params.id);
        if (wali) {
            wali.no_kk = no_kk;
            wali.nik = nik;
            wali.nama = nama;
            wali.tempat_lahir = tempat_lahir;
            wali.tanggal_lahir = tanggal_lahir;
            wali.jenis_kelamin = jenis_kelamin;
            wali.alamat_ktp = alamat_ktp;
            wali.kelurahan_ktp = kelurahan_ktp;
            wali.kecamatan_ktp = kecamatan_ktp;
            wali.kota_ktp = kota_ktp;
            wali.provinsi_ktp = provinsi_ktp;
            wali.alamat_domisili = alamat_domisili;
            wali.kelurahan_domisili = kelurahan_domisili;
            wali.kecamatan_domisili = kecamatan_domisili;
            wali.kota_domisili = kota_domisili;
            wali.provinsi_domisili = provinsi_domisili;
            wali.no_hp = no_hp;
            wali.email = email;
            wali.pekerjaan = pekerjaan;
            wali.pendidikan = pendidikan;
            await wali.save();
            res.status(200).json(wali);
        } else {
            res.status(404).json({ error: 'Wali not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Wali by ID
router.delete('/:id', async (req, res) => {
    try {
        const wali = await Wali.findByPk(req.params.id);
        if (wali) {
            await wali.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Wali not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
