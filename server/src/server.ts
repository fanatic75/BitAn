import express from 'express';
//@ts-ignore
const app = express();
const server = require('http').createServer(app);
import path from "path";
import { Server, Socket } from 'socket.io';
import uniqid from "uniqid";
import { RoomType } from './types';
import Person from './Person';
import BITRoom from './Room';
const io: Server = require("socket.io")(server, {
  serveClient: false,
});
const buildPath = path.join(__dirname, "..", "..", "app", 'build');
console.log(__dirname);
console.log(buildPath);
// console.log('\x1bc'); //clears console

const indexHtmlPath = path.join(buildPath, "index.html");
console.log(indexHtmlPath);
app.use(express.static(buildPath));


let totalUsers = 0;
let socketConnectionNumber = 0;
// let roomNo = 0;
let rooms: Array<BITRoom> = [
  new BITRoom(uniqid.process())
];
let people: Array<Person> = [];



app.get('/', function (_req: any, res: any) {
  res.sendFile(indexHtmlPath);
});
io.on("connection", (socket: Socket) => {
  console.log("no of users are " + ++totalUsers);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" +
    ">>>>>>>>>>>>>>>>>>>>>>" + ++socketConnectionNumber);
  const person = new Person(socket.id);
  people.push(person);
  console.log("this is the person right after he was created:" + person);
  console.log("this is the peoples array: " + JSON.stringify(people, null, 2) + people);
  rooms.forEach(currentRoom => {
    const space = currentRoom.checkAvailableSpace();
    console.log("this is the space in the current room" + space)
    console.log("the person has been assigned a room?" + person.isRoomAssigned())
    if (space > 0 && !person.isRoomAssigned())
      person.joinRoom(socket, currentRoom, space);
    console.log("this is the person" + JSON.stringify(person, null, 2) + person +
      " who joined this room " + JSON.stringify(currentRoom, null, 2) + currentRoom);
  });

  if (!person.isRoomAssigned()) {
    const room = new BITRoom(uniqid.process());
    person.joinRoom(socket, room, room.checkAvailableSpace())
    rooms.push(room);
    console.log("A new room was created room" + JSON.stringify(room, null, 2) + room)
  }


  // console.log("***************** logging extras*************** person, people,rooms")
  // console.log(person);
  // console.log(people);
  // console.log(rooms);


  // console.log("user chooses " + temp.roomNo);

  // console.log("user joins " + temp.roomNo);

  socket.on("chatMessage", msg => {
    // console.log("message from person");
    // console.log(person);
    // console.log(msg);
    //@ts-ignore
    socket.to(person.assignedRoomId).broadcast.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("logging the person on disconnect " + person);
    let roomIndex = 0;
    rooms.forEach((currentRoom: RoomType, index: number) => {
      console.log("logging current room before vacating" + currentRoom +
        JSON.stringify(currentRoom, null, 2));
      if (person.isRoomAssigned()) {
        if (currentRoom.roomId === person.assignedRoomId) {
          person.vacateRoom(currentRoom);
          roomIndex = index;
        }
      }
      //remove the room because the user left
      rooms.splice(roomIndex, 1);
      //todo: only one user left reconnect the other one to the room
      people = people.filter(p => person.personId !== p.personId)
      console.log("logging current room after vacating" + currentRoom +
        JSON.stringify(currentRoom, null, 2));
    });
    console.log("no of users are " + --totalUsers);
    if (totalUsers === 0) {
      rooms = [
        new BITRoom(uniqid.process())
      ];
      people = [];
    }

    // console.log(rooms);
    // console.log(people);
    socket.disconnect();
    // let index = users.findIndex(x => x.userID === socket.id);


    // noOfRooms = Math.floor(totalUsers / 2);
    // users.splice(index, 1);

  });
});


const port = 8020;
server.listen(port);
console.log("app is working on port" + port);




























// const roomExist = (propertyName, inputArray) => {
//   let seenDuplicate = false,
//     testObject = {};

//   inputArray.forEach(function (item) {
//     let itemPropertyName = item[propertyName];
//     if (itemPropertyName in testObject) {
//       testObject[itemPropertyName].duplicate = true;
//       item.duplicate = true;
//       seenDuplicate = true;
//     }
//     else {
//       testObject[itemPropertyName] = item;
//       delete item.duplicate;
//     }
//   });

//   return seenDuplicate;
// }



// const getRandomIntInclusive = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// const roomFullOrNot = (roomNos, users) => {
//   if (roomExist(roomNos, users)) {
//     console.log("room exist already");
//     const i = counter++;
//     console.log(i);
//     if (counter % 2 !== 0) {
//       const j = counter++;
//       console.log(j);
//       return true;
//     }
//     return false;
//     //this is the thing if you can see it.
//   } else {
//     return false;
//   }
// }