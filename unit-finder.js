import { readFile, writeFile } from "fs/promises";

async function getUnits() {
  // 1. Read the file
  const file = await readFile("./static/units.json", "utf8");
  const data = JSON.parse(file);

let i = 0;

// in here is where you change the parameters of what you want to find

  for (const unit of data.items) {
    if (unit.generalPool === null) {
      i++;
      console.log(unit.id);
    }
  }
console.log("units found:")
console.log (i);

}

getUnits().catch(console.error);