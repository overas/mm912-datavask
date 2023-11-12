import { promises as fs } from "fs";
import { TLSSocket } from "tls";

let source = null;
let properties = null;
const output = [];
const ugyldigeNumre = [];

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
  // Bøkene
  const convertedItem = {};
  for (const i in properties) {
    //Identifikator for betydning av plassering
    convertedItem[properties[i].toLowerCase().trim().split(" ").join("")] =
      item[i];
  }
  output.push(convertedItem);
  //console.log(convertedItem);

  // Loop gjennom hvert objekt i arrayet og fjern mellomrom i telefonnummeret
  for (let i = 0; i < output.length; i++) {
    output[i].phonenumber = output[i].phonenumber.replace(/\s+/g, "");
  }

  //Gå gjennom hvert objekt i arrayet og legg til +47 foran telefonnummeret hvis det ikke allerede er der
  for (let i = 0; i < output.length; i++) {
    if (!output[i].phonenumber.includes("+47")) {
      output[i].phonenumber = "+47" + output[i].nummer;
    }
  }

  // Gå gjennom hvert objekt i arrayet og sjekk antall siffer i telefonnummeret
  for (let i = 0; i < output.length; i++) {
  let phonenumber = output[i].phonenumber;
  let antallSiffer = phonenumber.length;

  // Gi en beskjed basert på antall siffer i telefonnummeret
  if (antallSiffer != 11) {
  ugyldigeNumre.push(output[i]);
  }
  }

  // Skriv ut det oppdaterte arrayet til konsollen for å sjekke at mellomrommene er fjernet
  console.log(convertedItem);
  console.log(ugyldigeNumre);
}

//console.log(JSON.stringify(output));

process.exit(0);
