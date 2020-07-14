const fs = require('fs');

//var file = fs.readdirSync('./');
//console.log(file);

fs.readdir('./', function(err,files) {
    if(err) {
        console.log('Error occured. Error Message : ' + err);
    }
    else {
        console.log("File in this directory : " + files);
    }
});