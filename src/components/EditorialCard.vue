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

    .card-body {
        color: $gray-nurse;
        position: absolute;
        right: 25px;
        bottom: 35px;
        left: 25px;
    }
}
    
</style>