const route =require('express').Router();
route.use('/users',require('./users'));
route.use('/todos',require('./todos'));
//route.use('/todos',require('/.todos'));
exports=module.exports={
	route
}