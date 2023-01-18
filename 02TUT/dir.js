const fs = require('fs')

// check if the director exist
if (!fs.existsSync('./new')) {
    // create directory
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created!');
    })
}

// check if directory exist
if (fs.existsSync('./new')) {
    // remove directory
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed!');
    })
}
