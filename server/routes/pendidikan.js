const express = require('express');
const router = express.Router();
const Pendidikan = require('../models/pendidikan');  // Adjust the path as needed

// Create a new Pendidikan
router.post('/', async (req, res) => {
    try {
        const { nama } = req.body;
        const newPendidikan = await Pendidikan.create({ nama });
        res.status(201).json(newPendidikan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Pendidikans
router.get('/', async (req, res) => {
    try {
        const pendidikans = await Pendidikan.findAll();
        res.status(200).json(pendidikans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Pendidikan by ID
router.get('/:id', async (req, res) => {
    try {
        const pendidikan = await Pendidikan.findByPk(req.params.id);
        if (pendidikan) {
            res.status(200).json(pendidikan);
        } else {
            res.status(404).json({ error: 'Pendidikan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Pendidikan by ID
router.put('/:id', async (req, res) => {
    try {
        const { nama } = req.body;
        const pendidikan = await Pendidikan.findByPk(req.params.id);
        if (pendidikan) {
            pendidikan.nama = nama;
            await pendidikan.save();
            res.status(200).json(pendidikan);
        } else {
            res.status(404).json({ error: 'Pendidikan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Pendidikan by ID
router.delete('/:id', async (req, res) => {
    try {
        const pendidikan = await Pendidikan.findByPk(req.params.id);
        if (pendidikan) {
            await pendidikan.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Pendidikan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
