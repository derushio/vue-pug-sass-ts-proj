/**
 * MIT License
 *
 * Copyright (c) 2017 Rafael Beraldo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * buefy https://github.com/buefy/buefy
 */
import _Vue from "vue";

import { Dialog, ModalProgrammatic, LoadingProgrammatic, Toast, Snackbar } from "./components";
import { ColorModifiers } from "./helpers";

// Adds Buefy method signatures to Vue instance (ie this.$dialog)
declare module 'vue/types/vue' {
    interface Vue {
        $dialog: typeof Dialog,
        $loading: typeof LoadingProgrammatic,
        $modal: typeof ModalProgrammatic,
        $snackbar: typeof Snackbar,
        $toast: typeof Toast
    }
}

export declare type BuefyConfig = {
    defaultContainerElement?: string,
    defaultIconPack: 'fa' | 'mdi' | string;
    defaultDialogConfirmText?: string;
    defaultDialogCancelText?: string;
    defaultSnackbarDuration: number;
    defaultToastDuration: number;
    defaultTooltipType: ColorModifiers;
    defaultTooltipAnimated: false;
    defaultInputAutocomplete: 'on' | 'off';
    defaultDateFormatter?: string;
    defaultDateParser?: string;
    defaultDayNames?: string;
    defaultMonthNames?: string;
    defaultFirstDayOfWeek?: string;
    defaultTimeFormatter?: string;
    defaultTimeParser?: string;
    defaultModalScroll?: string;
    defaultDatepickerMobileNative: boolean;
    defaultTimepickerMobileNative: boolean;
    defaultNoticeQueue: boolean;
};

declare const _default: {
    install(Vue: typeof _Vue, config: BuefyConfig): void;
};

export {
    Dialog,
    LoadingProgrammatic,
    ModalProgrammatic,
    Snackbar,
    Toast
}

export default _default;
