const behavior = require('./creep.behavior');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let room = creep.room.name;
        if(creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
            creep.memory.harvesting = false;
        }
        if(!creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.harvesting = true;
        }
	    if(creep.memory.harvesting) {
            behavior.harvest(creep);
        }
        else {
            behavior.transfer(creep);
        }
	}
};

module.exports = roleHarvester;