const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'Nice to meet you');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
} 

fileOps();


/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
  if (err) throw err;
  console.log('Write complete');

  // Update the content of the file reply

  fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is brother', (err) => {
    if (err) throw err;
    console.log('Append complete');

    // Change filename

    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete');
    })
  })
})




// exit on caught error
process.on('uncaughtExeption', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})
*/
