<template>
  <div id="app">

    <!-- header -->
    <mainHeader />

    <!-- main -->
    <mainContent />

    <!-- footer -->
    <mainFooter />

  </div>
</template>

<script>
import mainHeader from './components/MainHeader.vue';
import mainContent from './components/MainContent.vue';
import mainFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    mainHeader,
    mainContent,
    mainFooter,
  }
}
</script>

<style lang="scss">
@import "./assets/scss/common.scss";

</style>
