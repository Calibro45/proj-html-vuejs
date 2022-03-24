<template>
    <div>
        <div class="title">
            <h5 class="section-title">Send a message</h5>
            <h2 class="title-dark">Get in <span class="title-decoration-light">Touch</span></h2>
            <p class="subtitle">We will respond to your message as soon as possible.</p>
        </div>

        <div class="form">
            <input type="text" name="name" placeholder="Name">
            <input type="email" name="email" placeholder="Email">
            <input type="text" name="phone" placeholder="Phone">
            <div class="position">
                <input type="text" name="info" placeholder="More Info" class="position">
                <i class="fas fa-angle-down"></i>
            </div>
            <textarea name="message" rows="10" placeholder="Message"></textarea>
        </div>
                    
        <button class="button-green">Send</button>
    </div>
</template>

<script>
export default {
    name: 'contactForm',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabili.scss";

.title {
    margin-bottom: 30px;

    .title-dark {
        margin-bottom: 15px;
    }

    .title-decoration-light {
        padding: 0 10px;
    }
}

.form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;

    input {
        flex-grow: 1;

        &:focus {
            color: $river-bed;
        }
    }

    textarea {
        flex-grow: 1;
        resize: none;
    }

    .position {
        position: relative;
        flex-grow: 1;

        input {
            width: 100%;
        }

        i {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
        }
    }
}
    
</style>