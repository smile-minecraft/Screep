const spawner = require("./spawner");
const config = require("./config");
const memory = require("./memory");

module.exports = {
    run() {
        let time = Game.time;
        if(time % config.tickTime.checkCreepAmount === 0) {
            spawner.check();
        } 
        
        if(time % config.tickTime.report === 0) {
            spawner.report();
        }

        if(time % config.tickTime.creepIntialize === 0) {
            memory.creepIntialized();
        }

    }
}