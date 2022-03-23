<template>
    <section id="contact-us">
        <div class="container">
            <div class="row">

                <div class="col-8">

                    <contactForm />

                </div>

                <div class="col-4">

                    <contactUsList />   

                </div>

            </div>
        </div>
    </section>
</template>

<script>
import contactForm from './Form.vue';
import contactUsList from './ContactList.vue';

export default {
    name: 'caontacUs',
    components: {
        contactForm,
        contactUsList,
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#contact-us {
    background-color: $saltpan;

    .row {
        gap: 4%;

        .col-8 {
            width: calc((96% / 12)* 8);
            padding: 15px 10px;
        }

        .col-4 {
            width: calc(( 96% / 12 ) * 4);
            padding: 15px 10px;
        }
    }
}
    
</style>