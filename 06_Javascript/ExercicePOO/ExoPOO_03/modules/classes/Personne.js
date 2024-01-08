export class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom
        this.age = age
        this.prenom = prenom
    }

    ToString() {
        console.log(`${this.prenom} ${this.nom} ${this.age}`);
    }

    Parler() {
        console.log(`Bonjour ${this.prenom}`);
    }

    DireBonjour(personne) {
        console.log(`${this.prenom} dit bonjour à : ${personne.prenom}`);
    }
}