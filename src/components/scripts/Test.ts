import Vue from 'vue';
import Component from 'vue-class-component';

require('../styles/Test.sass');
@Component({template: require('../views/Test.pug')()})
export default class Test extends Vue {
    private text: string = 'Hello Vue.';
};
