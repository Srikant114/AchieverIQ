const User = require('../models/User');
const generateUserId = require('../utils/generateUserId');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

exports.registerUser = async (req, res) => {
  const { userName, firstName, lastName, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({
      userID: generateUserId(),
      userName,
      firstName,
      lastName,
      email,
      password,
      role,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        userID: user.userID,
        email: user.email,
        userName: user.userName,
        token: generateToken(user),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // compare entered password with hashed password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        userID: user.userID,
        email: user.email,
        userName: user.userName,
        token: generateToken(user),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
