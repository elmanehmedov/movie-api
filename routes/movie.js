const express = require('express');
const router = express.Router();
const Movie=require('../model/Movie');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({data:'movies'});
});
router.post('/new',(req,res,next)=>{
  const {title,imdb_score,category,country,year}=req.body;
 const movie=new Movie({
   title:title,
   imdb_score:imdb_score,
   category:category,
   country:country,
   year:year
 });

//  Old code format
//  movie.save((err,data)=>{
//    if(err)
//    res.json(err)
//    res.json(data)
//  })
 
//New Format
const promise=movie.save();
promise.then((data)=>{
  // res.json(data);
  res.json({status:200})
}).catch((err)=>{
  res.json(err)
})
})


module.exports = router;
