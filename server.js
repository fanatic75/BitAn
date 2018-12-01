const express = require('express');
const app=express();
const http = require('http').Server(app);



const path = require("path");



app.get('/', function(req, res){
  res.sendFile(__dirname + '/../public/index.html');
});


http.listen(3001, function(){
  console.log('listening on *:3001');
});
