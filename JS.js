

// Utilisation de document.write() JS
document.write("Bienvenue sur Ma Bibliothèque!");

// Utilisation de alert() JS
alert("Bienvenue sur Ma Bibliothèque!");

// Utilisation de prompt() JS
var utilisateur = prompt("Entrez votre nom:");
alert("Bonjour, " + utilisateur + "!");

// Utilisation de document.getElementById() JS
var header = document.getElementById("accueil");
header.innerHTML = "<h2>Bienvenue à Ma Bibliothèque, " + utilisateur + "!</h2>";

// Intégration d'une fonction personnalisée JS
function maFonction() {
    alert("Fonction personnalisée appelée!");
}

// Utilisation des structures conditionnelles JS
var condition = true;
if (condition) {
    maFonction();
}

// Utilisation des structures répétitives JS
for (let i = 0; i <5; i++) {
    console.log("Itération " + i);
}

// Utilisation de la programmation évènementielle JS
var bouton = document.getElementById("monBouton");
bouton.addEventListener("click", function () {
    alert("Bouton cliqué!");
});

