var express = require('express');
var router = express.Router();
const { mongoose , dataModel } = require('../config/dbSchema')
const { mongodb , dbName, dbUrl} = require('../config/dbConfig')
mongoose.connect(dbUrl)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data/',async(req, res, next)=>{
  try {
    let result =await dataModel.create(req.body)
    res.send({
      statusCode: 200,
      message : "data created successfully"
    })
  }catch(err){
    res.send({
      statusCode: 500,
      message: err.message
    })
  }
})

router.get('/data/',async(req, res, next)=>{
  try{
    let lists = await dataModel.find()
    res.send({
      statusCode : 200 ,
      message : "List collected",
      lists
    })
  }catch(err){
    res.send({
      statusCode: 200,
      message: err.message
    })
  }
})
module.exports = router;
