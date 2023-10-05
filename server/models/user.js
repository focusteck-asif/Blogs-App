'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Blog, {
        foreignKey: 'userId',
      });

      User.hasMany(models.Comment, {
        foreignKey: 'userId'
      })
    };

  }


  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.ENUM('admin', 'user'),


  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
