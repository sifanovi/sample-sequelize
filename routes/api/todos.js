const Todo=require('../../db').Todo;

const route=require('express').Router()

route.get('/',(req,res) => {
  Todo.findAll()
   .then((users) => {
   	 res.status(200).send(users)

   }).catch((err)=> {
   	res.status(500).send({
     error:"Could not retrieve users"
   	})
   })

});
route.post('/',(req,res)=>{
	Todo.create({
		task:req.body.task,
		description:req.body.description,
		status:req.body.status,
	}).then((users)=>{
		res.status(201).send(users)
	}).catch((err)=>{
		res.status(501).send({
			error:"Could not create a user"
		})
	})
})
route.get('/done',(req,res)=>{
	Todo.findAll({
		where:{
			status:1
		}
	}).then((tasks)=>{
		res.status(200).send(tasks)
	}).catch((err)=>{
		res.status(201).send({
			eror:"No post found"
		})
	})
})
route.get('/notdone',(req,res)=>{
	Todo.findAll({
		where:{
			status:0
		}
	}).then((tasks)=>{
		res.status(200).send(tasks)
	}).catch((err)=>{
		res.status(201).send({
			eror:"No post found"
		})
	})
})

route.get('/update/:id/:status',(req,res)=>{
	
	Todo.update({
		status:req.params.status

	},{
		where:{
			id:parseInt(req.params.id)
		}
	}).then((tasks)=>{
		res.status(200).send(tasks)
	}).catch((err)=>{
		res.status(201).send({
			eror:"No post found"
		})
	})
})

exports=module.exports=route;