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

        <!-- Newsletter -->
        <newsLetter />


    </main>
</template>

<script>
import secJumbotron from './Jumbotron.vue';
import logisticSec from './Logistic.vue';
import companySection from './Company.vue';
import loghiSection from './Loghi.vue';
import editorialSection from './Editorial.vue';
import newsLetter from './Newsletter.vue';

export default {
    name: 'mainContent',
    components: {
        secJumbotron,
        logisticSec,
        companySection,
        loghiSection,
        editorialSection,
        newsLetter,
    }
    
}

</script>

<style lang="scss" scoped>

</style>