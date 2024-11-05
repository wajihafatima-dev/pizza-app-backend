// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser,getAllUsers } = require('../controllers/userController');
const router = express.Router();

// Register route
router.post('/register', registerUser);
router.get("/",getAllUsers)
// Login route
router.post('/login', loginUser);

module.exports = router;
