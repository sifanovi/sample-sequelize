const Sequelize=require('sequelize');
const db=new Sequelize('shopdb','root','',{
	host:'localhost',
	dialect:'mysql',
	pool:{
		min:0,
		max:5,

	}
})
const User=db.define('user',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true,
	},
	name :{
		type:Sequelize.STRING,
		allowNull:false,

	}
})
const Todo=db.define('todo',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true,
	},
	task:{
		type:Sequelize.STRING,},
		description:{
			type:Sequelize.STRING,
		},
		status:{
			type:Sequelize.INTEGER,
			defaultValue:0
		}

})
db.sync().then(()=> console.log("Database has been synced"))
.catch((err)=>
	console.error("Could not create database"))
exports=module.exports={
	User,Todo
}