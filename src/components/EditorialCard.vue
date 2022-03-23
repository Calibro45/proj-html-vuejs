<template>
    <div class="card-wrapper">

        <figure class="card-image">
            <img :src="card.img">
        </figure>

        <div class="card-body">
            <p>{{ card.testo }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'editorialCard',
    props: {
        card: {
            type: Object,
            required: true,
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

.card-wrapper {
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &::after {
        @include cardOverlay;
        background-color: rgba($wood-smoke, 0.5);
    }

    .card-image {
        aspect-ratio: 1
    }

    .card-body {
        @include newsCard;
        font-size: 1.125rem;
        line-height: 1.1;
        text-align: center;
        z-index: 1;
    }
}
    
</style>