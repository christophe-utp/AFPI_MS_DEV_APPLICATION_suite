export class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email){
        this.titre = titre
        this.nom = nom
        this.prenom = prenom
        this.dateNaissance = dateNaissance
        this.telephone = telephone
        this.email = email
    }

    toString(){
        return `Titre : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`
    }
}


export function testTab(tab){
    if(tab.lenght >= 3){
        return true
    }else {
        return false
    }
}