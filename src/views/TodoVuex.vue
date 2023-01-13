<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr>

    <button @click="currentTab = 'all'"
        :class="{ 'active': currentTab === 'all' }">Todos</button>
    <button @click="currentTab = 'pending'"
        :class="{ 'active': currentTab === 'pending' }">Pendientes</button>
    <button @click="currentTab = 'completed'"
        :class="{ 'active': currentTab === 'completed' }">Completados</button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal">Crear Todo</button>

    <Modal v-if="isOpen" @on:close="closeModal">
        <h1>Nueva tarea</h1>
        <form @submit.prevent="createTodo(newTodoTxt); isOpen=false">

        <input type="text" v-model="newTodoTxt">
        <br>
        <br>
        <button type="submit">Crear</button>

       </form>
    </Modal>

</template>

<script>
import useTodos from '../composables/useTodos'
import Modal from '../components/Modal.vue'
import { ref } from '@vue/reactivity'

export default {
    components: {
        Modal
    },
    setup() {
        const isOpen = ref(false)
        const newTodoTxt = ref('')

        const { pending, currentTab, getTodosByTab, toggleTodo, createTodo } = useTodos()

        return {
            pending,
            currentTab,
            getTodosByTab,
            toggleTodo,
            createTodo,
            isOpen,
            newTodoTxt,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>
    
<style scoped>
button {
    padding: 5px;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #2c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>