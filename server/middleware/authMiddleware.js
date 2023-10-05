const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/jwtconfig.json');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, do not have the token.' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized!' });
  }
};
