const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:4313Samadhi@cluster0-jqb4b.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("users");
  // perform actions on the collection object


const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({
    extended: true
  }));
  
  
  app.use(bodyparser.json());
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(8080,()=>console.log("Express Server Sratrted"));

  app.post('/api/reg',(req,res)=>{

    obj = {name:req.body.name,mail:req.body.mail,password:req.body.password};
    collection.insertOne(obj,function(err,dbres){
        if (!err)
        res.send("true");
        else
        res.send("false")
        console.log(err)
    });
  });

  app.post('/api/login',(req,res)=>{

    var querry = {mail:req.body.mail};
    collection.find(querry).toArray(function(err,result){
        if(result[0].password === req.body.password){
            res.send(result[0])
        }else{
            res.send("invalid")
        }
    });

  })


});