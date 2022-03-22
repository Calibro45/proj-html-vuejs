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

        <!-- Editorial -->
        <editorialSection />


    </main>
</template>

<script>
import secJumbotron from './Jumbotron.vue';
import logisticSec from './Logistic.vue';
import companySection from './Company.vue';
import loghiSection from './Loghi.vue';
import editorialSection from './Editorial.vue';

export default {
    name: 'mainContent',
    components: {
        secJumbotron,
        logisticSec,
        companySection,
        loghiSection,
        editorialSection,
    }
    
}

</script>

<style lang="scss" scoped>

</style>