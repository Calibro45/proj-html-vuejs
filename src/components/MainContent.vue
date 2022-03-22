<template>
    <main>

        <!-- jumbotron -->
        <secJumbotron />

        <!-- logistic -->
        <logisticSec />

        <!-- Company -->
        <companySection /> 

        <!-- loghi -->
        <loghiSection />


    </main>
</template>

<script>
import secJumbotron from './Jumbotron.vue';
import logisticSec from './Logistic.vue';
import companySection from './Company.vue';
import loghiSection from './Loghi.vue';

export default {
    name: 'mainContent',
    components: {
        secJumbotron,
        logisticSec,
        companySection,
        loghiSection,
    }
    
}

</script>

<style lang="scss" scoped>

</style>