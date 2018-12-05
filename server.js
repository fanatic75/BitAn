const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require("path");
const io = require("socket.io").listen(server);
app.use(express.static(path.join(__dirname, 'build')));

let counter=0;
let totalUsers=0;
let userID=0;
let noOfRooms=Math.floor(totalUsers/2);
const users = [];
const duplicateArray=[];
const disconnectMsg="Stranger has disonnected. Please refresh the Page.";


const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const roomExist = (temp,duplicateArray) =>{ //function to check if the duplicateArray contains the room already or not.
  if(duplicateArray.includes(temp.roomNo)){
    return true;
  }else{return false;}
};



const roomFullOrNot = (temp,duplicateArray) => {  //function for checking if both of the uers have been inserted into the room or not.
  if(roomExist(temp,duplicateArray)){
      if(io.sockets.adapter.rooms[temp.roomNo].length>1){
        return true;
      }
     else{
       return false;
     }
   }else{
      return false;
    }
};



const deleteRoom = (someRoom) => { //function for deleting the room and taking out all the users from it.

  io.of('/').in(someRoom).clients(function(error, clients) {
        clients.forEach(function (socket_id) {
            io.sockets.sockets[socket_id].leave(someRoom);
        });
    });

};


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});


io.on("connection", socket => {
  ++totalUsers; //added the usesr to total number of users.
  noOfRooms=Math.floor(totalUsers/2);//updaing the no of rooms when a new user is added.

  for(let done=0;done<21;done++){
    const temp={userID:socket.id,roomNo:getRandomIntInclusive(0,noOfRooms)}; //user details
    users.push(temp); //pusing user details into users array
    if(roomFullOrNot(temp,duplicateArray)===false){  //checking if the room is full or not, if full insert the user to some other room
      socket.join(temp.roomNo);
      if(!roomExist(temp,duplicateArray)){
        duplicateArray.push(temp.roomNo);  //pushing the room to an array which contains all the rooms that exist already.
      }
      done=22;                             //exiting the loop.
    }  else{
        users.pop();                        //taking out the user from the users array as there is no space in room and finding a new room again.
        }


      } //loop ends here


  socket.on("chatMessage", msg => {  //reading the message event which comes from the client.
    let index=users.findIndex(x => x.userID===socket.id);  //finding out the client's room no so that it goes to the same room no.
    socket.to(users[index].roomNo).broadcast.emit("chatMessage", msg); //pushing the message to the other client in the same room.
  });


  socket.on("disconnect", () => {  //reading the disconnect event.
    let index=users.findIndex(x => x.userID===socket.id); //finding the index of the disconnected user in the users array.
    --totalUsers; //remove the user from total users.
    noOfRooms=Math.floor(totalUsers/2); //updating the no of rooms after the user disconnects.
    socket.to(users[index].roomNo).broadcast.emit("chatMessage", disconnectMsg); //emitting the message to the other client that the stranger has disconnected.
    deleteRoom(users[index].roomNo);    //deleting the room since nobody is chatting in it anymore.
    let indexDuplicateArray=duplicateArray.findIndex(x=>x===users[index].roomNo); //finding the index of room in the duplicateArray which was just deleted.
    duplicateArray.splice(indexDuplicateArray,1); //removing the room from the duplicateArray since the room doesn't exist anymore.
    users.splice(index,1); //removing the first user from the users array.
   });
});


const port = 3000;
server.listen(process.env.PORT||port);
console.log("app is working on port" + port);
