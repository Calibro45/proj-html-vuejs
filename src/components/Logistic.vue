<template>
    <section id="logistic">
        <div class="container">

            <div class="row">
                <div class="col-4">
                    <h5 class="section-title">Our buisiness area</h5>
                    <div class="services">
                        <h3 class="title-dark">Logistics Services</h3>
                        <p class="subtitle">We are leaders in providing logistics
                            services whit a set of cutting edge 
                            technologies and a team of experienced
                            and renowned professionals.
                        </p>
                    </div>
                    <div class="services-info">
                        <ol>
                            <li>Tradition</li>
                            <li>Quality</li>
                            <li>Security</li>
                        </ol>
                        <button>Read More</button>
                    </div>
                </div>

                <div class="col-4">

                </div>

                <div class="col-4">

                </div>
            </div>

        </div>
    </section>
</template>

<script>

export default {
    name: 'loisticSec',
}

</script>

<style lang="scss" scoped>
 
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#logistic {
    background-color: $saltpan;

    .row {
        @include row;

        .col-4 {
            width: calc(100% / 3);
            padding: 20px 10px;

            .services {

                .title-dark {
                    font-size: 28px;
                    margin-bottom: 25px;
                    line-height: 1.1;
                }

                .subtitle {
                    font-size: 12px;
                    margin-bottom: 15px
                }
            }

            .services-info {

                ol {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;

                    li {
                        font-size: 14px;
                        padding: 5px;
                        @include backTitle;
                        margin-bottom: 15px;
                    }
                }

                button {
                    @include buttonGreen;
                }
            }
        }
    }
}

</style>