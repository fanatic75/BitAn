const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require("path");
const io = require("socket.io")(http);
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
  let counter=0;
  if(roomExist(roomNos,users)){
      counter++;
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
  const temp={userID:socket.id,value:socket,roomNo:getRandomIntInclusive(0,10)};
  users.push(temp);
    if(roomFullOrNot("roomNo",users)===false){
      console.log(temp.roomNo);
      socket.join(temp.roomNo);
      done=22;}
      else{
        users.pop();}
      }
      if(done===21){
        socket.disconnect();
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
