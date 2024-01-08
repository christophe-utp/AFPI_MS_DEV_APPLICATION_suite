import { Personne } from "./classes/Personne.js";
import { Etudiant } from "./classes/Etudiant.js";

let personne1 = new Personne("Toto", "Toto", 18)
let etudiant1 = new Etudiant("Tata", "Tata", 20, 123)

// personne1.Parler()
// etudiant1.Parler()

personne1.ToString()
etudiant1.ToString()

personne1.DireBonjour(etudiant1)