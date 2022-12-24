const { readFileSync, writeFileSync } = require("fs");
//or
// const fs = require('fs');
// fs.readFileSync

//readFileSync is a method so it will take 2 arguments first is fileoath and the second one will be the encoding.
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(second);

//writeFileSync is also a method which takes 2 arguments first one is filename and if the file is not there it will create the file, and the second value is one that we would want to pass.
//and if the file is present node by default will override all the values that are in the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);
//if we want to append to the file, we have to pass in one more argument that will be an object (options object) and we will pass a propert called flag and if we pass its value as 'a', then node will append the content.
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`, {flag: 'a'}
);