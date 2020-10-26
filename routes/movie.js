const express = require('express');
const router = express.Router();
const Movie=require('../model/Movie');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.json({data:'movies'});
  const promise=Movie.find({});
  promise.then((data)=>{
    console.log(data)
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
});
router.get("/top",(req,res,next)=>{
  const promise=Movie.find({}).limit(3).sort({imdb_score:-1});
  promise.then((data)=>{
    if(!data)
    next({message:'The movie did not found',code:404})
    res.json(data)
  })
  .catch((err)=>{
    res.json(err)
  })
})
router.get("/between/:start_year/:end_year",(req,res,next)=>{
  const {start_year,end_year}=req.params;
  const promise=Movie.find({
    year:{
      "$gte":parseFloat(start_year),"$lte":parseFloat(end_year)
    }
  })
  promise.then((data)=>{
    if(!data)
    next({message:'The movie did not found',code:404})
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})
router.get('/:movieId',function(req,res,next){
  const promise=Movie.findById(req.params.movieId);
  promise.then((data)=>{
    if(!data)
    next({message:'The movie did not found',code:404})
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})


router.put('/:movieId',function(req,res,next){
  const promise=Movie.findByIdAndUpdate(
    req.params.movieId, req.body,
    {
     new:true
    });
  promise.then((data)=>{
    if(!data)
    next({message:'The movie did not found',code:404})
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})

router.delete('/:movieId',function(req,res,next){
  const promise=Movie.findByIdAndRemove(
    req.params.movieId);
  promise.then((data)=>{
    if(!data)
    next({message:'The movie did not found',code:404})
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})


router.post('/new',(req,res,next)=>{
  const {title,imdb_score,category,country,year,director_id}=req.body;
 const movie=new Movie({
   title:title,
   imdb_score:imdb_score,
   category:category,
   country:country,
   year:year,
   director_id:director_id
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
