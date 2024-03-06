let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let roleRepairer = require('role.repairer');
let tower = require('tower');

module.exports = {
    run() {
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            switch (creep.memory.role) {
                case 'Harvester':
                    roleHarvester.run(creep);
                    break;
                case 'Upgrader':
                    roleUpgrader.run(creep);
                    break;
                case 'Builder':
                    roleBuilder.run(creep);
                    break;
                case 'Repairer':
                    roleRepairer.run(creep);
                    break;
            }
        }
        tower.run();
        
    }
}