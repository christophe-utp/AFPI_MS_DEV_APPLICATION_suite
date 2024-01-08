// Création de la fonction sans paramètres
function hello(){
    console.log("Hello world");
}

// appel de la fonction
hello()
hello()
hello()
hello()

// Création de fonction avec paramètres
function helloParams(lastname, firstname = "Toto"){
    console.log(`Bonjour ${firstname} ${lastname}`);
}

// appel de la fonction avec paramètres
helloParams("Toto", "Tata")
helloParams("Titi", "Tutu")
helloParams("Tata")

function helloReturn(lastname, firstname) {
    let chaine = `Bonjour ${firstname} ${lastname}`
    return chaine
}

console.log("------------------------------------");
let chaine = helloReturn("Toto", "Titi")
console.log(chaine);

// Fonction Callback

console.log("---------------");

function helloCallback() {
   let nom = prompt("Veuillez saisir votre nom")
   helloParams(nom)
}

helloCallback()