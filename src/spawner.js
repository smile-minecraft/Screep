const { generateName } = require("./name")
const config = require("./config")

module.exports = {
    spawnCreep(role,room) {
        let state = config.rooms[room];
        let name = generateName(role, config.creepModel[state][role.toLowerCase()]);
        let spawn = Game.rooms[room].find(FIND_MY_SPAWNS)[0];
        if(spawn === undefined) {
            return;
        }
        Game.spawns[spawn.name].spawnCreep(config.model[config.creepModel[state][role.toLowerCase()]], name, { memory: { role: role } });
    },

    check() {
        const roles = ['Harvester', 'Upgrader', 'Builder', 'Repairer', 'Explorer'];

        for(let room in Game.rooms){
            let state = config.rooms[room];

            for (let role of roles) {
                const creeps = _.filter(Game.creeps, (creep) => creep.memory.role === role && creep.room.name === room);
                const minAmount = config.creepAmountMin[state][role.toLowerCase()];
                const maxAmount = config.creepAmountMax[state][role.toLowerCase()];

                if (creeps.length < minAmount) {
                    this.spawnCreep(role,room);
                    return;
                }
            }

            for (let role of roles) {
                const creeps = _.filter(Game.creeps, (creep) => creep.memory.role === role && creep.room.name === room);
                const minAmount = config.creepAmountMin[state][role.toLowerCase()];
                const maxAmount = config.creepAmountMax[state][role.toLowerCase()];

                if (creeps.length < maxAmount) {
                    this.spawnCreep(role,room);
                    return;
                }
            }

        }
    },

    report() {
        const roles = ['Harvester', 'Upgrader', 'Builder', 'Repairer', 'Explorer'];
        const creepAmounts = {};

        for (let role of roles) {
            const creeps = _.filter(Game.creeps, (creep) => creep.memory.role === role);
            creepAmounts[role.toLowerCase()] = creeps.length;
        }

        Memory.creepAmounts = creepAmounts;
    },
}