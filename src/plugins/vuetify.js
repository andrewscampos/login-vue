import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {VueperSlides, VueperSlide} from 'vueperslides'



Vue.use(Vuetify);
Vue.use(VueperSlides, VueperSlide);

export default new Vuetify({
    icons:{
        iconsFont:'fa' ||  'md'
    }
});
