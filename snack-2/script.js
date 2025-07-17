const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

const nameForEach = [];

people.forEach((elem) => {
  nameForEach.push(`${elem.name}`);
});

console.log(nameForEach);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
