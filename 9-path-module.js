const path = require('path');

//returns platform specific seperator
console.log(path.sep);

//joins a sequence of path segments using that platform specific seperator as the limiter, and second thing it does is returns a normalized resulting path
const filePath = path.join('/content', 'subFolder', 'test.txt');
console.log(filePath);

//returns the base of the file path
const base = path.basename(filePath);
console.log(base);

//this method returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt'); //__dirname points to the directory where our app.js file is located.

console.log(absolute);