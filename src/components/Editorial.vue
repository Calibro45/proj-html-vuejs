<template>
    <section id="editorial">
        <div class="container">
            <div class="row">
                <h5 class="section-title">Our editorial content</h5>

                <div class="title">
                    <h2 class="title-dark">Latest <span class="title-decoration-light">News</span></h2>
                    <p class="subtitle">Every week we publish content about what is best in the business world</p>
                </div>

                <div class="see-cta">
                    <button class="button-green">See all</button>
                </div>
            </div>

            <div class="card-grid">

                <editorialCard class="card"
                v-for="(card, i) in cardItems" :key="i" :card="card"/>

            </div>
        </div>
    </section>
</template>

<script>
import editorialCard from './EditorialCard.vue';

export default {
    name: 'editorialSection',
    components: {
        editorialCard,
    },

    data() {
        return {
            cardItems: [
                {
                    img: require('../assets/img/news-1.jpg'),
                    testo: 'Increasing Creativity is possible for everyone',
                },
                {
                    img: require('../assets/img/news-2.jpg'),
                    testo: 'Because market research is part of the businessplan',
                },
                {
                    img: require('../assets/img/news-3.jpg'),
                    testo: 'Working from home is now a trend',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#editorial {

    .row {
        padding-bottom: 0;

        .section-title {
            width: 100%;
        }

        .title {
            flex-grow: 1;

            .title-dark {
                margin-bottom: 20px;

                .title-decoration-light {
                    padding: 0 10px;
                }
            }
        }

        .see-cta {
            align-self: flex-end;
            margin-top: 20px;
        }
    }

    .card-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 2%;
        margin-top: 35px;
        margin-bottom: 70px;
        padding: 0 10px;

        .card {
            width: calc(96% / 3);
        }
    }
}

@media screen and (max-width: 762px) {

    #editorial .card-grid .card {
        width: calc(96% / 2);
    }

    #editorial .card-grid .card:last-child {
        flex-grow: 1;
    }
}

@media screen and (max-width: 576px) {

    #editorial .card-grid .card {
        width: 100%;
    }
}
</style>