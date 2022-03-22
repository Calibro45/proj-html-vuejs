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

                <editorialCard class="card"/>

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
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#editorial {

    .row {
        margin-bottom: 25px;
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
        }
    }

    .card-grid {
        display: flex;

        .card {
            width: calc(100% / 3);
        }

    }
}
</style>