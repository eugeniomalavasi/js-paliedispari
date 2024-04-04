/**
 * creare un numero randomico da 1 a 5
 * @param {number} numb scelto dall'utente
 * @returns {number} numero random da 1 a 5
 */
function randomNumber() {
    const rndNumb = Math.floor(Math.random() * 5) + 1;
    console.log(rndNumb, "numero casuale");
    return rndNumb;
}