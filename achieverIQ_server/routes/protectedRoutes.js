// routes/protectedRoutes.js

const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.get('/profile', protect, (req, res) => {
  // 'protect' middleware sets req.user if token is valid
  res.json({ message: `Hello, your user ID is ${req.user.id} and role is ${req.user.role}` });
});

module.exports = router;
