const express = require('express');
const router = express.Router(); // Make sure this line is present and correct
const User = require('../models/user'); // Assuming the User model is correctly defined

// Registration route
router.post('/', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router; // Ensure you're exporting the router at the end of the file
