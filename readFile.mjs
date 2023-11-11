import { promises as fs } from "fs";

let source = null;
let properties = null;
const output = [];

try {
  source = await fs.readFile("data.csv", "utf8");
  source = source.split("\n");
  source = source.map((item) => item.split(","));
} catch (error) {
  console.log(error);
  process.exit(-1);
}

properties = source.shift();

for (const item of source) {
  const convertedItem = {};
  for (const i in properties) {
    convertedItem[properties[i].toLowerCase().trim()] = item[i];
  }
  output.push(convertedItem);
}

console.log(JSON.stringify(output));

process.exit(0);
