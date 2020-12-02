import { readFileSync } from "fs";

interface PasswordEntry {
    characterMin: number;
    characterMax: number;
    character: string;
    password: string;
}


let data: PasswordEntry[] = [];

// 10-12 r: rrrrgdrrrzrs
const regex: RegExp = /(\d\d|\d)-(\d\d|\d) (\w): (\w*)/g;
regex.lastIndex = 1;
try {
    let fileData: string[] = readFileSync('./inputs/day2.txt', 'utf8').split('\n');
    fileData.map((i) => {
        let iArray = regex.exec(i);
        if(iArray) {
            data.push({
                character: iArray[3],
                characterMin: Number(iArray[1]),
                characterMax: Number(iArray[2]),
                password: iArray[4]
            })
        }
    })
} catch(e) {
    console.log('Error:', e.stack);
}

console.log(data);