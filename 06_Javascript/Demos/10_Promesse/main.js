console.log("Démo Promesse")

// set timeout
// setTimeout(() => {
//     console.log("coucou")
// },5000)

const result = document.querySelector("#result")
// Exemple de promesse

const p = new Promise((resolve,reject) => {
    // Logique métier  dans la promise
    let test = true
    setTimeout(() => {
        if(test) {
            resolve({data: "Les données envoyées par la promise", message : "ok"})
        }else {
            reject({message: "Message d'erreur en cas d'echec de la promise"})
        }

    },5000)
})


// Flux d'execution
p.then((response) => {
    result.innerHTML= response.data
}).catch(err => {
    result.innerHTML= err.message
})

result.innerHTML= "En cours d'execution"