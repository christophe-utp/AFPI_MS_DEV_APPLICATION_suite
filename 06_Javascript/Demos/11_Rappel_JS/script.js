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

// ES6 
const {firstname, lastname } = user

console.log(firstname)
console.log(lastname)

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


console.log("-- Arrow Function --")