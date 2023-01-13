<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
    <!-- <h2>Titulo del modal</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <button>Salir</button> -->
    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template>

    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:body>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
    </template>

    <template v-slot:exposed="slotProps">
        <h2>{{slotProps.newTitle}}</h2>
    </template>
    
  </Modal>

</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

export default {
    components:{
        Modal
    },
    setup() {
        
        const isOpen = ref(false)

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>

<style>

</style>