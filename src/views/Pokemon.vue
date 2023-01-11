<template>
  <h1 v-if="!pokemon && !errorMessage">poke view</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>

    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{name: 'pokemon'}">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon'

export default {
    setup() {
        const r = useRoute()
        // console.log(r.params)
        const { pokemon, errorMessage, isLoading, searchPokemon } = usePokemon(r.params.id)

        watch(
            () => r.params.id, 
            () => searchPokemon(r.params.id)
        )

        onBeforeRouteLeave(() => window.confirm('¿Está seguro que desea salir?'))

        return {
            pokemon,
            errorMessage,
            isLoading
        }
    }
}
</script>
