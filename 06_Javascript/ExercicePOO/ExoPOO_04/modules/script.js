import { CompteBancaire } from "./classes/CompteBancaire.js";
import { CompteEpargne } from "./classes/CompteEpargne.js";

let compteBancaire = new CompteBancaire(1000, "Toto")
let compteEpargne = new CompteEpargne(20000, "Tata", 6)

compteBancaire.Deposer(100)
compteBancaire.Retrait(200)

console.log("-----------------");

compteEpargne.Deposer(1000)
compteEpargne.CalculerInteret()