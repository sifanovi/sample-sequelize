'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.INTEGER,
    password:DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
  };
  return User;
};