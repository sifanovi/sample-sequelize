'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todos = sequelize.define('Todos', {
    TodolistId: DataTypes.INTEGER,
    taskName: DataTypes.STRING,
    taskDetails: DataTypes.STRING,
    taskStatus: DataTypes.INTEGER
  }, {});
  Todos.associate = function(models) {
    // associations can be defined here
    Todos.belongsTo(models.TodoList);
  };
  return Todos;
};