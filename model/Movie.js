const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const MovieSchema=new Schema({
    director_id : {
     type:  mongoose.Schema.Types.ObjectId,
     required:true
    },
    title:{
        type:String,
        required:true
    },
    category:String,
    country:String,
    year:Number,
    imdb_score:Number,
    createdAt:{
     type:Date,
     default:Date.now
    }
});
module.exports=mongoose.model("movie",MovieSchema)
