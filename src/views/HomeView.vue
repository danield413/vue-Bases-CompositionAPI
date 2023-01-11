<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>

    <button @click="changeIronMan">cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 45 })


    return {
      ironman,
      hulk,

      changeIronMan: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 20
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 43
      },
    }
  }
}
</script>
