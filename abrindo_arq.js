const fs = require('fs');

fs.readFile('./texto.md', 'utf-8', function(error,data){
    if(err) throw err;
    console.log(data)
});


