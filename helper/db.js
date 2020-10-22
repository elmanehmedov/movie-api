const mongoose = require('mongoose');
module.exports=() =>{
    mongoose.connect('mongodb://localhost/movie',{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
 mongoose.connection.on('open',()=>{
   console.log("Mongo connected")
 })
 mongoose.connection.on('error',(err)=>{
   console.log("Error message:",err)
 });
 mongoose.Promise=global.Promise;
}