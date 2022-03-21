<template>
    <main>

        <!-- jumbotron -->
        <secJumbotron />

        <!-- logistic -->
        <logisticSec />


    </main>
</template>

<script>
import secJumbotron from './Jumbotron.vue';
import logisticSec from './Logistic.vue';

export default {
    name: 'mainContent',
    components: {
        secJumbotron,
        logisticSec,
    }
    
}

</script>

<style lang="scss" scoped>

</style>