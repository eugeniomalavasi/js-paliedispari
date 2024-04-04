/**
 * data una stringa in input fare il reverse della parola stessa e dire se è uguale o no alla parola input
 * @param {string} wordToCheck parola input da invertire
 * @returns {boolean} se true parola è palindroma, se false non è palindroma
 */
function palindromeWord(wordToCheck) {
    const inputWordReverse = inputWord.split("").reverse().join("");
    console.log(inputWordReverse);
    let result = false;
    if (inputWord === inputWordReverse) {
        result = true
    } 
    console.log(result);
    return result;
}