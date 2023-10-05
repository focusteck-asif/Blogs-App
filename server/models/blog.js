'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {

    static associate(models) {
      Blog.belongsTo(models.User, {
        foreignKey: 'userId',
      });

      Blog.hasMany(models.Comment, {
        foreignKey: 'blogId',
      })
    }
  }

  Blog.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};