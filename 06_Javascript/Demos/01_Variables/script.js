/*
    camelCase => Premier mot en minuscule et la première lettre de chaque mots en majuscule
    snake_case => Chaque mot est séparé par un underscore "_"
    PascalCase => Première lettre de chaques mots est en majuscule
    kebab-case => Chaque mot est séparé par un tiret du 6 "-"
*/

// Pour déclarer une variable, on peut utiliser "let" ou "var". On privilégira le premier.
let maVariable

// Au moment de l'initialisation (affectation de valeur), JS définira automatiquement son type selon la syntaxe
let number1 = 15 // type number
let string1 = "texte" // type String (Chaîne de caractères)
let boolean1 = true // type boolean
let emptyVar = null // type null => type par défaut

// On peut également déclarer une constante, donc la valeur sera figée.
const number2 = 2

// Pour afficher une variable ou une valeur dans la console, je l'appelle par son nom
console.log(number1);

// En JS, je peux utiliser l'opérateur typeof pour demander le type d'une variable
// alt + shift + fléche du bas => duplique la ligne
// alt + haut ou bas => déplacer la ligne sélectionnée
console.log(typeof(string1));
console.log(typeof(boolean1));

// Je peux concaténer des valeurs et des variables entre elles grâce au symbole +
// /!\ Cela ne fonctionne pas avec deux nombres
let chaine1 = "Bonjour je m'appelle "
let chaine2 = "Toto"
let concat1 = chaine1 + chaine2
console.log(concat1);

console.log(number1 + number2);

// Le type par défaut d'un prompt sera String
let nbr1 = Number(prompt("Veuillez saisir un nombre"))
let nbr2 = Number(prompt("Veuillez saisir un nombre"))

console.log(nbr1 + nbr2);
console.log(typeof(nbr1));