const EventEmitter = require('events');

var url = "patreon.com";

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit('messageLogged', {id: 6, url: 'patreon.com'});
    }
}

module.exports = Logger;
