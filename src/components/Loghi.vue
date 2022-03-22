<template>
    <section id="loghi">
        <div class="container">
            <div class="row">

                <figure class="logo-wrap" v-for="(logo,i) in loghi" :key="i">
                    <img :src="logo" alt="">
                </figure>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'loghiSection',
    data() {
        return {
            loghi: [
                require('../assets/img/logo-5.png'),
                require('../assets/img/logo-1.png'),
                require('../assets/img/logo-2.png'),
                require('../assets/img/logo-3.png'),
                require('../assets/img/logo-4.png'),
                require('../assets/img/logo-5.png'),
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#loghi {
    background-color: $saltpan;

    .row{
        align-items: center;
        gap: 30px;
        min-height: 200px;

        .logo-wrap {
            height: 30px;
            flex-grow: 1;

            img {
                object-fit: cover;
                filter: invert(1) contrast(0.5);
            }
        }
    }
}
    
</style>