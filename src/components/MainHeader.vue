<template>
    <header id="info-nav">
        <div class="container">

            <nav class="navbar">
                <div class="hours">
                    <p><i class="fas fa-clock"></i> Open Hours: Mon - Sat - 9:00 - 18:00</p>
                </div>

                <ol class="contact-list">
                    <li class="info-link" v-for="(link, i) in infoLinks" :key="i">
                        <a :href="link.href">
                            <span><i :class="link.icon"></i></span>
                            {{ link.info }}
                        </a>
                    </li>
                </ol>
            </nav>

        </div>
    </header>
</template>

<script>
export default {
    name: 'mainHeader',
    data() {
        return {
            infoLinks: [
                {
                    icon: 'fas fa-phone-alt',
                    href: '#',
                    info: '+1 (305) 1234-5678',
                },
                {
                    icon: 'fas fa-envelope',
                    href: '#',
                    info: 'hello@example.com',
                },
                {
                    icon: 'fab fa-facebook-f',
                    href: '#',
                },
                {
                    icon: 'fab fa-twitter',
                    href: '#',
                },
                {
                    icon: 'fab fa-linkedin-in',
                    href: '#',
                },
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#info-nav {
    background-color: $outer-space;

    .navbar {
        @include navbar;
        font-size: 12px;
        padding: 8px 10px;
        row-gap: 10px;

        .hours {
            margin-right: auto;
            padding: 5px 8px;
        }

        .contact-list {
            display: contents;

            .info-link:not(:last-child) {
                margin-right: 10px;
            }

            a {
                padding: 5px 8px;
            }   

            span {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                width: 20px;
                height: 20px;
            }
        }
    }
}

@media screen and (max-width: 762px) {

    #info-nav .navbar {
        justify-content: center;
    }
}

@media screen and (max-width: 576px) {

    #info-nav .navbar .hours {
        width: 100%;
        text-align: center;
    }
}
    
</style>