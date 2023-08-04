<template>
  <div class="home">
    <h1>Lista de Juegos Disponibles</h1>
    <Juegos></Juegos>
  </div>
</template>

<script>
// @ is an alias to /src
import Juegos from '@/components/Juegos.vue';

export default {
  name: 'HomeView',
  components: {
    Juegos
  }
}
</script>

<style scoped>
  h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  }
  .home{
    /* background-color: rgb(24, 107, 35); */
    background-color: rgb(72, 193, 88);
  }
</style>