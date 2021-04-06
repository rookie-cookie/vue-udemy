<template lang="html">
  <div id="app">
    <h3>{{title}}</h3>
    <!-- <button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button> -->
    <div class="col-md-12">
      <Character
        v-for="(id, index) in initial_ids"
        v-bind:id="id"
        key="index"
      />
    </div>

  </div>
</template>

<script>
import Character from './components/Character.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Generate Your Team',
      initial_ids: [1,13,14]
    }
  },
  components:{
    Character
  }
}
</script>

<style lang="css" scoped>
</style>
