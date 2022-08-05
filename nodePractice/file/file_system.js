var fs = require('fs');


const writeFilePromise = (file,data) => {
    return new Promise((resolve, reject)=>{
        fs.writeFile(file, data, (err)=>{
            if(err) reject("could not write file");
            resolve("success");
        });
    });
}

(async()=>{
    try{
        await writeFilePromise('myData.txt',`Hey @ ${new Date()}`);
        console.log('File created successfully with promisefy and async await!');

    }catch(err){
        console.log(err);
    }
})();