// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// bring in validator logic
const { registerValidation, loginValidation } = require('../validators/userValidations');
const { validationResult } = require('express-validator');

router.post('/register', registerValidation, (req, res, next) => {
  // gather validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // if there are validation errors, respond with 400
    return res.status(400).json({ errors: errors.array() });
  }
  // if no errors, continue to controller
  next();
}, registerUser);

router.post('/login', loginValidation, (req, res, next) => {
  // gather validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // if there are validation errors, respond with 400
    return res.status(400).json({ errors: errors.array() });
  }
  // if no errors, continue to controller
  next();
}, loginUser);

module.exports = router;
