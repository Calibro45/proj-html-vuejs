<template>
  <div id="app">

    <!-- header -->
    <mainHeader />

    <!-- main -->
    <mainContent />
    
      <!-- sezioni main -->

    <!-- footer -->

  </div>
</template>

<script>
import mainHeader from './components/MainHeader.vue';
import mainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    mainHeader,
    mainContent,
  }
}
</script>

<style lang="scss">
@import "./assets/scss/common.scss";

</style>
