<template lang="html">
  <div id="app">
    <h3>Got Jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <div class="">
      {{$store.state}} <!-- store is globally available with $ w/in the component bc it is in the vue instance -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'initJokes'
  ])
}
</script>

<style lang="css" scoped>
</style>
