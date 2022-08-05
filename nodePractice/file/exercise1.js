const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
(async () => {
  try {
    //Implementation goes here
    const dataFile = await readFile('./file/src.txt','utf8');
    await writeFile('dest.txt', dataFile)
    console.log('Data moved from src to dest');
  } catch (err) {
    console.log(err);
  }
})();
