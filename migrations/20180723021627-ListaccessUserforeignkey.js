'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addConstraint('ListAccesses',['UserId'],{
      type:'foreign key',
      name:'UserId',
      references:{
        table:'Users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
     })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeConstraint('ListAccesses',['UserId'],{
      type:'foreign key',
      name:'UserId',
      references:{
        table:'Users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
     })
  }
};
