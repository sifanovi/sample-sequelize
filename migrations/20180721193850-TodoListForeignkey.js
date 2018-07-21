'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

     queryInterface.addConstraint('TodoLists',['UserId'],{
      type:'foreign key',
      name:'UserId',
      references:{
        table:'Users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
     })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
       queryInterface.removeConstraint('TodoLists',['Userid'],{
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
