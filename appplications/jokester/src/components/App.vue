<template lang="html">
  <div id="app">
    Got Jokes?
    {{$store.state}} <!-- store is globally available with $ w/in the component bc it is in the vue instance -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
</style>
