var DB = require("../../models/index");
var sequelize = DB.sequelize;
var userModel = sequelize.models.User;
const route=require('express').Router();



route.get('/',(req,res) => {
  userModel.findAll()
   .then((users) => {
   	 res.status(200).send(users)

   }).catch((err)=> {
   	res.status(500).send({
     error:"Could not retrieve users"
   	})
   })

});
exports=module.exports=route;