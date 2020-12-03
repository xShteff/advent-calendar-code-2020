import { readFileSync } from "fs";

export function exportFileToLineArray(path: string): string[] {
  try {
    return readFileSync(path, "utf8").split("\n");
  } catch (e) {
    console.log("Error:", e.stack);
    return [];
  }
}
