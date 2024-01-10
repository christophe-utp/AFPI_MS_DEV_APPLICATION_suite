console.log("Démo fetch")

// URL de l'API que nous allons interroger
const apiURL = "https://pokeapi.co/api/v2/pokemon/999999999";

// Utilisation de fetch

fetch(apiURL)
    .then(response => {
        // Verifier si la reponse est ok (HTTP 200)
        if(!response.ok){
            throw new Error(`La requete a echoue avec un statut ${response.data}`)
        }
        // Renvoie des donnees
        // Parse la reponse json
        // .json à { } ou [ ]
        return response.json()
    })
    .then(data => {
        // Traitement des donnees de la reponse
        console.log("Donnee recu :")
        console.log(data)
    })
    .catch(error => {
        // Gestion des erreurs
        console.error("Une erreur :" + error)
    })