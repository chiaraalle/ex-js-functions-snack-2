/*1-Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

//funzione dichiarativa
console.log(somma(3, 3));

function somma(num1, num2){
    return num1 + num2
     
}

//funzione anonima
const sum = function (num1, num2) {
    return num1 + num2
}

console.log(sum(4, 5))

//arrow function 

const sum2 = (num1, num2) => num1 + num2

console.log(sum2(5, 6))

/*2-Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e
 restituisce il suo quadrato in una sola riga. */
//arrow function
 const quadrato = (num) => num * num

 console.log(`il numero al quadrato è ${quadrato(4)}`)

//funzione dichiarativa 
function quadrato2(num) {
    return num * num
}
console.log(`il numero al quadrato è ${quadrato2(5)}`)

/*3-Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: 
due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
 */
const dividi = (num1, num2) => num1 / num2;

function eseguiOperazione(num1, num2, operazione){
    return operazione(num1, num2);
}

console.log(eseguiOperazione(6,2,dividi));

/*4-Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms)
 e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

 function creaTimer(ms){
    return function (){
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, ms)
    }
 }
 // se uso il console.log mi restituisce la funzione ma non fa partire il timer

 //creo la funzione
 const timer = creaTimer(2000);
 //la chiamo e faccio partire il SetTimeout
 timer();

 /*5-Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito.
 Interrompilo manualmente o usa clearInterval() in un altro script. */

/*function  stampaOgniSecondo(){
    return function (message){
        setInterval(() => {
            console.log(`${message}`)
        }, 1000)
    }
}

const messaggioTimer = stampaOgniSecondo();

messaggioTimer('è passato un secondo!')*/

/*6-Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo
 e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo. */

function creaContatoreAutomatico(){
    let contatore = 0 
    return function (){

    }
}