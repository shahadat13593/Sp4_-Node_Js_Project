// shahadat hossain
// id: 201-15-13593

const fs = require('fs');


const readStrem = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStrem.on('data', (chunk) =>{
console.log('==================== new chunk ==================='); 
console.log(chunk);

writeStream.write('\nNew Chunk\n');
writeStream.write(chunk);
});



//  piping 

// readStrem.pipe(writeStream);
