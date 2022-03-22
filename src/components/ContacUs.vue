<template>
    <section id="contact-us">
        <div class="container">
            <div class="row">

                <div class="col-6">
                    <div>
                        <h5 class="section-title">Send a message</h5>
                        <h2 class="title-dark">Get in <span class="title-decoration-light">Touch</span></h2>
                        <p class="subtitle">We will respond to your message as soon as possible.</p>
                    </div>

                    <div class="form">
                        <input type="text" name="name">
                        <input type="email" name="email">
                        <input type="text" name="phone">
                        <input type="text" name="info">
                        <textarea name="message" cols="30" rows="10"></textarea>
                        <button class="button-green">Send</button>
                    </div>

                </div>

                <div class="col-4">

                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'caontacUs',
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

#contact-us {
    background-color: $saltpan;
}
    
</style>