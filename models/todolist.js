'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoList = sequelize.define('TodoList', {
    UserId: DataTypes.INTEGER
  }, {});
  TodoList.associate = function(models) {
  	//creates the relation to from user to todo list
  TodoList.belongsTo(models.User);
  };
  return TodoList;
};