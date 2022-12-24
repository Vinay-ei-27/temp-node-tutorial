// local dependency - use it only in this particular project
// npm insatll <package name>

// global dependency - use it in any project
// npm i -g <package name>
//sudo npm i -g <package name> (for mac)

//package.json - manifest file (stores important info about the project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, 2, [3, [4, 5, [6]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);