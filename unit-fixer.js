import { readFile, writeFile } from "fs/promises";

// ⚠️THIS FUNCTION CHANGES THE JSON FILE⚠️

async function fixUnits() {
  // 1. Read the file
  const file = await readFile("./static/units.json", "utf8");
  const data = JSON.parse(file);

  let i = 0;

for (const unit of data.items) {
  if (unit.generalPool === null) {
    unit.generalPool = true;
    i++;
    console.log(unit.id);
  }
}

  // 3. Write back to the file (pretty-printed for readability)
  await writeFile("./static/units.json", JSON.stringify(data, null, 2), "utf8");

  console.log("units found:")
  console.log(i);
  console.log("✨✨✨ Units fixed ✨✨✨");
}

fixUnits().catch(console.error);