const express = require('express');
const router = express.Router();
const Pekerjaan = require('../models/pekerjaan');  // Adjust the path as needed

// Create a new Pekerjaan
router.post('/', async (req, res) => {
    try {
        const { nama } = req.body;
        const newPekerjaan = await Pekerjaan.create({ nama });
        res.status(201).json(newPekerjaan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Pekerjaans
router.get('/', async (req, res) => {
    try {
        const pekerjaans = await Pekerjaan.findAll();
        res.status(200).json(pekerjaans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Pekerjaan by ID
router.get('/:id', async (req, res) => {
    try {
        const pekerjaan = await Pekerjaan.findByPk(req.params.id);
        if (pekerjaan) {
            res.status(200).json(pekerjaan);
        } else {
            res.status(404).json({ error: 'Pekerjaan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Pekerjaan by ID
router.put('/:id', async (req, res) => {
    try {
        const { nama } = req.body;
        const pekerjaan = await Pekerjaan.findByPk(req.params.id);
        if (pekerjaan) {
            pekerjaan.nama = nama;
            await pekerjaan.save();
            res.status(200).json(pekerjaan);
        } else {
            res.status(404).json({ error: 'Pekerjaan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Pekerjaan by ID
router.delete('/:id', async (req, res) => {
    try {
        const pekerjaan = await Pekerjaan.findByPk(req.params.id);
        if (pekerjaan) {
            await pekerjaan.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Pekerjaan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
