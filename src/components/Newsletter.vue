<template>
    <section id="news-letter">
        <div class="container">
            <div class="row">

                <div class="col-6">
                    <div class="title">
                        <h5 class="section-title">Newsletter</h5>
                        <h2 class="title-light"><span class="title-decoration-dark">Know</span> First</h2>
                        <p class="subtitle">Follow closelyand receive content about our company and the news 
                            of the current market.
                        </p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form">
                        <input type="text" name="nome" placeholder="Name">
                        <input type="email" name="email" placeholder="Email">
                        <button class="button-green">Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'newsLetter',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#news-letter {
    background-image: url('../assets/img/bg-1.jpg');
    background-size: cover;
    background-position: center;

    .row {
        align-items: center;

        .col-6 {
            width: 50%;
            .title {
                padding: 30px 20px 30px 50px;
                .title-light {
                    margin-bottom: 20px;
                    
                    .title-decoration-dark {
                        padding: 0 10px;
                        margin-bottom: 20px;
                    }
                }
            }

            .form {
                padding: 30px 50px 30px 20px;

                input {
                    width: 100%;
                    margin-bottom: 15px;
                    background-color: rgba($gray-nurse, 0.5);
                }
            }
        }
    }  
}

</style>