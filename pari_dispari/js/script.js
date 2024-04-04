// INPUT
// userChoice = prompt("scegli pari o dispari"); // string
userNumber = parseInt(prompt("inserisci un numero da 1 a 5")); // number
console.log(userNumber, "numero utente");

// LOGICA
// funzione numero casuale
const random = randomNumber();

// somma numero casuale con numero utente
const result = random + userNumber;
console.log(result);

