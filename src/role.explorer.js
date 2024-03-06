
const roleExplorer = {
  /** @param {Creep} creep **/
  run: function(creep) {
    let room = Memory.goalRoom;
    if (creep.room.name !== room) {
      creep.moveTo(new RoomPosition(25, 25, room));
    } else {
      let exit = creep.pos.findClosestByRange(FIND_EXIT);
      creep.moveTo(exit);
    }
  }
};

module.exports = roleExplorer;
