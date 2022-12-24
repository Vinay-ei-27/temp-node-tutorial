const secret = 'SUPER SECRET';
const john = 'john';
const peter = 'peter';

//console.log(module); // we use the exports object of module to share something. so whatever we put inside this exports object we can access that anywhere in our application.
//so the exports object is in module so, we write:-

module.exports = {john, peter} //since exports is an object we write things in the object.