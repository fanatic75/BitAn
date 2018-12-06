"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BITRoom = /** @class */ (function () {
    function BITRoom(roomId) {
        var _this = this;
        this.roomId = roomId;
        this.peopleInRoom = [];
        this.checkAvailableSpace = function () {
            var spaceCount = 0;
            if (_this.peopleInRoom[0] === undefined || _this.peopleInRoom[0] === null)
                spaceCount++;
            if (_this.peopleInRoom[1] === undefined || _this.peopleInRoom[1] === null)
                spaceCount++;
            return spaceCount;
        };
    }
    return BITRoom;
}());
exports.default = BITRoom;
//# sourceMappingURL=Room.js.map