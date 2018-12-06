import { PersonType, RoomType, availableRoomSpaceType, postitionInRoomType } from "./types";
import { Socket } from "socket.io";

export default class Person implements PersonType {
    constructor(
        //personId which is the same as socket.id
        public personId: string,
        public assignedRoomId?: string | undefined | null,
        public positionInRoom?: postitionInRoomType | undefined) { }

    //true if room is assigned
    isRoomAssigned = (): boolean =>
        this.assignedRoomId !== null && this.assignedRoomId !== undefined;


    joinRoom = (socket: Socket, room: RoomType, spaceInRoom: availableRoomSpaceType) => {
        if (spaceInRoom === 2) {
            this.assignPositionInRoom(1, room);
            socket.join(room.roomId, (err) => err && console.log(err));
        } else if (spaceInRoom === 1) {
            this.assignPositionInRoom(2, room);
            socket.join(room.roomId, (err) => err && console.log(err));
        }
    }

    assignPositionInRoom = (positionInRoom: postitionInRoomType, room: RoomType) => {
        this.positionInRoom = positionInRoom;
        this.assignedRoomId = room.roomId;
        // @ts-ignore
        room.peopleInRoom[this.positionInRoom - 1] = this;
    }

    vacateRoom = (room: RoomType) => {
        //@ts-ignore
        room.peopleInRoom[this.positionInRoom - 1] = null;
        this.assignedRoomId = null;

    }

}

