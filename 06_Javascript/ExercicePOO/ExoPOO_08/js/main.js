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

let currentItem = 0

fetchPokemonData().then((data) => {
    pokemons = data
    console.log(pokemons)
    displayFirst()
})

function displayFirst(){
    if(pokemons.length > 0) {
        loading.style.display = "none"
        container.style.display = ""
        const item = pokemons[currentItem]
        name.textContent = item.name
        weight.textContent = item.weight
        height.textContent = item.height
        img.src = item.img
    }
}


nextBtn.addEventListener("click",function () {
    currentItem++
    if(currentItem > pokemons.length - 1) {
        currentItem = 0
    }
    displayFirst()
})

prevBtn.addEventListener("click",function () {
    currentItem--
    if(currentItem < 0) {
        currentItem = pokemons.length - 1
    }
    displayFirst()
})

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * pokemons.length)
    displayFirst()
})


container.style.display = "none"