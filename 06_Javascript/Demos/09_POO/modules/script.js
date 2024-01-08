import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Adherent } from "./classes/Adherent.js";
import { Document } from "./classes/Document.js";
import { Journal } from "./classes/Journal.js";
import { Volume } from "./classes/Volume.js";

// Création d'objet à partir de la classe Bibliotheque
let aquarese = new Bibliotheque("Aquarese")
let afpi = new Bibliotheque("Afpi")
let m2i = new Bibliotheque("M2i")

// Création d'objet à partir de la classe Adherent
let toto = new Adherent("Toto", "Toto")

// Création d'objet à partir de la classe Document
let lePetitPrince = new Document("Le petit prince")

// Création d'objet à partir de la classe Journal
let leMonde = new Journal("Le Monde", "05/01/2024")

// Création d'objet à partir de la classe Volume
let volume1 = new Volume("volume1", "un auteur")

aquarese.ajouterAdherent(toto)
aquarese.ajouterDocument(lePetitPrince)
toto.emprunterLivre(lePetitPrince)

console.table(aquarese.listeAdherent);
console.table(toto.listeLivre);

leMonde.ToString()