<template>
    <section id="jumbotron">
        <div class="container">

            <nav class="navbar">
                <div class="logo-wrap">
                    <h4 class="logo"><span>NEX</span>GEN</h4>
                </div>

                <ol class="link-wrap">
                    <li v-for="(links, i) in navLinks" :key="i">
                        <a :href="links.href">{{ links.link }}</a>
                    </li>
                </ol>

                <div class="get-in">
                    <button>Get in touch</button>
                </div>
            </nav>

        </div>  
    </section>
</template>

<script>

export default {
    name: 'secJumbotron',
    data() {
        return {
            navLinks: [
                {
                    href: '#',
                    link: 'home',
                },
                {
                    href: '#',
                    link: 'services',
                },
                {
                    href: '#',
                    link: 'skills',
                },
                {
                    href: '#',
                    link: 'partners',
                },
                {
                    href: '#',
                    link: 'blog',
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#jumbotron {
    min-height: 615px;
    background-image: url("../assets/img/jumbo.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;

    &::before {
        @include overlay;
    }

    .container {
        position: relative;

        .navbar {
            @include navbar;
            text-transform: uppercase;
            gap: 20px;
            padding-top: 20px;
            font-weight: 500;

            .logo-wrap {
                margin-right: auto;
                letter-spacing: 0.35rem;

                .logo {
                    color: $gray-nurse;

                    span {
                        @include logo;
                    }
                }
            }

            .link-wrap {
                display: contents;
                color: $gray-nurse;

                li a {
                    padding: $padding-link;
                }
            }

            .get-in button {
                background-color: $blue-lagoon;
            }
        }
    }
}
    
</style>