var nome = prompt("Ciao! Qual'è il tuo nome?","");
var cognome = prompt("E il tuo cognome?","");
var data = new Date();
giorno = data.getDay();
mese = data.getMonth();
anno = data.getFullYear();
ora = data.getHours();

if(mese == 0) mese = "Gennaio";
if(mese == 1) mese = "Febbraio";
if(mese == 2) mese = "Marzo";
if(mese == 3) mese = "Aprile";
if(mese == 4) mese = "Maggio";
if(mese == 5) mese = "Giugno";
if(mese == 6) mese = "Luglio";
if(mese == 7) mese = "Agosto";
if(mese == 8) mese = "Settembre";
if(mese == 9) mese = "Ottobre";
if(mese == 10) mese = "Novembre";
if(mese == 11) mese = "Dicembre";

var today = document.getElementsByClassName('today-hour')[0];
var modal = document.getElementsByClassName('modal')[0];
var welcome = document.getElementsByClassName('welcome')[0];
var credential = document.getElementsByClassName('name-surname')[0];

var welcomeMessage;
var ultimaModifica = document.lastModified; 

console.log(ora);

if(ora >= 1 && ora <= 15){
    welcomeMessage = 'Buongiorno';
}else if(ora >= 15 && ora <= 19){
    welcomeMessage = 'Buon pomeriggio';
}else{
    welcomeMessage = 'Buonanotte';
}


document.addEventListener("DOMContentLoaded", function() {
    today.innerHTML = "La data odierna : " + giorno + ' ' + mese + ' ' + anno + '<br>' + 'Ultima modifica: ' + ultimaModifica;
    credential.innerHTML = "Benvenuto " + '<br>' + nome + ' ' + cognome;
    welcome.innerHTML = welcomeMessage + ' ' + nome + ' ' + cognome;
    modal.classList.remove('hide');
    modal.classList.add('show');
  });
  document.getElementsByClassName('close-modal')[0].onclick = function(e){
      modal.classList.remove('show');
      modal.classList.add('hide');
  }