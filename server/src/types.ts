
export type availableRoomSpaceType = 0 | 1 | 2;
export type postitionInRoomType = 1 | 2;
export interface RoomType {
    roomId: string,
    peopleInRoom?: Array<PersonType>

}

export interface PersonType {
    personId: string,
    assignedRoomId?: string | null,
    positionInRoom?: postitionInRoomType

}