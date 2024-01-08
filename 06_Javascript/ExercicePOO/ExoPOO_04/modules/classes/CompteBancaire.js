export class CompteBancaire {
    constructor(solde, titulaire) {
        this.solde = solde
        this.titulaire = titulaire
    }

    Deposer(montant) {
        this.solde += montant
        console.log(`${montant}€ déposé`);
        this.AfficherSolde()
    }

    Retrait(montant) {
        if (montant <= this.solde) {
            this.solde -= montant
            console.log(`${montant}€ retiré`);
            this.AfficherSolde()
        } else {
            alert("Solde insuffisant")
        }
    }

    AfficherSolde() {
        console.log(`${this.titulaire} : il vous reste ${this.solde}€ sur votre compte`);
    }
}