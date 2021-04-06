<template lang="html">
  <div class="">
    Type: {{type}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      type: this.$route.params.type //$route bc of vue router, params = query strings
    }
  },
  watch: {  //will keep track of any changes to the route and will run a function everytime it changes
    '$route': 'change' //whenever route changes, it will call the method 'change'
  },
  methods: {
    change(){
      this.type = this.$route.params.type
    }
  }
}
</script>

<style lang="css" scoped>
</style>
