/*  SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const guests = ['Paola', 'Lucia', 'Johnny', 'Pippo', 'Caio', 'Tizio'];

const userName = prompt('What\'s your name baby?');
let access = false;

for (let i = 0; i < guests.length; i++) {
    let guest = guests[i];
    if (guest == userName){
        access = true;
        console.log(userName, 'You are welcome to the party');
    }
}

if (access == false){
    console.log(userName, 'Go away!');
} 