var DB=require("../../models/index");
var sequelize=DB.sequelize;
var todolistmodel=sequelize.models.TodoList;
var userModel=sequelize.models.User;
route=require('express').Router();

route.get('/',(req,res)=>{
	todolistmodel.findAll().then((todolists)=>{
	res.status(200).send(todolists)

}).catch((err)=>{
	res.status(500).send({
		error:"could not find todolists"
	})

})
});

route.post('/',(req,res)=>{
	console.log(req.body.UserId);
	console.log(req.body.id);

	todolistmodel.create({
		listid:req.body.UserId

	}).then((todolists)=>{
		
		res.status(201).send(todolists)
	}).catch((err)=>{
		res.status(501).send({
			error:"Could not create todo list for this user"
		})
	})

})
route.get('/todo-user',(req,res)=>{
	
	todolistmodel.findAll({
    include: [{
        model: userModel,
        
    }]
}).then((todolists)=>{
    res.status(200).send(todolists)
}).catch((err)=>{
   res.status(201).send({
   	error:"Could not get todolists"
   })
})

})

exports=module.exports=route;