const nums = [2, 8, 4, 7, 12, 87];

const evenNums = nums.filter((number) => {
  // return number % 2 === 0; //versione ristretta dove ritorna il risultato della condizione
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNums);
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
