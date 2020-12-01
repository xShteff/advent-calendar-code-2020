const inputData = require('./input')
// 'eh, one day I'll find a smarter way to do it.

let index = 0;

while(index < inputData.length) {
    for(let cont = index + 1; cont < inputData.length; cont++) {
        if(inputData[index] + inputData[cont] === 2020) {
            console.log(inputData[index] * inputData[cont])
        }
    }
    index = index + 1;
}