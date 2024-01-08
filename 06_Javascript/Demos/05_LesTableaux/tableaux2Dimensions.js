let legumes = ["Carottes", "Choux", "Navets"]
let fruit = ["Raisin", "Kiwi", "Banane"]

// Création d'un tableau à deux dimensions
let primeur = [legumes, fruit]

console.table(primeur);

console.log(primeur[0][1]);
console.log(primeur[1][2]);

// Avec tableau associatif

let zoo = [
    {
        nom: "Simba",
        espece: "Lion",
        continent: "Afrique"
    },
    {
        nom: "Jack",
        espece: "Kangourou",
        continent: "Océanie"
    }
]

console.table(zoo);
console.log(`Je suis ${zoo[0].nom}, et je suis un ${zoo[1].espece}`);
console.log("Je suis " + zoo[0].nom + ", et je suis un " + zoo[1].espece);