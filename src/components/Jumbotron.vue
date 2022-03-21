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

            <div class="title-wrap">
                <h1 class="title">
                    <span>Logistics</span> 
                    that goes further.
                </h1>
                <p class="subtitle">For 20 years working with the most innovative in the field of transport.</p>
                <button class="get-cta">get in touch</button>
                <button class="read-cta">read more</button>
            </div>

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
        padding: 5px 10px;

        .navbar {
            @include navbar;
            text-transform: uppercase;
            gap: 20px;
            padding-top: 20px;
            font-weight: 500;
            margin-bottom: 80px;

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
                @include buttonGreen;
            }
        }

        .title-wrap {
            width: 50%;
            margin-left: auto;
            padding: 30px 40px;

            .title {
                font-size: 3.5rem;
                line-height: 1.1;
                margin-bottom: 30px;
                color: $gray-nurse;

                span {
                    background: linear-gradient(0deg, transparent 10%, rgba($blue-lagoon,0.8) 55%, transparent 50%);
                }
            }

            .subtitle {
                margin-bottom: 30px;
                font-size: 1.125rem;
                color: #919194;
            }

            .get-cta {
                @include buttonGreen;
                margin-right: 15px;
            }

            .read-cta {
                @include buttonTransparent;
            }
        }
    }
}
    
</style>