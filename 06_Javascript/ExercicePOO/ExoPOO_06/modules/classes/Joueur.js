export class Joueur {
    constructor(nom, pointsDeVie, arme){
        this.nom = nom
        this.pointsDeVie = pointsDeVie
        this.arme = arme
    }

    Attaquer(cible){
        let degats = this.arme.degats
        cible.SubirDegats(degats)
        console.log(`${this.nom} attaque ${cible.nom} et fait ${degats} de point de dégats.`)
    }

    SubirDegats(degats){
        this.pointsDeVie -= degats
        if(this.pointsDeVie <= 0){
            alert(`${this.nom} a été vaincu !`)
        }
    }
}