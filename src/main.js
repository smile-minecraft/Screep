const memory = require('./memory');
const spawner = require('./spawner');
const worker = require('./worker');
const scheduler = require('./scheduler');


module.exports.loop = function() {
        worker.run();
        memory.clean();
        scheduler.run();
  }

  global.foo = function(){console.log("Test!")};