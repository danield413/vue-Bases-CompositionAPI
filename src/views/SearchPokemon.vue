<template>
    <h1>Buscar pokemon {{ pokeId }}</h1>

    <form @submit.prevent="onSubmit">
        <input type="number" placeholder="Numero del pokemon"
             v-model="pokeId" ref="txtSearchId">
    </form>
    <br>
    <span>presione enter para buscar</span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { onActivated } from '@vue/runtime-core'

export default {

    setup() {

        const router = useRouter()

        const pokeId = ref(1)
        const txtSearchId = ref()

        onActivated(() => {
            txtSearchId.value.select()
        })

        return {
            pokeId,
            txtSearchId,
            onSubmit: () => {
                router.push({ name: 'pokemon-id', params: { id: pokeId.value } })
            }
        }
    }
}
</script>

<style>

</style>