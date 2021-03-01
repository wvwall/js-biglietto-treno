alert ("BENVENUTO SU QUESTO TRENO DI NUOVA GENERAZIONE! NON AVRAI IL TEMPO DI GODERTI IL VIAGGIO QUINDI NIENTE CONVENEVOLI, NON METTERTI COMODO.")

var nome = prompt("Inserisci il tuo nome:")

var km = parseFloat(prompt("Tra quanti chilometri ti buttiamo giu?"));

var eta = parseInt(prompt("Quanto anni hai?"));

var prezzo = 0.21;

var biglietto = prezzo * km ;

var sconto20 = ((biglietto * 20) / 100);

var sconto40 = ((biglietto * 40) / 100);

console.log(biglietto);


/* CONDIZIONI BIGLIETTO */

if (eta < 18) {

    console.log((biglietto - sconto20) + "€");

} else if (eta > 65) {

    console.log((biglietto - sconto40)+ "€") ;

} else {

    console.log((biglietto) + "€");
}

document.getElementById("nome").innerHTML = "Nome passeggero: " + nome;
document.getElementById("km").innerHTML = " Km di viaggio: " + km ;
document.getElementById("prezzo").innerHTML = "Prezzo: " + biglietto + "€";