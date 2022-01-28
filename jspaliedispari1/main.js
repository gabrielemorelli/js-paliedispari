let parola = prompt ('inserisci una parola');
let parolaInversa = InvertiParola (parola);
console.log(parolaInversa);
console.log(parola.length);
console.log(parola);



if (parola == parolaInversa){
    alert('la parola è palindroma');

}

else {
    alert('la parola non è palindroma');
}



function InvertiParola(stringa){
    let parolaInversa = '';

    let i = stringa.length - 1;

    while ( i >= 0) {
        parolaInversa += stringa[i];
        i--;
    }

    return parolaInversa;
}