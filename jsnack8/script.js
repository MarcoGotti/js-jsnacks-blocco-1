/* 
Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero
*/

let number = (prompt('Scrivi un numero di 4 cifre'));
let sum = 0;

if (number.length < 4 || number.length > 4){
    alert('Il numero deve essere di 4 cifre altrimenti non gioco più!')
} else {
    for (let i = 0; i < number.length; i++) {
    const element = Number(number[i]);
    console.log(element);
    sum += element;
}
}



console.log('La somma delle cifre è:', sum);
