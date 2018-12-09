const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require("path");
const io = require("socket.io").listen(server);
app.use(express.static(path.join(__dirname, 'build')));

let counter=0;
let totalUsers=0;
let userID=0;
let noOfRooms=Math.floor((totalUsers-1)/2);
const users = [];
const duplicateArray=[];
const disconnectMsg="Stranger has disonnected. Please refresh the Page.";
const connectedMsg="Stranger has connected. Please say Hello.";

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
    console.log(temp.roomNo+" already exists");
      if(io.sockets.adapter.rooms[temp.roomNo].length>1){
        console.log("there's more than one person in the room "+temp.roomNo);
        return true;
      }
     else{
       console.log("there's only one person in the room "+temp.roomNo);
       setTimeout(()=>{io.in(temp.roomNo).emit("chatMessage",connectedMsg)},8000); //emit that the second stranger has connected to the app to the first stranger.
       return false;
     }
   }else{
     console.log("room is created now with ID "+temp.roomNo);
      return false;
    }
};



const deleteRoom = (someRoom) => { //function for deleting the room and taking out all the users from it.
  console.log("both of the clients will be exiting this room which is known by "+someRoom);
  io.of('/').in(someRoom).clients(function(error, clients) {
        clients.forEach(function (socket_id) {
            io.sockets.sockets[socket_id].leave(someRoom);
        });
    });

};


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});
app.get("/.well-known/pki-validation/BA0B04580497DB685C1EABF437C0200C.txt",(req,res)=>{
  res.sendFile(__dirname+'/build/.well-known/pki-validation/BA0B04580497DB685C1EABF437C0200C.txt');
});

io.on("connection", socket => {
  console.log("a user has connected. "+  ++totalUsers);//added the usesr to total number of users.
  noOfRooms=Math.floor((totalUsers-1)/2);//updaing the no of rooms when a new user is added.
  console.log("no of rooms are "+noOfRooms);
  for(let done=0;done<21;done++){
    const temp={userID:socket.id,roomNo:getRandomIntInclusive(0,noOfRooms)}; //user details
    console.log("user is given "+temp.userID+" and room No is "+temp.roomNo);
    users.push(temp); //pusing user details into users array
    console.log("user chooses "+temp.roomNo);
    if(roomFullOrNot(temp,duplicateArray)===false){  //checking if the room is full or not, if full insert the user to some other room
      socket.join(temp.roomNo);
      console.log("user enters "+temp.roomNo);
      if(!roomExist(temp,duplicateArray)){
        duplicateArray.push(temp.roomNo);  //pushing the room to an array which contains all the rooms that exist already.
        console.log("a room which is called "+temp.roomNo+" has been created and is put in duplicateArray");
        console.log("duplicateArray contains "+duplicateArray);
      }
      done=22;                             //exiting the loop.
    }  else{
        users.pop();                       //taking out the user from the users array as there is no space in room and finding a new room again.
        console.log("user with id "+temp.userID+" couldn't enter the room since it's full, room No was "+temp.roomNo);
        }


      } //loop ends here


  socket.on("chatMessage", msg => {  //reading the message event which comes from the client.
    console.log('a message has been recevied and will be send to the other client');
    const index=users.findIndex(x => x.userID===socket.id);  //finding out the client's room no so that it goes to the same room no.
    console.log(index);
    if(index!==-1){
      console.log("message has come from "+users[index].userID+" and is being brodcast in room no "+users[index].roomNo);
      socket.to(users[index].roomNo).broadcast.emit("chatMessage", msg); //pushing the message to the other client in the same room.
    }else{console.log("this message won't go anywhere since you're not in any room.");}
  });


  socket.on("disconnect", () => {  //reading the disconnect event.
    const index=users.findIndex(x => x.userID===socket.id); //finding the index of the disconnected user in the users array.


    console.log(index);
    if(index!==-1){
      console.log("a client has disonnected and now total no of users are "+(--totalUsers)); //remove the user from total users.
      roomNo=users[index].roomNo;//room of the first user
      console.log("a client has disconnected with socket id "+socket.id+" and user ID" +users[index].userID);
      console.log("broadcasting the disconnect message to the stranger since the first client has left the room.room no is "+users[index].roomNo);
      socket.to(users[index].roomNo).broadcast.emit("chatMessage", disconnectMsg); //emitting the message to the other client that the stranger has disconnected.

      console.log("room list contains "+duplicateArray);
      const indexDuplicateArray=duplicateArray.findIndex(x=>x===roomNo); //finding the index of room in the duplicateArray which was just deleted.

        console.log("deleting the room "+roomNo);
        deleteRoom(roomNo);    //deleting the room since nobody is chatting in it anymore.
        console.log("removing the room no from the list containing present rooms since the room is deleted.");
        duplicateArray.splice(indexDuplicateArray,1); //removing the room from the duplicateArray since the room doesn't exist anymore.
        console.log("updated room list is "+duplicateArray);

        console.log("removing the user who left the room.");
        console.log("user id is "+users[index].userID+" was in room "+users[index].roomNo);

        users.splice(index,1); //removing the first user from the users array.

        console.log("no of Rooms are changed into "+noOfRooms);
        console.log("updated user list is "+users.map(x => x.userID).join(","));
        const strangerIndex=users.findIndex((x) => x.userID!==socket.id&&x.roomNo===roomNo);//get the index of the stranger in the users array
        console.log(strangerIndex);
        if(strangerIndex!==(-1)){

          console.log("removing the stranger from the users array.");
          console.log("user id is "+users[strangerIndex].userID+"was in room "+users[strangerIndex].roomNo);
          users.splice(strangerIndex,1);
          console.log("updated user list is "+users.map(x => x.userID).join(","));
          console.log("a client has disonnected and now total no of users are "+(--totalUsers)); //remove the user from total users.
        }else{console.log("there was no stranger in the room and only one user");}
        noOfRooms=Math.floor((totalUsers-1)/2); //updating the no of rooms after the user disconnects.
      }
    else{console.log("the user was already deleted from the users list.")}
  });
});


const port = 3000;
server.listen(process.env.PORT||port);
console.log("app is working on port" + port);
