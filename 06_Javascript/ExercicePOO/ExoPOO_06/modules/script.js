import { Arme } from "./classes/Arme.js"
import { Joueur } from "./classes/Joueur.js"
import { Monstre } from "./classes/Monstre.js"
console.log("Exercice 6")


let arme1 = new Arme("épée",20)
let arme2 = new Arme("Bouclier",1)
let setArme = [arme1, arme2]
let choix = Number(prompt("Choisir une arme 0: épée - 1: Bouclier"))
let choixArme = setArme[choix]
let joueur1 = new Joueur("Joueur 1",100, choixArme)
let monstre1 = new Monstre("Dragon",50,arme2,10)

joueur1.Attaquer(monstre1)
monstre1.Attaquer(joueur1)