const express = require('express');
const router = express.Router();
const ModelPengguna = require('../models/pengguna');

router.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "strawberry", "pineapple"] });
  });

module.exports = router;