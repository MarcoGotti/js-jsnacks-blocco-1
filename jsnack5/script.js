/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const empty = [];

for (let i = 0; i < 6; i++) {
    const number = Number(prompt('Write a number, bro'))
    if  (number % 2 != 0){
        empty.push(number);
    }
}
console.log(`Surprise dear friend!
We only accept odd numbers.
Here is your list
${empty}`);
console.log(empty);