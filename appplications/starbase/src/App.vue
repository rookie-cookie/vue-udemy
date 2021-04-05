<template lang="html">
  <div id="app">
    <h3>{{title}}</h3>
    <!-- <button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button> -->
    <Character/>
  </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team'
    }
  },
  components:{
    Character
  }
}
</script>

<style lang="css" scoped>
</style>
