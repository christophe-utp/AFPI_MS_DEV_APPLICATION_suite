export class Adherent {
    constructor(nom, prenom) {
        this.nom = nom
        this.prenom = prenom
        this.listeLivre = []
    }

    emprunterLivre(livre) {
        this.listeLivre.push(livre)
        console.log(`${this.prenom} à emprunté le livre ${livre.titre}`);
    }
}