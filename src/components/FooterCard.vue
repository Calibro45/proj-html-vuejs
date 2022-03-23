<template>
    <div class="card-wrapper">

        <h4 class="card-title">{{ titolo }}</h4>

        <ol class="card-list">
            <li class="list-item" v-for="(link,i) in links" :key="i">
                <a href="#">
                    <i class="fas fa-chevron-right"></i>
                    {{ link }}
                </a>
            </li>
        </ol>

    </div>
</template>

<script>

export default {
    name: 'footerCard',
    props: {
        titolo: String,
        link: String,
        links: Array,
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

.card-wrapper {
    padding: 25px;
    border-radius: 10px;
    background-color: rgba($manatee, 0.1);

    .card-title {
        color: $gray-nurse;
        margin-bottom: 15px;
        font-size: 1.25rem;
    }

    .card-list {

        .list-item {
            margin-bottom: 10px;

            a {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }
    }
}
    
</style>