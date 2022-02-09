"use strict"

//Gömmer retrograd-knappen till en början 
document.querySelector('#retrogradn').style.visibility = 'hidden';


//Skapa en funktion som blandar objekt i en array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5); 
  } 

//Skapa en array med tolv siffror (tolv toner) 
let arr = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


 /*Skapa en funktion som visar arrayen i text 
 på sidan*/
function generator() {
    shuffle(arr);
    document.getElementById('generator').innerHTML = arr;
    document.querySelector('#retrogradn').style.visibility = 'visible';
    document.getElementById('retrogradn').innerHTML = 'Visa retrograd';
}

//Skapa en var som kopierar raden, sedan vänder den om och producerar en retrograd
function retrograd() {
  var kopiera = arr;
  kopiera.reverse();

  document.getElementById('generator').innerHTML = kopiera;
  // document.getElementById('retrogradn').innerHTML = 'Visa modell';
  
  //Funktion för att toggla mellan modell/original-knapp.
  var x = document.getElementById("retrogradn");
  if (x.innerHTML === "Visa retrograd") {
    x.innerHTML = "Visa modell";
  } else {
    x.innerHTML = "Visa retrograd";
  }
}

//Försök till en funktion som gör siffrorna till bokstäver
function bokstav(){
  let arrTvå = arr.toString();
  
  let toner = new Array('C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B');

  document.getElementById('tonnamn').innerHTML=toner[eval(arrTvå)];      
}
//Just nu spottar den bara ut den sista siffran som bokstav, kanske en loop kan fixa detta?

 
 
  

