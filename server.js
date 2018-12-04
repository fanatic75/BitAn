const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require("path");
const io = require("socket.io")(http);
app.use(express.static(path.join(__dirname, 'build')));



let totalUsers=0;
let userID=0;
let noOfRooms=Math.floor(totalUsers/2);
const users = [


];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});
io.on("connection", socket => {
  console.log("no of users are "+ ++totalUsers);
  noOfRooms=Math.floor(totalUsers/2);
  const temp={userID:socket.id,value:socket,roomNo:getRandomIntInclusive(0,noOfRooms)};
  users.push(temp);
  console.log(temp.roomNo);
      socket.join(temp.roomNo);
  socket.on("chatMessage", msg => {
    socket.to(temp.roomNo).broadcast.emit("chatMessage", msg);
  });
  socket.on("disconnect", () => {
    let index=users.findIndex(x => x.userID===socket.id);
     console.log("no of users are "+ --totalUsers);
       noOfRooms=Math.floor(totalUsers/2);
      users.splice(index,1);

   });
});


const port = 8020;
http.listen(port);
console.log("app is working on port" + port);
