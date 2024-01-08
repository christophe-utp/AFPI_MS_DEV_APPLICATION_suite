// Commentaire sur une ligne ctrl + :

/*
    Commentaire 
        sur
            plusieurs lignes
*/

// alert => Afficher un message en popup au lancement de la page
alert("Hello world !")

// console.log (ou clg) => Afficher un message dans la console du navigateur
console.log("Bonjour depuis la console")

// Chercher une balise html avec le nom de classe result
const result = document.querySelector(".result") 

// Déclaration de variable et affectation de valeur
// prompt => Demande à l'utilisateur de saisir un message
let prenom = prompt("Veuillez saisir votre prénom :")

console.log(prenom);

// Injecter dans la balise result un message et le contenu de la variable prenom.
result.innerHTML = "Bonjour " + prenom