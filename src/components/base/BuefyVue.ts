import { Vue } from 'vue-property-decorator';

export default class BuefyVue extends Vue {
    protected $dialog: {
        alert: Function,
        confirm: Function,
        prompt: Function
    } = {
        alert: () => {},
        confirm: () => {},
        prompt: () => {}
    };
}
