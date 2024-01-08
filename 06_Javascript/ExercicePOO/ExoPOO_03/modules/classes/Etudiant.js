import { Personne } from "./Personne.js";

export class Etudiant extends Personne {
    constructor(nom, prenom, age, nb_etudiant) {
        super(nom, prenom, age)
        this.nb_etudiant = nb_etudiant
    }

    ToString() {
        console.log(`${this.prenom} ${this.nom} ${this.age} N°Etudiant : ${this.nb_etudiant}`);
    }
}