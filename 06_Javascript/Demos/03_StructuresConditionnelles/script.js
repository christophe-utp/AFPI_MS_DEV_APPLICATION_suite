let compte = -300

if (compte > 0) {
    console.log("Votre compte est créditeur !");
}

if(compte < 0) {
    console.log("Votre compte est débiteur !");
}

// Si ... Sinon ...

if (compte > 0) {
    console.log("Votre compte est créditeur !");
} else {
    console.log("Votre compte est débiteur !");
}

// Sinon ... Si

if (compte > 0) {
    console.log("Votre compte est créditeur !");
} else if (compte == 0) {
    console.log("Votre compte est à 0");
} else {
    console.log("Votre compte est débiteur !");
}

let estVrai = true

if (estVrai) {
    console.log("C'est vrai");
} else {
    console.log("c'est faux");
}

console.log(1 === 1); // === => sert à comparer la valeur ET le type // Vrai
console.log("1" === 1); // Faux
console.log(1 == 1); // == => sert à comparer UNIQUEMENT la valeur // Vrai
console.log("1" == 1); // Vrai
console.log(1 != 1); // != => sert à notifier une différence // Faux
console.log(3 != 1); // Vrai
console.log(3 !== 3); // !== => sert à notifier une différence avec la valeur ET le type

/*
    Opérateur logique || => OU
    Opérateur logique && => ET
    Opérateur logique ! => Contraire de ...
*/

let estVrai2 = true

if(!estVrai2) {
    console.log("C'est faux");
} else {
    console.log("C'est vrai");
}


/*
    SWITCH CASE

    switch (condition) {
        case valeur1:
            instruction
            break;
        case valeur3:
            instruction
            break;
            .
            .
            .
        default:
            instruction
            break;
    }
*/

let fruit = "orange"

switch (fruit) {
    case "Orange":
        console.log("Les oranges sont à 2 euros");
        break;
    case "banane":
        console.log("Les bananes sont à 1 euros");
        break;
    default:
        console.log("Votre fruit n'est pas disponible");
        break;
}

// Switch avec range de valeurs

age = 7

switch (age) {
    case age < 3:
        console.log("Votre enfant est trop jeune");
        break;
    case age <= 6:
        console.log("Votre est dans la catégorie BABY");
        break;
    case age <= 8:
        console.log("Votre est dans la catégorie POUSSIN");
        break;
    case age <= 10:
        console.log("Votre est dans la catégorie PUPILLE");
        break;
    default:
        console.log("Ce n'est plus un enfant");
        break;
}

// Forcer le déclenchement du switch
switch (true) {

}