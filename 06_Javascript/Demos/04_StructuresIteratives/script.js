// Boucle for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// break => coupe la boucle
let toto = 10
for (let j = 1; j <= toto; j++) {
    if (j == 5) {
        break
    }
    console.log(j)
}

// continue => saute une itération
for (let k = 1; k <= 10; k++) {
    if (k == 5) {
        continue
    }
    console.log(k);
}

// Boucle Tant que ... (while)

console.log("-------------------");

let i = 1

// /!\ risque de boucle infinie si la condition de sortie ne change pas de valeur à chaque tour de boucle
// Vérification de la condition AVANT d'effectuer l'instruction
while (i <= 10) {
    console.log(i);
    i++
}

// Faire ... Tant que (do ... while)
// Effectue l'instruction AVANT de vérifier la condition
console.log("-------------------");

let j = 1

do {
    console.log(j);
    j++
} while (j <= 10)