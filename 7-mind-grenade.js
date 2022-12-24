const num1 = 5;
const num2 = 10;

const addNum = (num1, num2) => {
    console.log(`The sum of the two numbers is ${num1 + num2}`);
}

addNum(num1, num2); //if we have a function inside a module that we invoke, it will run even though we didn't assign it a variable where we want to require it. so to run it we can simply require the module.
// the reason this happens is because the code is not exported on its own, when the node exports this, it actually wraps it in the function
//so thats why when we require this module, we do invoke the code if we have some kind of function that actually is executed in the module like we have invoked the addNum function by writing addNum().
//so we have not exported the function but we have executed the function here and imported/required it somewhere else to use it.