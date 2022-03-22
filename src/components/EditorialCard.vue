<template>
    <div class="card-wrapper">

        <figure class="card-image">
            <img src="../assets/img/news-1.jpg">
        </figure>

        <div class="card-body">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'editorialCard',
    
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

    .card-body {
        @include newsCard;
        font-size: 1.25rem;
        line-height: 1.1;
        z-index: 1;
    }
}
    
</style>