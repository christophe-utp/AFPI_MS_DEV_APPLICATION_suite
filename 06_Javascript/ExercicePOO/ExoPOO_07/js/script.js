import { Contact, testTab } from "./classes/Contact.js"

console.log("Exercie Annuaire")

// Récuperation des élements du DOM
const tableau = document.querySelector('#tableau')
const btnValider = document.querySelector('#btnValider')

// Tableau de contact
const Contacts = []


// Ajout de faux contact à mon annuaire
function createFakeContact(){
    // Création d'un tableaux de faux contacts
    let annuaire = [
        {
            titre: "Mr",
            nom: "Dupont",
            prenom: "Jean",
            dateNaissance: "08 10 1973",
            telephone:"+(33)6 12 36 54 78",
            email: "jdupont@gmail.com"
        },
        {
            titre: "Mme",
            nom: "Doe",
            prenom: "Jeane",
            dateNaissance: "08 10 1985",
            telephone:"+(33)6 12 36 54 72",
            email: "jdoe@gmail.com"
        },
        {
            titre: "Mr",
            nom: "Martin",
            prenom: "Jacques",
            dateNaissance: "08 10 1933",
            telephone:"+(33)6 12 36 54 11",
            email: "jmartin@gmail.com"
        }
    ]

    // Ajout des contacts à la collection de Contacts
    for(let infoContact in annuaire){
      
       /*
       console.log("debut itération")
       console.log(annuaire[infoContact].prenom)
       console.log("fin itération")
       */
        let tmp = new Contact(annuaire[infoContact].titre,annuaire[infoContact].nom,annuaire[infoContact].prenom,annuaire[infoContact].dateNaissance,annuaire[infoContact].telephone,annuaire[infoContact].email)
        Contacts.push(tmp)
    }

}

// Mise à jour de mon tableaux HTML
function updateTab(){
    // On vide le tableau HTML
    tableau.innerHTML = "";
    // On le remplie ( le tableau HTML ) avec les valeurs du tableau javascript Contacts
    Contacts.forEach((contact) => {
        tableau.innerHTML += `
        <tr>
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        </tr>
        `
    } )
}

// Click sur le bouton ajouter
btnValider.onclick = () => {
    console.log("clique sur le bouton")
    // Récuperation de la saisie utilisateur
    const nom = document.querySelector('#Nom').value
    const prenom = document.querySelector('#Prenom').value
    const telephone = document.querySelector('#Telephone').value
    const email = document.querySelector('#Email').value
    const dateNaissance = document.querySelector('#dateNaissance').value
    const titre = document.querySelector('#Mr').checked ? "Mr" : "Mme"
   
    console.log(titre)
    if(nom != "" && prenom != "" && email != ""){
        let tmp = new Contact(titre,nom,prenom,dateNaissance,telephone,email)
        Contacts.push(tmp)
        updateTab()
    }else {
        console.log("Formulaire invalide !!!")
    }
    
    // remttre à 0 le formulaire
    resetForm()
   
}

function resetForm(){
    document.querySelector('#Nom').value = ""
    document.querySelector('#Prenom').value = ""
    document.querySelector('#dateNaissance').value = ""
    document.querySelector('#Telephone').value = ""
    document.querySelector('#Email').value = ""
}


function init(){
    console.log(Contacts)
    createFakeContact()
    console.log(Contacts)
    console.log(Contacts.length)
    updateTab()
}


if(testTab(Contacts)){
    console.log("ton tableau à au moins 3 élements !!!!")
}

window.onload = init()