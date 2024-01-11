console.log("Rappel sur javascript")


// Déclaration d'un tableau de légumes (2 dimensions)

const vegetables = [
    {
        code: 1,
        nom: "Carotte",
        price: 1.99
    },
    {
        code: 2,
        nom: "Poivron Rouge",
        price: 4.99
    },
    {
        code: 3,
        nom: "Poivron Vert",
        price: 4.99
    },
    {
        code: 4,
        nom: "Haricot Vert",
        price: 3.89
    },
    {
        code: 5,
        nom: "Courgette",
        price: 2.5
    }
];

console.log("----- Parcours du tableau avec .foreach(vegetable) ---------")

// montableau.foreach(vegetable)
vegetables.forEach(function(vegetable) {
    console.log(vegetable.nom)
})

console.log("----- Parcours du tableau avec .foreach(vegetable,index) ---------")

// montableau.foreach(vegetable,index)
vegetables.forEach(function(vegetable,index) {
    console.log(index + " "+ vegetable.nom)
})

// .map()
console.log("----- Parcours du tableau avec .map() ---------")

const copyVegetables = vegetables.map(function(vegetable) {
    if(vegetable.price > 2){
        return vegetable
    }
})

console.table(vegetables)
console.table(copyVegetables)

// .find()
console.log("----- Parcours du tableau avec .find() ---------")

const poivron = vegetables.find(function(vegetable) {
    return vegetable.nom.includes("Poivron")
})

console.table(poivron)

// .filter()
console.log("----- Parcours du tableau avec .filter() ---------")

const poivrons = vegetables.filter(function(vegetable) {
    return vegetable.nom.includes("Poivron")
})

console.table(poivrons)

console.log("------Le Destructuring --------")
console.log("-- Avec Tableau Numérique --")

const tabNum = [1,2,3] 

// Depuis ES6 EcmaScript 6
const [a,b] = tabNum
// ES5
//const a = tabNum[0];

console.log(a)
console.log(b)
//console.log(c)

console.log("-- Avec Tableau associatif --")

const user = {
    firstname : "Jean",
    lastname : "Dupond",
    age : 35,
    active : true
}


// ES5
//const firstname = user.firstname
//const lastname = user.lastname
// const ageUser = user.age
// let isActive = user.active

// ES6 
const {firstname, lastname, active } = user

console.log(firstname)
console.log(lastname)
console.log(active)

console.log("-- Avec des Fonctions()  --")


// ES5
// function getFullName(user){
//     return `${user.firstname} ${user.lastname}`
// }

// ES6
function getFullName({firstname, lastname }){
    return `${firstname} ${lastname}`
}

console.log(getFullName(user))

const monstre = {
    force : 45,
    type : "orc",
    firstname : "toto",
    lastname : "tata"
}

console.log(getFullName(monstre))


console.log("-- Arrow Function --")

// Cas 1 
// fonction sans parametre
let test1 = function () {
    return "Toto"
}

// Equivalent à
let test2 = () => {
    return "toto"
}

// Simplification seuleument si la fonction ne fait qu'un return
let test3 = () => "ToTo"

console.log(test1())
console.log(test2())
console.log(test3())

// Cas 2
// Avec 1 parametre
let test4 = function (monster) {
    return monster.firstname
}

// Equivalent à 
let test5 = (havAFirstname) => {
    return havAFirstname.firstname
}

// Simplification seuleument si la fonction ne fait qu'un return
let test6 = (prenom) => prenom.firstname

console.log(test4(monstre))
console.log(test4(user))

console.log(test5(monstre))
console.log(test5(user))

console.log(test6(monstre))
console.log(test6(user))

// Cas 3 Arrow Function 
// Au moin 2 paramétres
let test7 = function (firstname, lastname) {
    //return (firstname + " " + lastname)
    return `${firstname} ${lastname}`
}

// Equivalent à
let test8 = (fname,lname) => {
    return `${fname} ${lname}`
}

// Simplification seuleument si la fonction ne fait qu'un return
let test9 = (fname,lname) => `${fname} ${lname}`


console.log(test7("Jean","Martin"))
console.log(test8("Jaques","Martin"))
console.log(test8("Jacques","Onneil"))


// nettoyage de la console
console.clear()
console.log("---- Rest Operator -----")
console.log(vegetables)

//let haricot = vegetables[3] // Crée une réference vers l'objet vegetables[3], ce n'est pas une copie
let haricot = {...vegetables[3]} // Creé une copie

haricot.price = 2

console.log(haricot)
console.log(vegetables[3])
console.log(vegetables)

const tabNum2 = [1,2,3,4]
console.table(tabNum2)
// En ES5
//const a = tabNum2[0]
//const b = tabNum2[1]

// En ES6 avec le destructuring
const [d,...e] = tabNum2


const [first,...lereste] = tabNum2


// Affichage
console.log(d)
console.log(e)

// Affichage
console.log(first)
console.log(lereste)

