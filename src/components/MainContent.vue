<template>
    <main>

        <!-- jumbotron -->
        <secJumbotron />

        <!-- logistic -->
        <logisticSec />

        <!-- Company -->
        <companySection /> 


    </main>
</template>

<script>
import secJumbotron from './Jumbotron.vue';
import logisticSec from './Logistic.vue';
import companySection from './Company.vue';

export default {
    name: 'mainContent',
    components: {
        secJumbotron,
        logisticSec,
        companySection,
    }
    
}

</script>

<style lang="scss" scoped>

</style>