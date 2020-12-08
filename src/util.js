const fs = require('fs');
const readLines = (filename) => fs.readFileSync(filename, 'UTF-8').split('\n\n');

module.exports = {readLines};
