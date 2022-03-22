<template>
    <div class="card-wrapper">
        <figure class="card-header">
            <img :src="element.img" alt="">
        </figure>
        <div class="card-body">
            <h4 class="title-dark">{{ element.titolo }}</h4>
            <p>{{ element.descrizione }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardA',
    props: {
        element: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>

.card-wrapper {
    padding: 35px;
    border-radius: 10px;
    background-color: #fff;

    .card-header {
        margin-bottom: 15px;
    }

    .card-body {

        h4 {
            font-size: 1.125rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 0.75rem;
        }
    }
}
    
</style>