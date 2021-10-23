import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#2B331F",
                secondary: "#546747",
                tertiary: "#BBC8BA",
                light: "#eee",
                dark: "#222"
            },
        },
    },
});
