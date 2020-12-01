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

index = 0;

while(index < inputData.length) {
    indexTwo = index;
    while(indexTwo < inputData.length) {
        for(let indexThree = indexTwo + 1; indexThree < inputData.length; indexThree++) {
            if(inputData[index] + inputData[indexTwo] + inputData[indexThree] === 2020) {
                console.log(inputData[index] * inputData[indexThree] * inputData[indexTwo])
            }
        }
        indexTwo = indexTwo + 1;
    }
    index = index + 1;
}