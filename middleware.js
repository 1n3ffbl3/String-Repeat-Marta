var repeatStringNTimes = require('./solution') // tutaj powinnien być w takim razie calc zamiast calculator 

let args = process.argv.slice(2);
let operation = args[0]; //add
    let arg1 = args[1]; //2
    let arg2 = args[2]; //2
let result = repeatStringNTimes.operate(operation, arg1, arg2) 
console.log(result)