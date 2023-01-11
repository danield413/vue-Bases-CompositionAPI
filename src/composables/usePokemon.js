import {ref} from 'vue'
import axios from 'axios'

const usePokemon = ( pokemonId = '1' ) => {

    const pokemon = ref( null )
    const isLoading = ref( true )
    const errorMessage = ref()


    const searchPokemon = async (pokemonId = '1') => {
        console.log('entro');
        isLoading.value = true
        pokemon.value = null

        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            pokemon.value = data
            errorMessage.value = null
        } catch(e) {
            errorMessage.value = 'Paila, no se puede cargar'
        }
    }

    searchPokemon()

    return  {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon
    }
}                           

export default usePokemon