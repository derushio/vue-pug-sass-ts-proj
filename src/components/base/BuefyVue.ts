import { Vue } from 'vue-property-decorator';

export default class BuefyVue extends Vue {
    protected $dialog: {
        alert(option: string | DialogOption): void;
        confirm(option: string | DialogOption): void;
        prompt(option: string | DialogOption): void;
    } = {
        alert: (option) => {},
        confirm: (option) => {},
        prompt: (option) => {}
    }

    protected $snackbar: {
        open(option: string | SnackbarOption): void;
    } = {
        open: (option) => {}
    }

    protected $toast: {
        open(option: string | ToastOption): void;
    } = {
        open: (option) => {}
    }
}
