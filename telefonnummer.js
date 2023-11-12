// Opprett et array bestående av objekter som inneholder telefonnummer
var telefonnummer = [
    { navn: 'Ola', nummer: '12345678' },
    { navn: 'Kari', nummer: '123456789' },
    { navn: 'Per', nummer: '1234' },
    { navn: 'Lise', nummer: '12345678901' }
  ];

// Opprett en tom array for ugyldige telefonnumre
var ugyldigeNumre = [];

// Gå gjennom hvert objekt i arrayet og sjekk antall siffer i telefonnummeret
for (var i = 0; i < telefonnummer.length; i++) {
  var nummer = telefonnummer[i].nummer;
  var antallSiffer = nummer.length;
  
  // Gi en beskjed basert på antall siffer i telefonnummeret
  if (antallSiffer === 8) {
    console.log(telefonnummer[i].navn + ' har et gyldig telefonnummer.');
  } else {
    console.log(telefonnummer[i].navn + ' har et ugyldig telefonnummer.');
    ugyldigeNumre.push(telefonnummer[i]);
  }
}

// Vis alle objekter med ugyldige telefonnumre
console.log('Objekter med ugyldige telefonnumre:');
console.log(ugyldigeNumre);