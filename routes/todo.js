var express = require('express');
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('mongodb://dexteruser:Qwerty123!@ds157723.mlab.com:57723/dexter', ["todo"]);

/* GET users listing. */
router.get('/list', function(req, res, next){
  db.todo.find(function(err, docs){
    if(err != null){
        console.log(err);
    }
    console.log(docs);
    res.send(docs);
  });
});

/* POST users listing. */
router.post('/create', function(req, res, next){
  db.todo.find(function(err, docs){
    if(err){
        console.log(err);
        res.send(err);
    }
    console.log(docs);
    res.send(docs);
  });
});

/* DELETE users listing. */
router.delete('/remove', function(req, res, next){
  db.todo.find(function(err, docs){
    if(err != null){
        console.log(err);
    }
    console.log(docs);
    res.send(docs);
  });
});

module.exports = router;
