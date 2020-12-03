import { exportFileToLineArray } from "../shared";

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

class Task {
  public data: PasswordEntry[];

  public constructor() {
    this.data = this.initData();
  }

  public initData() {
    let fileData: string[] = exportFileToLineArray("./inputs/day2.txt");
    let returnData: PasswordEntry[] = [];
    for (let i = 0; i < fileData.length; i++) {
      let iArray = /(\d\d|\d)-(\d\d|\d) (\w): (\w*)/g.exec(fileData[i]);
      if (iArray) {
        returnData.push({
          character: iArray[3],
          characterMin: Number(iArray[1]),
          characterMax: Number(iArray[2]),
          passwordString: iArray[4],
        });
      }
    }
    return returnData;
  }

  public solveTask() {}
}

class TaskOne extends Task {
  public constructor() {
    super();
  }

  public solveTask() {
    let incorrectPasswordCount = 0;

    this.data.map((password) => {
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
  }
}

class TaskTwo extends Task {
  public constructor() {
    super();
  }

  public solveTask() {
    //TODO
  }
}

// Task 1
const taskOne = new TaskOne();
taskOne.solveTask();
// Task 2
