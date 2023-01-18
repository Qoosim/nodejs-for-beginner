const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt')); 

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })
// More efficient way of doing the same
rs.pipe(ws);