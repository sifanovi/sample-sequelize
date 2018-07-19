const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',require('./routes/api').route);
app.listen(2678,()=> console.log('Server started at http://localhost:2678'))