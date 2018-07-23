var DB=require("../../models/index");
var sequelize=DB.sequelize;
var todoModel=sequelize.models.Todos;
var todolistmodel=sequelize.models.TodoList;
var userModel=sequelize.models.User;
route=require('express').Router();

route.get('/',(req,res)=>{
	todoModel.findAll().then((todos)=>{
	res.status(200).send(todos)

}).catch((err)=>{
	res.status(500).send({
		error:"could not find Tasks"
	})

})
});

route.post('/',(req,res)=>{
	
	todoModel.create({
		TodolistId:req.body.TodolistId,
		taskName:req.body.taskName,
		taskDetails:req.body.taskDetails,
		taskStatus:req.body.taskStatus,

	}).then((todos)=>{
		
		res.status(201).send(todos)
	}).catch((err)=>{
		res.status(501).send({
			error:"Could not create Task"
		})
	})

})
route.get('/todolist-todos',(req,res)=>{
	
	todoModel.findAll({
    include: [{
        model: todolistmodel,
        include:[{
        	model:userModel,
        }]
        
    }]
}).then((todos)=>{
    res.status(200).send(todos)
}).catch((err)=>{
   res.status(201).send({
   	error:"Could not get Tasks For this user and todolist"
   })
})

})

exports=module.exports=route;