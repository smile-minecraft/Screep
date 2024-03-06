module.exports = {
    clean() {
        for (const name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
    },
    creepIntialized() {
        for(const creep in Game.creeps) {
                Memory.creeps[creep].sourceId = undefined;
        }
    },
}