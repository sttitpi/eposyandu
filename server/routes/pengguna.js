const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Pengguna = require('../models/pengguna');
const OrangTua = require('../models/orangtua');
const Wali = require('../models/wali');

const JWT_SECRET = process.env.JWT_SECRET;

// Create a new Pengguna
router.post('/', async (req, res) => {
  try {
      const {
          nama, email, kata_sandi, role, no_hp, no_kk, no_ktp, foto_kk, orangtua, wali
      } = req.body;

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(kata_sandi, 10);
      console.log(nama,
        email,
        hashedPassword,  // Store the hashed password
        role,
        no_hp,
        no_kk,
        no_ktp,
        foto_kk,
        orangtua,
        wali)
      const newUser = await Pengguna.create({
          nama,
          email,
          kata_sandi: hashedPassword,  // Store the hashed password
          role,
          no_hp,
          no_kk,
          no_ktp,
          foto_kk,
          orangtua,
          wali
      });

      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
      const { email, kata_sandi } = req.body;

      // Find the user by email
      const user = await Pengguna.findOne({ where: { email } });
      if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(kata_sandi, user.kata_sandi);
      if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

      res.json({ token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Middleware to authenticate and authorize using JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
      return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
          return res.sendStatus(403); // Forbidden
      }
      req.user = user;
      next();
  });
};

// Protect routes with JWT authentication
router.get('/', authenticateToken, async (req, res) => {
  try {
      const users = await Pengguna.findAll({
          include: [
              { model: OrangTua, as: 'orang_tua' },
              { model: Wali, as: 'wali' }
          ]
      });
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Example of role-based authorization
const authorizeRole = (role) => {
  return (req, res, next) => {
      if (req.user.role !== role) {
          return res.status(403).json({ error: 'Access denied' });
      }
      next();
  };
};

// Read a single Pengguna by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await Pengguna.findByPk(req.params.id, {
            include: [
                { model: OrangTua, as: 'orang_tua' },
                { model: Wali, as: 'wali' }
            ]
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Pengguna not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Pengguna by ID
router.put('/:id', async (req, res) => {
  try {
      const {
          nama, email, kata_sandi, role, no_hp, no_kk, no_ktp, foto_kk, orangtua, wali
      } = req.body;

      const user = await Pengguna.findByPk(req.params.id);
      if (user) {
          user.nama = nama;
          user.email = email;
          
          // If a new password is provided, hash it before saving
          if (kata_sandi) {
              user.kata_sandi = await bcrypt.hash(kata_sandi, 10);
          }
          
          user.role = role;
          user.no_hp = no_hp;
          user.no_kk = no_kk;
          user.no_ktp = no_ktp;
          user.foto_kk = foto_kk;
          user.orangtua = orangtua;
          user.wali = wali;
          await user.save();
          res.status(200).json(user);
      } else {
          res.status(404).json({ error: 'Pengguna not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Delete a Pengguna by ID
router.delete('/:id', authenticateToken, authorizeRole('admin'), async (req, res) => {
  try {
      const user = await Pengguna.findByPk(req.params.id);
      if (user) {
          await user.destroy();
          res.status(204).end();
      } else {
          res.status(404).json({ error: 'Pengguna not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;