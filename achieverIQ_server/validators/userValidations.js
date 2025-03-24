// validators/userValidators.js

const { check } = require('express-validator');

exports.registerValidation = [
  check('userName', 'Username is required').notEmpty(),
  check('firstName', 'First name is required').notEmpty(),
  check('lastName', 'Last name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password must be 6+ chars long').isLength({ min: 6 }),
];

exports.loginValidation = [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').notEmpty(),
];
