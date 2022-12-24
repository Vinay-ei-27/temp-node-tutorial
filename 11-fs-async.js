//these are the asynchronous methods
const {readFile, writeFile} = require('fs');

//the readFile method also takes 2 arguments first one is file path and the second one is a callback function
//in that callback function we pass 2 arguments first is error if there is an error, and the second one is the result.
//we have to provide an encoding here or we will get a buffer. we have to pass the encoding between file path and the callback function.
//Also the below method or approach is an example of callback hell.
readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=> {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})