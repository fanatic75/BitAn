import { RoomType, PersonType, availableRoomSpaceType } from "./types";

export default class BITRoom implements RoomType {
    constructor(public roomId: string) { }
    peopleInRoom: Array<PersonType> = [];

    checkAvailableSpace = (): availableRoomSpaceType => {
        let spaceCount = 0;
        if (this.peopleInRoom[0] === undefined || this.peopleInRoom[0] === null)
            spaceCount++;
        if (this.peopleInRoom[1] === undefined || this.peopleInRoom[1] === null)
            spaceCount++
        return spaceCount as availableRoomSpaceType;
    }
}