var chilometri = prompt ("Inserisci il numero di chilometri da percorrere");
var età = prompt ("Inserisci la tua età");
var scontoMinorenni = 20;
var scontoOver65 = 40;
var prezzoTotale = chilometri * 0.21;

if (età < 18) {
  prezzoTotale = (prezzoTotale - (prezzoTotale / 100 *20));
  document.writeln("Il prezzo del tuo biglietto con lo sconto minorenni è: euro " + prezzoTotale);
} else if (età > 65) {
  prezzoTotale = (prezzoTotale - (prezzoTotale / 100 *40));
  document.writeln("Il prezzo del tuo biglietto con lo sconto over65 è: euro " + prezzoTotale);
} else {
  prezzoTotale = prezzoTotale;
  document.writeln("Il prezzo del tuo biglietto per Adulti è: euro " + prezzoTotale);
}
