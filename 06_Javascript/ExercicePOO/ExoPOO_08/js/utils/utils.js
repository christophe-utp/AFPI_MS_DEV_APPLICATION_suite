

// URL de l'API que nous allons interoger
const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

async function getPokemonInfo(pokemonNumber) {
   try {
        const response = await fetch(apiUrl+pokemonNumber)
        if(!response.ok) {
            throw new Error('Erreur HTTP : '+ response.status)
        }
        const pokemonData = await response.json()
        console.log(pokemonData)


   }catch(error){
        console.error("Erreur lors de la récuperartion des donnees " + error.message)
   }
}

export default getPokemonInfo