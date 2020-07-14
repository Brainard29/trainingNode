const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', function(arg) {
   console.log('Listener Called',arg);
});
//emitter.emit('messageLoad');
//emitter.emit('messageLoad', {id:29, url:'patreon.com'} );

logger.log('ini test');

