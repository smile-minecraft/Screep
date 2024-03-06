module.exports = {
    run() {
        for(var room in Game.rooms) {
            var towers = Game.rooms[room].find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER);
                }
            });
            for(var i in towers) {
                var tower = towers[i];
                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if(closestHostile) {
                    tower.attack(closestHostile);
                } else {
                    var dameged_structures = tower.pos.findInRange(FIND_STRUCTURES, 10, {
                        filter: (structure) => {
                            return (structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL && structure.structureType != STRUCTURE_RAMPART);
                        }
                    });

                    if(dameged_structures.length == 0) {
                        dameged_structures = tower.pos.findInRange(FIND_STRUCTURES, 10, {
                            filter: (structure) => {
                                return (structure.hits < 30000 && (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART));
                            }
                        });
                    }

                    if(dameged_structures.length > 0) {
                        dameged_structures.sort((a,b) => a.hits - b.hits);
                        tower.repair(dameged_structures[0]);
                    }
                }
            }
        }
    }
}