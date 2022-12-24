const items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

module.exports = {items, person};
//or we can write
module.exports.items = ['item1', 'item2'];
//also we can export person object like this
module.exports.singlePerson = person;