"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(
    //personId which is the same as socket.id
    personId, assignedRoomId, positionInRoom) {
        var _this = this;
        this.personId = personId;
        this.assignedRoomId = assignedRoomId;
        this.positionInRoom = positionInRoom;
        //true if room is assigned
        this.isRoomAssigned = function () {
            return _this.assignedRoomId !== null && _this.assignedRoomId !== undefined;
        };
        this.joinRoom = function (socket, room, spaceInRoom) {
            if (spaceInRoom === 2) {
                _this.assignPositionInRoom(1, room);
                socket.join(room.roomId, function (err) { return err && console.log(err); });
            }
            else if (spaceInRoom === 1) {
                _this.assignPositionInRoom(2, room);
                socket.join(room.roomId, function (err) { return err && console.log(err); });
            }
        };
        this.assignPositionInRoom = function (positionInRoom, room) {
            _this.positionInRoom = positionInRoom;
            _this.assignedRoomId = room.roomId;
            // @ts-ignore
            room.peopleInRoom[_this.positionInRoom - 1] = _this;
        };
        this.vacateRoom = function (room) {
            //@ts-ignore
            room.peopleInRoom[_this.positionInRoom - 1] = null;
            _this.assignedRoomId = null;
        };
    }
    return Person;
}());
exports.default = Person;
//# sourceMappingURL=Person.js.map