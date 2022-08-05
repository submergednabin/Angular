const fs = require('fs');
const {promisify} = require('util');

const appendFile = promisify(fs.appendFile);

(async()=>{
    try{
        await appendFile("myData.txt",`\n Heys @ ${new Date()}`);
        console.log('File content appended successfully with promisify and async/awit!'); 
    }catch(err){
        console.log(err);
    }
})()