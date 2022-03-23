<template>
    <section id="footer-links">
        <div class="container">
            <div class="row">

                <div class="col col-12">
                    <div class="logo-wrap">
                        <h4 class="logo"><span class="logo-head">Nex</span> Gen</h4>
                        <p>A functional HTML template for corporate & busines.</p>
                    </div>

                    <ol class="contacts">
                        <li v-for="(el,i) in contactList" :key="i">
                            <a :href="el.href">
                                <i :class="el.icon"></i>
                                {{ el.text }}
                            </a>
                        </li>
                    </ol>

                    <button class="button-transparent">Get in touch</button>
                </div>

                <div class="col col-4 col-6">
                    <footerCard :titolo="'About'" :links="linksA"/>
                </div>

                <div class="col col-4 col-6">
                    <footerCard :titolo="'Transport'" :links="linksB"/>
                </div>

                <div class="col col-4 col-6">
                    <footerCard :titolo="'Support'" :links="linksC"/>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import footerCard from './FooterCard.vue';
import state from '../store.js';

export default {
    name: 'footerLinks',
    components: {
        footerCard,
    },
    data() {
        return {
            contactList: [
                {
                    href: '#',
                    text: '+1 (305) 1234-5678',
                    icon: 'fas fa-phone',
                },
                {
                    href: '#',
                    text: 'hello@example.com',
                    icon: 'fas fa-envelope',
                },
                {
                    href: '#',
                    text: 'Main Avenue, 987',
                    icon: 'fas fa-map-marker-alt',
                },
            ],
        }
    },
    computed: {
        linksA: function() {
            return state.linkListA;
        },
        linksB: function() {
            return state.linkListB;
        },
        linksC: function() {
            return state.linkListC;
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#footer-links {
    background-image: url('../assets/img/bg-10.jpg');
    background-size: cover;
    background-position: center;
    font-size: 0.875rem;

    .row {
        gap: 20px 2%;

        .col {
            width: calc(94% / 4);

            .logo-wrap {
                margin-bottom: 25px;

                .logo {
                    @include logoStyle;
                    margin-bottom: 20px;

                    .logo-head {
                        @include logo;
                    }
                }
            }

            .contacts {
                margin-bottom: 25px;

                li {
                    margin-bottom: 5px;
                    
                    a {
                        padding: 5px 0;
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        i {
                            color: $gray-nurse;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 762px) {

    #footer-links .row .col-12 {
        width: 100%;
    }

    #footer-links .row .col-4 {
        width: calc(94% / 3);
    }

    #footer-links .row .col .contacts {
        display: flex;
        gap: 25px;
    }
}

@media screen and (max-width: 576px) {

    #footer-links .row .col-6 {
        width: calc(94% / 2);
    }

    #footer-links .row .col .contacts {
        display: block;
    }
}
    
</style>