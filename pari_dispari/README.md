# istruzioni
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## input
- input stringa pari o dispari
- input numero da 1 a 5

## logica
- generare numero random da 1 a 5 tramite funzione
- somma userNumber con rndNumber
- determinare se result è pari o dispari usando una funzione
se result % 2 === 0 
    - evenOddResult = pari
- altrimenti
    - evenOddResult = dispari

se sceltaUtente === evenOddResult
    - stampa hai vinto
altrimenti
    - stampa hai perso
