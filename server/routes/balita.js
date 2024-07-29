const express = require('express');
const router = express.Router();
const Balita = require('../models/balita');  // Adjust the path as needed

// Create a new Balita
router.post('/', async (req, res) => {
    try {
        const {
            nama, orangtua, nik, jenis_kelamin, tempat_lahir, tanggal_lahir,
            berat_badan_awal, tinggi_badan_awal, riwayat_penyakit, riwayat_kelahiran, keterangan
        } = req.body;
        const newBalita = await Balita.create({
            nama, orangtua, nik, jenis_kelamin, tempat_lahir, tanggal_lahir,
            berat_badan_awal, tinggi_badan_awal, riwayat_penyakit, riwayat_kelahiran, keterangan
        });
        res.status(201).json(newBalita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Balitas
router.get('/', async (req, res) => {
    try {
        const balitas = await Balita.findAll();
        res.status(200).json(balitas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Balita by ID
router.get('/:id', async (req, res) => {
    try {
        const balita = await Balita.findByPk(req.params.id);
        if (balita) {
            res.status(200).json(balita);
        } else {
            res.status(404).json({ error: 'Balita not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Balita by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            nama, orangtua, nik, jenis_kelamin, tempat_lahir, tanggal_lahir,
            berat_badan_awal, tinggi_badan_awal, riwayat_penyakit, riwayat_kelahiran, keterangan
        } = req.body;
        const balita = await Balita.findByPk(req.params.id);
        if (balita) {
            balita.nama = nama;
            balita.orangtua = orangtua;
            balita.nik = nik;
            balita.jenis_kelamin = jenis_kelamin;
            balita.tempat_lahir = tempat_lahir;
            balita.tanggal_lahir = tanggal_lahir;
            balita.berat_badan_awal = berat_badan_awal;
            balita.tinggi_badan_awal = tinggi_badan_awal;
            balita.riwayat_penyakit = riwayat_penyakit;
            balita.riwayat_kelahiran = riwayat_kelahiran;
            balita.keterangan = keterangan;
            await balita.save();
            res.status(200).json(balita);
        } else {
            res.status(404).json({ error: 'Balita not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Balita by ID
router.delete('/:id', async (req, res) => {
    try {
        const balita = await Balita.findByPk(req.params.id);
        if (balita) {
            await balita.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Balita not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
