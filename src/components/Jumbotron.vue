<template>
    <section id="jumbotron">
        <div class="container">

            <nav class="navbar">
                <div class="logo">
                    <h4>NEXGEN</h4>
                </div>

                <ol class="navbar-link">
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
                    <li><a href="#">link</a></li>
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

            .logo {
                margin-right: auto;

            }

            .navbar-link {
                display: contents;
            }

            .get-in {

            }
        }
    }
}
    
</style>