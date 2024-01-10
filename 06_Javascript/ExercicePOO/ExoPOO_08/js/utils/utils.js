import { Pokemon } from "../classe/Pokemon.js"


// URL de l'API que nous allons interoger
const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

async function getPokemonInfo(pokemonNumber) {
   try {
        const response = await fetch(apiUrl+pokemonNumber)
        if(!response.ok) {
            throw new Error('Erreur HTTP : '+ response.status)
        }
        const pokemonData = await response.json()
       // console.log(pokemonData)

        return new Pokemon(pokemonData.name,pokemonData.weight,pokemonData.height,pokemonData.sprites.front_default)

   }catch(error){
        console.error("Erreur lors de la récuperartion des donnees " + error.message)
   }
}

export async function fetchPokemonData() {
    const pokemonDataList = []
    for(let i = 1; i < 151; i++){
       const pokemonInfo = await getPokemonInfo(i)
       pokemonDataList.push(pokemonInfo)
    }
    return pokemonDataList
}