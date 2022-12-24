//CommomJS, every file is a module(by default).
// Modules = Encapsulated code (Only share minimum)

const names = require('./4-names'); // or we can destructure it like {john, peter} = require('./4-names);
const func = require('./5-utils');
const obj = require('./6-alternative-syntax');

require('./7-mind-grenade'); //when we import/require a module we actually invoke it. so without exporting this module we can invoke it when we import/require it.
// console.log(obj.singlePerson);
//console.log(names);
//console.log(func);

const sayHi = func.sayHi;
const bye = func.sayBye;

const oname = names.john;
const charName = names.peter;

// sayHi(charName);
// bye(oname);