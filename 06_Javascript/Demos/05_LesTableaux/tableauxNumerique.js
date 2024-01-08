// Tableau numérique => on accède à un élément via son index

let monTableau = []
// let monTableau = new Array() <---- équivalent

monTableau[0] = "Pomme" // Affectation d'une valeur à l'index 0
monTableau[1] = "Poire" // Affectation d'une valeur à l'index 1

console.log(monTableau);
console.table(monTableau); // Afficher le tableau complet
console.log(monTableau[1]); // Afficher uniquement la valeur à l'index 1

monTableau.push("Banane") // Ajouter un élément à la fin de mon tableau
console.table(monTableau);

console.log(monTableau.includes("Banane")) // Vérifie si un élément existe dans notre tableau

// for ... of

/*
    ["Pomme", "Poire", "Banane"]

    Premier tour de boucle => fruit = "Pomme"
    Deuxième tour de boucle => fruit = "Poire"
    troisième tour de boucle => fruit = "Banane"
*/

for (let fruit of monTableau) {
    console.log(fruit);
}

monTableau.forEach((fruit) => {
    console.log(fruit);
})


// Retirer le dernier élément d'un tableau
monTableau.pop()

// Retirer le premier élément d'un tableau
monTableau.shift()

console.table(monTableau);

let monTableau2 = ["Poire", "Banane", "Tomate"]

// Retirer l'élément de l'index 1
// .splice(index de début, nombre d'éléments à supprimer)
monTableau2.splice(1, 1)

// Ajouter un élément à l'index 1
monTableau2.splice(1, 0, "test");
console.table(monTableau2);

// Compter le nombres d'éléments dans un tableau
console.log(monTableau2.length);
