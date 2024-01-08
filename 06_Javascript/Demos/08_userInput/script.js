const result = document.querySelector(".result")

let prenom, nom

function Valider() {
    nom = document.querySelector("#nom").value
    prenom = document.querySelector("#prenom").value

    result.innerHTML = `<h1>${prenom} ${nom}</h1>`
}