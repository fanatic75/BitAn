const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require("path");
const io = require("socket.io")(http);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 8020 }));
app.use(express.static(path.join(__dirname, 'build')));

const roomExist= (propertyName, inputArray) => {
  let seenDuplicate = false,
      testObject = {};

  inputArray.map(function(item) {
    let itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true;
      seenDuplicate = true;
    }
    else {
      testObject[itemPropertyName] = item;
      delete item.duplicate;
    }
  });

  return seenDuplicate;
}


let counter=0;
let totalUsers=0;
let userID=0;
let noOfRooms=Math.floor(totalUsers/2);
const users = [];


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const roomFullOrNot = (roomNos,users) => {
  if(roomExist(roomNos,users)){
    console.log("room exist already");
      const i=counter++;
      console.log(i);
        if(counter%2!==0){
          const j=counter++;
          console.log(j);
          return true;
        }
        return false;
      //this is the thing if you can see it.
  }    else{
      return false; }
}


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});
io.on("connection", socket => {
  console.log("no of users are "+ ++totalUsers);
  noOfRooms=Math.floor(totalUsers/2);

  for(let done=0;done<21;done++){
  const temp={userID:socket.id,value:socket,roomNo:getRandomIntInclusive(0,noOfRooms)};
  users.push(temp);
  console.log("user chooses "+temp.roomNo);
  let myCond ;

  io.of('/').adapter.clients([temp.roomNo], (err, clients) => {
    if(clients.length<3){
      myCond= true;
    } else{myCond= false;} // an array containing socket ids in 'room1' and/or 'room2'
});
    if(myCond){
      console.log("user joins "+temp.roomNo);
      socket.join(temp.roomNo);
      done=22;}
      else{
        users.pop();
        console.log("can't enter "+temp.roomNo);
        if(done===21){
          socket.disconnect();
        }}
      }
  socket.on("chatMessage", msg => {
    let index=users.findIndex(x => x.userID===socket.id);
    socket.to(users[index].roomNo).broadcast.emit("chatMessage", msg);
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
