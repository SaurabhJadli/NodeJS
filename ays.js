const fs = require('fs');
fs.writeFile('myfile.txt', 'helo aync', function(err){
    if (err){
        console.log("error ocured", err);
    }
    console.log('file created successfull')
});
console.log('after file write');