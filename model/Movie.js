const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const MovieSchema=new Schema({
    director_id : {
     type:  mongoose.Schema.Types.ObjectId,
     required:true
    },
    title:{
        type:String,
        required:[true, '`{PATH}` xanasini daxil etmek teleb olunur'],
        maxlength:[15, '`{PATH}` xanasi ({MAXLENGTH}) SIMVOLDAN AZ DAXIL ETMEK TELEB OLUNUR'],
        minlength:[3, '`{PATH}` xanasini ({MINLENGTH}) SIMVOLDAN AZ DAXIL ETMEK TELEB OLUNUR'],
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
