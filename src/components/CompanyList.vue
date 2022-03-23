<template>
    <li class="item-wrap">
        <div class="percent" :class="li.percent === 1 ? 'overlay' : ''">
            <p>{{ li.percent }}<i class="fas fa-percent"></i></p>
        </div>

        <div class="description">
            <h4 class="title-light">{{ li.titolo }}</h4>
            <p class="subtitle">{{ li.descrizione }}</p>
        </div>
    </li>
</template>

<script>
export default {
    name: 'companyList',
    props: {
        li: {
            type: Object,
            required: true,
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";


.item-wrap {
    display: flex;
    align-items: center;
    gap: 25px;

    &:not(:last-child) {
        margin-bottom: 50px;
    }

    .percent {
        width: 80px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 5px solid $manatee;
        border-radius: 999px;
        position: relative;

        &.overlay::after {
            content: '';
            display: block;
            width: 5px;
            height: 10px;
            position: absolute;
            left: -5px;
            top: 40%;
            background-color: $blue-lagoon;
            border-radius: 999px;
        }

        p {
            font-size: 1.5rem;
            font-weight: 700;

            i {
                font-size: 0.75rem;
            }
        }
    }

    .description {
        padding: 10px 0;

        .title-light {
            font-size: 1.125rem;
            margin-bottom: 15px;
        }
    }
}

@media screen and (max-width: 576px) {

    .item-wrap .description .title-light {
        color: $river-bed;
    }

    .subtitle {
        color: $gray-nurse;
    }
}
    
</style>