
function myButtonClick(){
    alert("Vous avez cliqué sur le bouton")
}

function onMouseOver(){
    alert("Vous avez survolé le bouton")
}

function onDblClick(){
    alert("Vous avez cliqué deux fois sur le bouton")
}

function functionArg(arg) {
    switch (arg) {
        case 1 : alert("Vous avez cliqué sur le bouton 1"); break;
        case 2 : alert("Vous avez cliqué sur le bouton 2"); break;
        case 3 : alert("Vous avez cliqué sur le bouton 3"); break;
        case 4 : alert("Vous avez cliqué sur le bouton 4"); break;
    }
}

// écoute le clavier de l'utilisateur, si l'utilisateur utilise la touche Enter, ça déclenche en événement
document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        let message = document.querySelector(".inputText")
        alert("Vous avez appuyé sur Enter \nMessage : " + message.value)
        message.value = ""
    }
})


// écoute la souris de l'utilisateur, ça déclenche en événement
document.addEventListener("click", (event) => {
    // récupére la valeur "data-key"
    let valeur = event.target.dataset.key
    console.log(valeur);
})