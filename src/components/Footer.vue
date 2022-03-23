<template>
    <footer>

        <!-- section link utili -->
        <footerLinks />

        <!-- section credits -->
        <footerCredits />
        
    </footer>
</template>

<script>
import footerLinks from './FooterLink.vue';
import footerCredits from './FooterCredits.vue';

export default {
    name: 'mainFooter',
    components: {
        footerLinks,
        footerCredits,
    }
}
</script>

<style lang="scss" scoped>
    
</style>