<template>
    <h2 v-if="isLoading">Espere porfa...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">Error en la carga</h5>

    <di v-if="users.length > 0">
       <user-list :users="users" v-slot="{ user }">
            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            <span>{{ user.email }}</span>
        </user-list>
    </di>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList.vue'

export default {
    components: {
        UserList
    },
    setup() {
        const { isLoading, errorMessage, users, prevPage, nextPage, currentPage } = useUsers()

        return {
            currentPage,
            errorMessage,
            isLoading,
            users,
            nextPage,
            prevPage
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}
</style>