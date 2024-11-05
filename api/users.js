const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../server/controllers/userController');

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get All Users
router.get('/', getAllUsers);

module.exports = router;
