export class Bibliotheque {
    // attributs
    constructor(nom) {
        this.nom = nom
        this.listeAdherent = []
        this.listeDocument = []
        this.messageBienvenue()
    }

    // Methodes
    ajouterAdherent(adherent) {
        this.listeAdherent.push(adherent)
        console.log(`${adherent.prenom} s'est inscrit à la bibliotheque ${this.nom}`);
    }

    ajouterDocument(document) {
        this.listeDocument.push(document)
        console.log(`${document.titre} est ajouté à la bibliotheque ${this.nom}`);
    }

    messageBienvenue() {
        console.log(`Bienvenue dans la bibliotheque : ${this.nom}`);
    }
}