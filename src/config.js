module.exports = {
    creepAmountMax: {
        main: {
            harvester: 12,
            upgrader: 8,
            builder: 3,
            repairer: 4,
            explorer: 5,
        },
        new: {
            harvester: 4,
            upgrader: 2,
            builder: 1,
            repairer: 1,
            explorer: 1,
        },
        stable: {
            harvester: 8,
            upgrader: 4,
            builder: 2,
            repairer: 2,
            explorer: 2,
        },
        outpost: {
            harvester: 2,
            upgrader: 1,
            builder: 1,
            repairer: 1,
            explorer: 1,
        }
    },

    creepAmountMin: {
        main:{
            harvester: 8,
            upgrader: 2,
            builder: 0,
            repairer: 1,
            explorer: 0,
        },
        new:{
            harvester: 2,
            upgrader: 1,
            builder: 0,
            repairer: 0,
            explorer: 0,
        },
        stable:{
            harvester: 4,
            upgrader: 2,
            builder: 1,
            repairer: 1,
            explorer: 1,
        },
        outpost:{
            harvester: 1,
            upgrader: 1,
            builder: 0,
            repairer: 0,
            explorer: 0,
        }
    },

    rooms:{
        "W3N4": "main",
        "W3N3": "new",
        "sim": "new",
    },

    spawn: {
        "W3N4": "Alpha",
        "W3N3": "Beta",
        "sim": "Alpha",
    },
    

    tickTime: {
        checkCreepAmount: 5,
        report: 2,
        creepIntialize: 20,
    },

    creepModel: {
        main:{
            harvester: "Worker-07",
            upgrader: "Worker-07",
            builder: "Worker-04",
            repairer: "Worker-05",
            explorer: "EXP-01",
        },
        new:{
            harvester: "Basic",
            upgrader: "Worker-01",
            builder: "Worker-01",
            repairer: "Worker-01",
            explorer: "EXP-01",
        },
        stable:{
            harvester: "Worker-06",
            upgrader: "Worker-06",
            builder: "Worker-04",
            repairer: "Worker-05",
            explorer: "EXP-01",
        },
        outpost:{
            harvester: "Worker-02",
            upgrader: "Worker-02",
            builder: "Worker-02",
            repairer: "Worker-02",
            explorer: "EXP-01",
        }
    },

    model: {
        "Basic": [WORK,CARRY,MOVE],
        "Worker-01": [WORK,WORK,CARRY,MOVE],
        "Worker-02": [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
        "Worker-03": [WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE],
        "Worker-04": [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE],
        "Worker-05": [CARRY,CARRY,WORK,MOVE,MOVE],
        "Worker-06": [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],
        "Worker-07": [WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE],
        "EXP-01": [CLAIM,WORK,CARRY,MOVE,MOVE,MOVE],

    }
    
};