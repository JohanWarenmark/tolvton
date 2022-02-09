"use strict"

//Gömmer retrograd-knappen till en början 
document.querySelector('#retrogradn').style.visibility = 'hidden';
document.querySelector('#bokstav').style.visibility = 'hidden';

//Skapa en funktion som blandar objekt i en array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5); 
  } 

//Skapa en array med tolv siffror (tolv toner) 
let arr = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let toner = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

 /*Skapa en funktion som visar arrayen i text 
 på sidan*/
function generator() {
    shuffle(arr);
    shuffle(toner);
    document.getElementById('generator').innerHTML = arr;
    document.querySelector('#retrogradn').style.visibility = 'visible';
    document.getElementById('retrogradn').innerHTML = 'Visa retrograd';
    document.querySelector('#bokstav').style.visibility = 'visible';
    document.querySelector('#bokstav').disabled = false;
    document.getElementById('tonnamn').innerHTML = "";
    letter = []
    rettel = []

}

//Skapa en var som kopierar raden, sedan vänder den om och producerar en retrograd
function retrograd() {
  var kopiera = arr;
  kopiera.reverse();
  document.getElementById('generator').innerHTML = kopiera;
  rettel.reverse();
  document.getElementById('tonnamn').innerHTML = rettel;

  //Funktion för att toggla mellan modell/original-knapp.
  var x = document.getElementById("retrogradn");
  if (x.innerHTML === "Visa retrograd") {
    x.innerHTML = "Visa modell";
  } else {
    x.innerHTML = "Visa retrograd";
  }
}

var letter = []
var rettel = []

//Funktionen som gör om varje pryl i arrayen till en bokstav och lägger i en ny Array
function bokstav() {
  arr.forEach(siffra => {
    if (siffra == 0){
      letter.push('C')
      rettel.push('C')
    } else if (siffra == 1){
      letter.push('Db')
      rettel.push('Db')
    } else if (siffra == 2){
      letter.push('D')
      rettel.push('D')
    } else if (siffra == 3){
      letter.push('Eb')
      rettel.push('Eb')
    } else if (siffra == 4){
      letter.push('E')
      rettel.push('E')
    } else if (siffra == 5){
      letter.push('F')
      rettel.push('F')
    } else if (siffra == 6){
      letter.push('F#')
      rettel.push('F#')
    } else if (siffra == 7){
      letter.push('G')
      rettel.push('G')
    } else if (siffra == 8){
      letter.push('Ab')
      rettel.push('Ab')
    } else if (siffra == 9){
      letter.push('A')
      rettel.push('A')
    } else if (siffra == 10){
      letter.push('Bb')
      rettel.push('Bb')
    } else if (siffra == 11){
      letter.push('B')
      rettel.push('B')
    }

    document.querySelector('#bokstav').disabled = true;
    document.getElementById('tonnamn').innerHTML = letter;
  })
}
