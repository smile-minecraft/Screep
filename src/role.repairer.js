const behavior = require("./creep.behavior");

var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	    }

	    if(creep.memory.repairing) {
			behavior.repair(creep);
			} 
		else {
			behavior.harvest(creep);
	    }
	}
};

module.exports = roleRepairer;