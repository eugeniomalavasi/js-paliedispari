/**
 * creare un numero randomico da 1 a 5
 * @returns {number} numero random da 1 a 5
 */
function randomNumber() {
    const rndNumb = Math.floor(Math.random() * 5) + 1;
    console.log(rndNumb, "numero casuale");
    return rndNumb;
}

/**
 * stampare se un numero è pari o dispari
 * @param {number} evenOddNumb numero da determinare pari o dispari
 * @returns {string} 
 */
function evenOrOddFunc (evenOddNumb) {
    let evenOddResult = "";
    if (evenOddNumb % 2 === 0) {
        evenOddResult = "pari";
    } else {
        evenOddResult = "dispari"
    }
    console.log("il numero è", evenOddResult);
    return evenOddResult;
}