// INPUT
userChoice = prompt("scegli pari o dispari"); // string
console.log(userChoice);
userNumber = parseInt(prompt("inserisci un numero da 1 a 5")); // number
console.log(userNumber, "numero utente");

// LOGICA
// funzione numero casuale
const random = randomNumber();
// somma numero casuale con numero utente
const result = random + userNumber;
console.log(result, "somma numeri");

// funzione per stampare pari o dispari in base a somma numeri
const evenOddTxt = evenOrOddFunc(result);

// condizione vittoria
if (userChoice === evenOddTxt) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}