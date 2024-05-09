let numeroGatti = prompt("Inserisci numero di gatti totali:");
let numeroGattiFila = prompt("Inserisci il numero di gatti in fila:");

let fileRisultanti = Math.floor(numeroGatti / numeroGattiFila);

// Calcola il numero di gatti mancanti per completare una nuova fila
let gattiMancanti = numeroGattiFila - (numeroGatti % numeroGattiFila);

// Calcola quanti gatti rimangono fuori50
let gattiRimastiFuori = numeroGatti % numeroGattiFila;

// Stampa il risultato in console
console.log("Ci sono " + fileRisultanti + " file di gatti e ne mancano " + gattiMancanti + " per una nuova fila, con un avanzo di " + gattiRimastiFuori + " gatti.");