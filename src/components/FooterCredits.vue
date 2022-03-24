<template>
    <section id="footer-credits">
        <div class="container">

            <div class="credits">
                <p>Enjoy the low price. We are trackingany intention of privacy.</p>
            </div>
            <div class="credits">
                <p>&copy; 2020 NEXGEN is proudly powered by <a href="#">Codings</a></p>
            </div>

            <div class="icon">
                <i class="fas fa-arrow-up"></i>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'footerCredits',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#footer-credits {
    background-color: $wood-smoke;
    position: relative;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .credits {
            font-size: 0.75rem;
            padding: 5px 10px;
            margin-top: 25px;

            a {
                color: $blue-lagoon;
            }
        }

        .icon {
            @include iconFooter;
            position: absolute;
            right: 20px;
            bottom: 20px;
            top: -10px;
            
            i {
                color: $wood-smoke;
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
}
    
</style>