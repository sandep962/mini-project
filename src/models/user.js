// src/routes/userRoutes.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;
