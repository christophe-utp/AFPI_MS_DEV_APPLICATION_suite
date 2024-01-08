
// Déclaration des variables
let nbUser,
    nbMystere,
    nbCoups,
    gagne

// Récupération des éléments du DOM
const validerBtn = document.querySelector("#validerBtn")
const rejouerBtn = document.querySelector("#rejouerBtn")
const ligne1 = document.querySelector("#ligne1")
const ligne2 = document.querySelector("#ligne2")
const nbCoupsHtml = document.querySelector("#nbCoups")
const nbUserHtml = document.querySelector("#nbUser")


function StartGame() {
    // Génération d'un nombre aléatoire
    nbMystere = Math.floor(Math.random() * (50 - 1) + 1)
    console.log(nbMystere);


    // Initialiser des champs HTML et réinitialiser nos variables
    nbCoups = 0
    ligne1.innerHTML = "J'ai généré un nombre entre 1 et 50 inclus"
    ligne2.innerHTML = "Essayez de deviner en proposant ci-dessous"
    nbUserHtml.value = ""
    nbCoupsHtml.innerHTML = 0
    validerBtn.disabled = false
    gagne = false
}

// Fonction pour actualiser le nbCoups (Jeu + HTML)
function UpdateNbCoups() {
    nbCoups++
    nbCoupsHtml.innerHTML = nbCoups
}

// Fonction déclenchée par le bouton valider
function Valider(){
    nbUser = Number(nbUserHtml.value)
    
    if (nbUser == nbMystere) {
        UpdateNbCoups()
        EndGame()
    } else if (nbUser < nbMystere) {
        UpdateNbCoups()
        ligne1.innerHTML = `Le nombre mystère est plus grand que ${nbUser}`
    } else {
        UpdateNbCoups()
        ligne1.innerHTML = `Le nombre mystère est plus petit que ${nbUser}`   
    }

    nbUserHtml.value = ""
}

// Logique lors de la fin de la partie
function EndGame(){
    ligne1.innerHTML = "Bravo vous avez gagné !"
    ligne2.innerHTML = `Le nombre mystère était ${nbMystere}`
    gagne = true
    validerBtn.disabled = true
}

// Débloque le jeu pour redémarrer une partie
function Rejouer() {
    StartGame()
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && gagne != true) {
        Valider()
    }
})

window.onload = StartGame()