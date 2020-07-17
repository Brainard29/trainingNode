/*
const http = require('http');
const server = http.createServer();




server.on('connection', (socket) => {
    console.log('New HTTP request ');
});


server.listen('3000');
console.log('listen in port 3000....');
 */
const http = require('http');
const server = http.createServer( (req,res) => {
    if(req.url==="/") {
        res.write('Hello World');
        res.end();
    }

    if(req.url=== '/sgu/training') {
        res.write('Second conn');
        res.end();
    }
});

