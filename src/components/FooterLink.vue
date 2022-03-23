<template>
    <section id="footer-links">
        <div class="container">
            <div class="row">

                <div class="col">
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

                <div class="col">

                </div>

                <div class="col">

                </div>

                <div class="col">

                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'footerLinks',
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
        gap: 1%;

        .col {
            width: calc(97% / 4);

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
                    }
                }
            }
        }
    }
}
    
</style>