let monTexte = document.createElement("p");
monTexte.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.innerHTML.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let index = monTexte.innerHTML.indexOf("i");
document.getElementById("position").innerHTML += " " + index;

let maj = document.getElementById("chaineMaj");
maj.innerHTML = monTexte.innerHTML.toUpperCase();

for (let x = 0; x < maj.innerHTML.length; x++) {
    if(maj.innerHTML.includes("A")) {
    alert("Lettre à trouvé " + x + " fois");
    }
}


