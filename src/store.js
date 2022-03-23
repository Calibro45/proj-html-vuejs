import Vue from 'vue';

const state = Vue.observable(
    {
        linkListA: [
            'The company',
            'Institutional',
            'Social & Events',
            'Innovation',
            'Environment',
            'Technology',
        ],
        linkListB: [
            'Industrialized',
            'Chemicals',
            'Package Liquids',
            'Construction',
            'Laminated Wood',
            'And others',
        ],
        linkListC: [
            'Responsibility',
            'Terms of Use',
            'About Cookies',
            'Privacy Policy',
            'Accessibility',
            'Information',
        ],
    }
)

export default state;