'use strict';
module.exports = (sequelize, DataTypes) => {
  var ListAccess = sequelize.define('ListAccess', {
    TodolistId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  ListAccess.associate = function(models) {
    // associations can be defined here
    ListAccess.belongsTo(models.TodoList);
    ListAccess.belongsTo(models.User);
  };
  return ListAccess;
};