import { readFileSync } from "fs";

interface PasswordEntry {
  characterMin: number;
  characterMax: number;
  character: string;
  passwordString: string;
}

const characterCountInString = function(
  character: string,
  input: string
): number {
  const regex = new RegExp(character, "g");
  return input.match(regex)?.length || 0;
};

let data: PasswordEntry[] = [];

try {
  let fileData: string[] = readFileSync("./inputs/day2.txt", "utf8").split(
    "\n"
  );
  for (let i = 0; i < fileData.length; i++) {
    let iArray = /(\d\d|\d)-(\d\d|\d) (\w): (\w*)/g.exec(fileData[i]);
    if (iArray) {
      data.push({
        character: iArray[3],
        characterMin: Number(iArray[1]),
        characterMax: Number(iArray[2]),
        passwordString: iArray[4],
      });
    }
  }
} catch (e) {
  console.log("Error:", e.stack);
}

let incorrectPasswordCount = 0;

data.map((password) => {
  const charCount = characterCountInString(
    password.character,
    password.passwordString
  );
  if (
    charCount >= password.characterMin &&
    charCount <= password.characterMax
  ) {
    incorrectPasswordCount++;
  }
});

console.log(incorrectPasswordCount);
