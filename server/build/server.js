"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var server = require('http').createServer(app);
var path_1 = __importDefault(require("path"));
var uniqid_1 = __importDefault(require("uniqid"));
var Person_1 = __importDefault(require("./Person"));
var Room_1 = __importDefault(require("./Room"));
var io = require("socket.io")(server, {
    serveClient: false,
});
var buildPath = path_1.default.join(__dirname, "..", "..", "app", 'build');
// console.log(__dirname);
// console.log(buildPath);
// console.log('\x1bc'); //clears console
var indexHtmlPath = path_1.default.join(buildPath, "index.html");
console.log(indexHtmlPath);
app.use(express_1.default.static(buildPath));
var totalUsers = 0;
var socketConnectionNumber = 0;
// let roomNo = 0;
var rooms = [
    new Room_1.default(uniqid_1.default.process())
];
var people = [];
app.get('/', function (_req, res) {
    res.sendFile(indexHtmlPath);
});
io.on("connection", function (socket) {
    console.log("no of users are " + ++totalUsers);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" +
        ">>>>>>>>>>>>>>>>>>>>>>" + ++socketConnectionNumber);
    var person = new Person_1.default(socket.id);
    people.push(person);
    console.log("this is the person right after he was created:");
    console.log(person);
    console.log("this is the peoples array: " + JSON.stringify(people, null, 2) + people);
    rooms.forEach(function (currentRoom) {
        var space = currentRoom.checkAvailableSpace();
        // console.log("this is the space in the current room" + space)
        console.log("the person has been assigned a room?" + person.isRoomAssigned());
        if (space > 0 && !person.isRoomAssigned())
            person.joinRoom(socket, currentRoom, space);
        console.log("this is the person");
        console.log(person);
        console.log(" who joined this room ");
        console.log(currentRoom);
    });
    if (!person.isRoomAssigned()) {
        var room = new Room_1.default(uniqid_1.default.process());
        person.joinRoom(socket, room, room.checkAvailableSpace());
        rooms.push(room);
        console.log("A new room was created room");
        console.log(room);
    }
    // console.log("***************** logging extras*************** person, people,rooms")
    // console.log(person);
    // console.log(people);
    // console.log(rooms);
    // console.log("user chooses " + temp.roomNo);
    // console.log("user joins " + temp.roomNo);
    socket.on("chatMessage", function (msg) {
        // console.log("message from person");
        // console.log(person);
        // console.log(msg);
        //@ts-ignore
        socket.to(person.assignedRoomId).broadcast.emit("chatMessage", msg);
    });
    socket.on("disconnect", function () {
        console.log("logging the person on disconnect ");
        console.log(person);
        var roomIndex = 0;
        rooms.forEach(function (currentRoom, index) {
            console.log("logging current room before vacating");
            console.log(currentRoom);
            if (person.isRoomAssigned()) {
                if (currentRoom.roomId === person.assignedRoomId) {
                    person.vacateRoom(currentRoom);
                    roomIndex = index;
                }
            }
            //remove the room because the user left
            rooms.splice(roomIndex, 1);
            //todo: only one user left reconnect the other one to the room
            people = people.filter(function (p) { return person.personId !== p.personId; });
            console.log("logging current room after vacating");
            console.log(currentRoom);
        });
        console.log("no of users are " + --totalUsers);
        if (totalUsers === 0) {
            rooms = [
                new Room_1.default(uniqid_1.default.process())
            ];
            people = [];
        }
        console.log(rooms);
        console.log(people);
        socket.disconnect();
        // let index = users.findIndex(x => x.userID === socket.id);
        // noOfRooms = Math.floor(totalUsers / 2);
        // users.splice(index, 1);
    });
});
var port = 8020;
server.listen(process.env.PORT || port);
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
//# sourceMappingURL=server.js.map