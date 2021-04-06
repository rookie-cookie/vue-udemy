<template lang="html">
  <div class="">
    Type: {{type}}

    {{items}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      type: this.$route.params.type, //$route bc of vue router, params = query strings
      items: []
    }
  },
  watch: {  //will keep track of any changes to the route and will run a function everytime it changes
    '$route': 'fetchItems' //whenever route changes, it will call the method 'fetchItems'
  },
  methods: {
    fetchItems(){  //populate items to the array of data from the api
      this.items = []
      this.type = this.$route.params.type
      let initial_ids = [1,13,14]
      for (let i in initial_ids){
        let id = initial_ids[i]
        fetch(`https://swapi.dev/api/${this.type}/${id}/`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.items.push(json))
      }
    }
  },
  created(){  //loads data on load
    this.fetchItems()
  }
}
</script>

<style lang="css" scoped>
</style>
