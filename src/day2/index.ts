import { exportFileToLineArray } from "../shared";

interface PasswordEntry {
  characterMin: number;
  characterMax: number;
  character: string;
  passwordString: string;
}

class Task {
  public data: PasswordEntry[];

  public constructor() {
    this.data = this.initData();
  }

  public solveTask() {
    throw Error("Method not implemented");
  }

  private initData = () => {
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
  };
}

class TaskOne extends Task {
  public constructor() {
    super();
  }

  public solveTask() {
    let incorrectPasswordCount = 0;

    this.data.map((password) => {
      const charCount = this.characterCountInString(
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

  private characterCountInString = (
    character: string,
    input: string
  ): number => {
    const regex = new RegExp(character, "g");
    return input.match(regex)?.length || 0;
  };
}

class TaskTwo extends Task {
  public constructor() {
    super();
  }

  public solveTask() {
    let count = 0;
    this.data.forEach((element) => {
      if (
        this.checkForOneMatch(
          element.passwordString,
          element.characterMin,
          element.characterMax,
          element.character
        )
      ) {
        count += 1;
      }
    });
    console.log(count);
  }

  private checkForOneMatch(
    input: string,
    pos1: number,
    pos2: number,
    lookupChar: string // Realised I could've just passed the entire object but I'm too committed to this
  ) {
    return (
      (input.charAt(pos1 - 1) === lookupChar &&
        input.charAt(pos2 - 1) !== lookupChar) ||
      (input.charAt(pos1 - 1) !== lookupChar &&
        input.charAt(pos2 - 1) === lookupChar)
    );
  }
}

// Task 1
const taskOne = new TaskOne();
taskOne.solveTask();
// Task 2
const taskTwo = new TaskTwo();
taskTwo.solveTask();
