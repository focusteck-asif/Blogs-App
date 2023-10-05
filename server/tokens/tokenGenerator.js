const jwt = require('jsonwebtoken');
const config = require('../config/jwtconfig.json');

function generateToken(user) {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      id: user.id,
      roles: user.roles,
    },
    config.jwtSecret
  );
  return token;
}

module.exports = {
  generateToken,
};
