<template>
    <section id="company">
        <div class="container">

            <div class="row">
                <div class="col-6">
                    <h5 class="section-title">About the network</h5>
                    <div class="title-wrap">
                        <h2 class="title-light"><span class="title-decoration-dark">The</span> Company</h2>
                        <p class="subtitle">With all of this expertise comes an unrivalled
                            commitment to customer service.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'companySection',
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#company {
    background: url("../assets/img/about-5.jpg"), $wood-smoke;
    background-position: right;
    background-size: 50%;
    background-repeat: no-repeat;

    .row {

        .col-6 {
            width: 50%;
            padding-right: 15px;

            .title-wrap {
                margin-bottom: 50px;

                .title-light {
                    margin-bottom: 20px;
                    font-size: 2.125rem;

                    .title-decoration-dark {
                        padding: 2px 10px;
                    }
                }
            }
        }
    }
}
    
</style>