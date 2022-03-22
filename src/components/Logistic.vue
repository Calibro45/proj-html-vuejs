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
                        <button class="button-green">Read More</button>
                    </div>
                </div>

                <cardA class="col-4" 
                v-for="(card, i) in cardItem" :key="i" :element="card"/>


            </div>

        </div>
    </section>
</template>

<script>
import cardA from './CardA.vue';

export default {
    name: 'loisticSec',
    components: {
        cardA,
    },
    data() {
        return {
            cardItem: [
                {
                    img: require('../assets/img/gallery-3.jpg'),
                    titolo: 'Technology',
                    descrizione: 'Focused on developing Technology solution adapted to our client\'s needs',
                },
                 {
                    img: require('../assets/img/gallery-5.jpg'),
                    titolo: 'Transport',
                    descrizione: 'We develop operational strategies to improve logistical efficiency.',
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
 
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#logistic {
    background-color: $saltpan;

    .row {
        gap: 3%;

        .col-4 {
            width: calc(94% / 3);

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
            }
        }
    }
}

</style>