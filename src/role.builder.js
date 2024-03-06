const behavior  = require('./creep.behavior');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
		if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	    }

        if(creep.memory.building) {
            behavior.build(creep);
        } else {
            behavior.harvest(creep);
        }
	}
};

module.exports = roleBuilder;