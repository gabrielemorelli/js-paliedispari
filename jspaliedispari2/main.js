/*input richiesti*/

let pari_dispari = prompt('scegli tra paro o disparo');
let playernumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
/*genero numero casuale attraverso la funzione*/
let numerocasuale = casuale();

/*calcola la somma dei numeri del giocatore e del computer*/
let somma = playernumber + numerocasuale;


/*dichiaro chi ha vinto confrontando il valore immesso dal player
 con l'output della funzione di verifica della somma se pari o dispari*/
if (parodisparo(somma) == pari_dispari ) {
    alert ('la somma è ' + somma + ' hai vinto') ;
} else{
    alert( 'la somma è ' + somma + ' hai perso');
}
   


/* funzioni*/

function casuale() {
    num = Math.round(Math.random() * 5);

    return num;
}

function parodisparo(numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "paro";
        
        
    } else {
        ritorno = "disparo";
    }

    return ritorno;
}


























































