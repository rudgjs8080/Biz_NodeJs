const fs = require('fs');
fs.readFile('./README2.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})