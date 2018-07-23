


const route =require('express').Router();
route.use('/users',require('./user'));
route.use('/todolists',require('./todolists'));
route.use('/todos',require('./todos'));

//route.use('/todos',require('/.todos'));
exports=module.exports={
	route
}