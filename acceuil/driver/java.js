/*let Name = document.querySelector("#name");

Name.innerHTML = prompt("votre nom" + Name);
*/


//TIME
var myVar = setInterval(myTimer, 100);

function myTimer() {
  var d = new Date();
  let heure = document.getElementById("heure");
  heure.innerHTML = d.toLocaleTimeString();
  heure.style.color = "white";
}

// icon Menu

function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}