import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {
    constructor (solde, titulaire, taux) {
        super(solde, titulaire)
        this.taux = taux
    }

    CalculerInteret () {
        let interet = this.solde * (this.taux/100)
        this.Deposer(interet)
    }
}