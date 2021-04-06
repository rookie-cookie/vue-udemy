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
  }
}
</script>

<style lang="css" scoped>
</style>
