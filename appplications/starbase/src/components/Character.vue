<template lang="html">
  <div class="">
    {{character}}
  </div>
</template>

<script>
export default {

  data() {
    return {
      character: {

      }
    }
  },
  methods:{
    fetchCharacter(){
      fetch('https://swapi.dev/api/people/', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.character = json)
    }
  },
  created(){
    this.fetchCharacter()
  }
}
</script>

<style lang="css" scoped>
</style>
