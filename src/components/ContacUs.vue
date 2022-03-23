<template>
    <section id="contact-us">
        <div class="container">
            <div class="row">

                <div class="col-8 col-12">

                    <contactForm />

                </div>

                <div class="col-4 col">

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

@media screen and (max-width: 576px) {

    #contact-us .row .col-12 {
        width: 100%;
    }

    #contact-us .row .col {
        width: 80%;
    }
}
    
</style>