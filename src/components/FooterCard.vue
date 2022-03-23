<template>
    <div class="card-wrapper">

        <h4 class="card-title">TItolo</h4>

        <ol class="card-list">
            <li class="list-item">
                <a href="#">
                    <i class="fas fa-chevron-right"></i>
                    Link
                </a>
            </li>
        </ol>

    </div>
</template>

<script>

export default {
    name: 'footerCard',
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

.card-wrapper {
    padding: 30px;
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