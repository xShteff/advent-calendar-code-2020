import { data } from './input';

// 'eh, one day I'll find a smarter way to do it.

// Future Alin here. I did find a smarter way to do it, but I cba to re-write it.
// Basically I could've mapped the data to a dictionary
// then instead of looking through it twice, I could've done it once.
// and basically instead of looping through it again, I could just use the dictionary to see 
// if the value I need is existent or not, then move on.

// "This will go into technical debt." - and never touched again.
let index = 0;

while(index < data.length) {
    for(let cont = index + 1; cont < data.length; cont++) {
        if(data[index] + data[cont] === 2020) {
            console.log(data[index] * data[cont])
        }
    }
    index = index + 1;
}

index = 0;

while(index < data.length) {
    let indexTwo = index;
    while(indexTwo < data.length) {
        for(let indexThree = indexTwo + 1; indexThree < data.length; indexThree++) {
            if(data[index] + data[indexTwo] + data[indexThree] === 2020) {
                console.log(data[index] * data[indexThree] * data[indexTwo])
            }
        }
        indexTwo = indexTwo + 1;
    }
    index = index + 1;
}