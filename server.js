const express = require('express');
const app=express();
const http = require('http').Server(app);
const path = require("path");
const io=require("socket.io")(http);

app.use( express.static(path.join(__dirname, 'build')));






app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});
io.on("connection",socket =>{
  console.log("a user is connected");
  socket.on("chatMessage",msg => {
      socket.broadcast.emit("chatMessage",msg);
    });
    socket.on("disconnect",socket => {console.log("user is disconnected.");});
});


const port=8020;
http.listen(port);
console.log("app is working on port"+port);
