<template>
  <h1>Home Page</h1>
</template>

<script>
import API from '../api';
  export default {
    name: 'Home',
    data(){
      return{
        heroes:[]
      };
    },
    async created(){
      this.heroes = await API.getHeroeById(69);
    }
  }
</script>
