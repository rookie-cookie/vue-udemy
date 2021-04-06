<template lang="html">
  <div class="col-md-12">
    <!-- Type: {{type}} -->
    <Item
      v-for="(item, index) in items"
      key="index"
      v-bind:item="item"
    />

  </div>
</template>

<script>
import Item from './Item.vue'

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
  },
  components:{
    Item
  }
}
</script>

<style lang="css" scoped>
</style>
