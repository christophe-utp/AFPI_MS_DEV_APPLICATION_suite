let nb1, nb2, resultat

// L'addition
nb1 = 10
nb2 = 15

resultat = nb1 + nb2
console.log(resultat);
console.log(nb1+nb2);

// La soustraction
resultat = nb1 - nb2
console.log(resultat);

// Les multiplications
resultat = nb1 * nb2
console.log(resultat);

// La division
resultat = nb1 / nb2
console.log(resultat);

// Modulo (reste de la division)
resultat = nb1 % nb2
console.log(resultat);

// Incrémentation et Décrémentation

// Incrémentation
nb1 = nb1 + 1
console.log(nb1);
nb1 += 1 // Opérateur combiné +=
console.log(nb1);
nb1++ // Opérateur d'incrémentation
console.log(nb1);

// Décrémentation
nb1 = nb1 - 1
console.log(nb1);
nb1 -= 1 // Opérateur combiné +=
console.log(nb1);
nb1-- // Opérateur d'incrémentation
console.log(nb1);

console.log("---------------");

// Affichage de la valeur puis incrémentation
console.log(nb1++);

// Incrémentation de la valeur puis affichage
console.log(++nb1);

// équivalent à nb1 = nb1 * nb2
console.log(nb1 *= nb2); // Multiplication combinée

// équivalent à nb1 = nb1 / nb2
console.log(nb1 /= nb2); // Division combinée
