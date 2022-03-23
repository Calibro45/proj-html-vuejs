<template>
    <div>
        <div class="contact-title">
            <h4>Example Inc.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <ol class="contact-list">
            <li class="contact-link"
            v-for="(link, i) in contactList" :key="i">
                <a :href="link.href" class="link">
                    <span class="icon"><i :class="link.icon"></i></span>
                    <span class="text-link">{{ link.text }}</span>
                </a>
            </li>
        </ol>
        <button class="button-transparent">View Map</button>
    </div>
</template>

<script>

export default {
    name: 'contactUsList',
    data() {
        return {
            contactList: [
                {
                    href: '#',
                    text: '+1 (305) 1234-5678',
                    icon: 'fas fa-phone',
                },
                {
                    href: '#',
                    text: 'hello@example.com',
                    icon: 'fas fa-envelope',
                },
                {
                    href: '#',
                    text: 'Main Avenue, 987',
                    icon: 'fas fa-map-marker-alt',
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

@import "../assets/scss/variabili.scss";
@import "../assets/scss/mixins.scss";

.contact-title {
    
    h4 {
        font-size: 1.25rem;
        margin-bottom: 20px;
        color: $river-bed;
    
    }

    p {
        font-size: 0.875rem;
        margin-bottom: 20px;
    }
}

.contact-list {
    color: $blue-lagoon;

    .contact-link {
        margin-bottom: 15px;

        .link {
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 5px 0;
            justify-content: center;
            flex-wrap: wrap;

            &:hover {
                color:$river-bed;
            }
                    
            .icon {
                @include iconStyle;
                background-color: rgba($gumbo, 0.4);
            }

            .text-link {
                flex-grow: 1;
            }
        }
    }
}

.button-transparent {
    color: $blue-lagoon;
    
}    
</style>