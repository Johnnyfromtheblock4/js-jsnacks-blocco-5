const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

//cerco l'array di Marco Lanci
const lanciObj = students.find((student) => {
  if (student.name === `Marco Lanci`) {
    return true;
  }
});

console.log(lanciObj.class);

//cerco la classe di Marco Lanci

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
