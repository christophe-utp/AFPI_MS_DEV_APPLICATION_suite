import { fetchPokemonData } from "./utils/utils.js"

console.log("Pokedex")

const container = document.querySelector(".container")
const loading = document.getElementById("loading")
const img = document.getElementById("pokemon-img")
const name = document.getElementById("name")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let pokemons = []

fetchPokemonData().then((data) => {
    pokemons = data
    displayFirst()
})

function displayFirst(){
    if(pokemons.length > 0) {
        loading.style.display = "none"
        container.style.display = ""
        const item = pokemons[5]
        name.textContent = item.name
        weight.textContent = item.weight
        height.textContent = item.height
        img.src = item.img
    }
}


container.style.display = "none"