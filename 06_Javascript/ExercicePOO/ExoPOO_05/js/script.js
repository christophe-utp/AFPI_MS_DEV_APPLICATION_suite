import { Article } from "./classes/Article.js"
import { Client } from "./classes/Client.js"

console.log("Exercice 5")

let article1 = new Article("Snickers",4.5,2000)
let article2 = new Article("Mars",2,10)

console.log(article1)
console.log(article2)

let client1 = new Client("Doe","John",1234)
let client2 = new Client("Smart","Jane",5678)

console.log(client1)
console.log(client2)

client1.ajouterArticle(article1,5)
client1.ajouterArticle(article2,2)

client2.ajouterArticle(article2,500)

console.log(client1)
console.log(client2)

client1.passerCommande()

console.log(client1)