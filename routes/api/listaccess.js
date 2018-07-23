var DB=require("../../models/index");
var sequelize=DB.sequelize;
var todoModel=sequelize.models.Todos;
var todolistmodel=sequelize.models.TodoList;
var userModel=sequelize.models.User;
var listaccessmodel=sequelize.models.ListAccess;
route=require('express').Router();

route.get('/',(req,res)=>{
	listaccessmodel.findAll().then((listaccess)=>{
	res.status(200).send(listaccess)

}).catch((err)=>{
	res.status(500).send({
		error:"could not find Access list"
	})

})
});

route.post('/',(req,res)=>{
	
	listaccessmodel.create({
		TodolistId:req.body.TodolistId,
		UserId:req.body.UserId
		

	}).then((access)=>{
		
		res.status(201).send(access)
	}).catch((err)=>{
		res.status(501).send({
			error:"Could not Assign To this user"
		})
	})

})
route.get('/access-list',(req,res)=>{
	
	listaccessmodel.findAll({
    include: [{
        model: todolistmodel,
        include:[{
        	model:userModel,
        }]
        
    }]
}).then((accesslistinformation)=>{
    res.status(200).send(accesslistinformation)
}).catch((err)=>{
   res.status(201).send({
   	error:"Could not get Information For this user and todolist"
   })
})

})

exports=module.exports=route;