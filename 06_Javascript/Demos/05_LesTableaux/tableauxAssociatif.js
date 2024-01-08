// Les tableaux associatifs / objet => on accède à un élément via une clé
// {clé : valeur}

let personne = {
    nom : "Toto",
    prenom : "Tata",
    sexe : "M",
    age : 30
}

console.log(personne.prenom);

console.log(`Bonjour je suis ${personne.prenom}, j'ai ${personne.age} ans`);

// for ... in

for (let key in personne) {
    console.log(`${key} : ${personne[key]}`);
}