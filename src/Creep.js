class Creep {
    constructor(creep) {
        this.creep = creep;
        this.name = creep.name;
        this.role = creep.memory.role;
        this.memory = creep.memory;
        this.body = creep.body;
        this.id = creep.id;
        this.source = creep.memory.sourceId;
        this.init = creep.memory.init;
        this.target = creep.memory.targetId;
        this.room = creep.memory.room;
        this.init();
    }

    init(){
        this.memory.init = true;
        if(!this.role){
            this.role = 'harvester';
            this.memory.role = 'harvester';
        }

        if(!this.room){
            this.room = this.creep.room.name;
            this.memory.room = this.creep.room.name;
        }

        if(!this.source){
            var sources = this.creep.room.find(FIND_SOURCES);
            var sourceNum = Math.floor(Math.random() * sources.length);
            if(sources[sourceNum].id){
                this.creep.memory.sourceId = sources[sourceNum].id;
            }
        }

        if(!this.room){
            this.room = this.creep.room.name;
            this.memory.room = this.creep.room.name;
        }
    }

    getCreep() {
        return this.creep;
    }

    getRole() {
        return this.role;
    }

    getMemory() {
        return this.memory;
    }

    getBody() {
        return this.body;
    }

    getId() {
        return this.id;
    }

    getSource() {
        return this.source;
    }

    isInit() {
        return this.init;
    }

    getTarget() {
        return this.target;
    }

    harvest(){
        let creep = this.creep;
        creep.say('🔄採收');
            if(creep.memory.sourceId == undefined){
                var sources = creep.room.find(FIND_SOURCES);
                var sourceNum = Math.floor(Math.random() * sources.length);
                if(sources[sourceNum].id){
                    creep.memory.sourceId = sources[sourceNum].id;
                }
            }

            var source = Game.getObjectById(creep.memory.sourceId);

            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffffff'}});
            } else if (creep.harvest(source) == ERR_NOT_ENOUGH_RESOURCES) {
                var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) && 
                                structure.store[RESOURCE_ENERGY] > 0;
                    }
                });

                if(container) {
                    if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
    }

    build(){
        let creep = this.creep;
        creep.say('🚧建造');
				var build_targets = creep.room.find(FIND_CONSTRUCTION_SITES);
				if(build_targets.length) {
					if(creep.build(build_targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(build_targets[0], {visualizePathStyle: {stroke: '#ffff00'}});
					}
				} else {
					creep.say('💤休息');
                    if(creep.room.name != undefined){
                        creep.moveTo(Game.flags['RestRoom_'+creep.room.name]);
                    }
			}
    }

    repair(){
        let creep = this.creep;
        var repair_targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_CONTAINER) && structure.hits < structure.hitsMax;
            }});
            if(!repair_targets) {
                repair_targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART) && structure.hits < 20000;
                    }});
            }
        creep.say('🔨維修');
                if(creep.repair(repair_targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(repair_targets, {visualizePathStyle: {stroke: '#00ffff'}});
                }
    }

    upgrade(){
        let creep = this.creep;
        creep.say('⚡升級');
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#00ff00'}});
        }
    }

    transfer(){
        let creep = this.creep;
        creep.say('🚚運送');
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && 
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
        });

        if(targets.length == 0) {
            targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION) && 
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
        }

        if(targets.length == 0) {
            targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && 
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
        }

        if(targets.length > 0) {
            let target = creep.pos.findClosestByPath(targets);
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ff9912'}});
            } else if(creep.transfer(target, RESOURCE_ENERGY) == ERR_FULL) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY)){
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ff9912'}});
                }
            }
        }
    }

}