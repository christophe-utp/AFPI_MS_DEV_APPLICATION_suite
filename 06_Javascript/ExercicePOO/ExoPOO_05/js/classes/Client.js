export class Client {
    constructor(nom,prenom,nbclient){
        this.nom = nom
        this.prenom = prenom
        this.nbclient = nbclient
        this.panier = []
    }

    ajouterArticle(article, quantite){
        if (article.quantiteEnStock >= quantite){
            this.panier.push({article, quantite })
        } else {
            console.log("Quantité en stock insuffisante")
            console.log("Quantité disponible pour l'article "+ article.nom + " est de : "+article.quantiteEnStock)
        }
    }

    passerCommande(){
        for(let i=0 ; i< this.panier.length ; i++){
             this.panier[i].article.mettreAJourStock(this.panier[i].quantite)
        }
        /*
        this.panier.forEach(item => {
            item.article.mettreAJourStock(item.quantite)
        })
        */
        console.log("Commande passée avec succès")
        this.panier = []
    }

}