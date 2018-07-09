<template lang='pug'>
header.vue-common-navbar.navbar(:class='{"is-fixed-top": isFixed}'
        role='navigation' aria-label='main navigation')
    .container
        h1.navbar-brand
            a.navbar-item(v-if='brandImg != "" || brand != ""'
                    @click='doAction(onBrandClick)')
                img(v-if='brandImg != ""' :src='brandImg' :alt='brandImgAlt')
                span(v-if='brand != ""') {{ brand }}

            .navbar-burger(:class='{"is-active": showNavMenu}'
                    @click='invertShowNavMenu')
                span(v-for='i in 3' :key='i')

        nav.navbar-menu(:class='{"is-active": showNavMenu}')
            //- menus
            .navbar-start
                template(v-for='menu in menus')
                    .navbar-item.has-dropdown.is-hoverable(v-if='menu.children != null')
                        a.navbar-link.icon-text(@click='doAction(menu.onClick)')
                            b-icon(v-if='menu.icon != null' :pack='menu.pack || "mdi"'
                                :icon='menu.icon')
                            span {{ menu.text }}
                        .navbar-dropdown
                            a.navbar-item.icon-text(v-for='child in menu.children' @click='doAction(child.onClick)')
                                b-icon(v-if='child.icon != null' :pack='child.pack || "mdi"'
                                    :icon='child.icon')
                                span {{ child.text }}
                    a.navbar-item.icon-text(v-if='menu.children == null' @click='doAction(menu.onClick)')
                        b-icon(v-if='menu.icon != null' :pack='menu.pack || "mdi"'
                                :icon='menu.icon')
                        span {{ menu.text }}
            //- submenus
            .navbar-end
                template(v-for='menu in submenus')
                    .navbar-item.has-dropdown.is-hoverable(v-if='menu.children != null')
                        a.navbar-link.icon-text(@click='doAction(menu.onClick)')
                            b-icon(v-if='menu.icon != null' :pack='menu.pack || "mdi"'
                                :icon='menu.icon')
                            span {{ menu.text }}
                        .navbar-dropdown
                            a.navbar-item.icon-text(v-for='child in menu.children' @click='doAction(child.onClick)')
                                b-icon(v-if='child.icon != null' :pack='child.pack || "mdi"'
                                    :icon='child.icon')
                                span {{ child.text }}
                    a.navbar-item.icon-text(v-if='menu.children == null' @click='doAction(menu.onClick)')
                        b-icon(v-if='menu.icon != null' :pack='menu.pack || "mdi"'
                                :icon='menu.icon')
                        span {{ menu.text }}
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavbarMenuItem } from '@/scripts/model/part/CommonNavbar';

/**
 * Vue Component
 */
@Component
export default class CommonNavbar extends Vue {
    @Prop({type: String, default: () => ''})
    protected brand?: string;
    @Prop({type: String, default: () => ''})
    protected brandImg?: string;
    @Prop({type: String, default: () => ''})
    protected brandImgAlt?: string;
    @Prop({type: Function, default: () => {}})
    protected onBrandClick?: () => any;

    @Prop({type: Array})
    protected menus?: NavbarMenuItem[];
    @Prop({type: Array})
    protected submenus?: NavbarMenuItem[];
    @Prop({type: Boolean, default: () => false})
    protected isFixed?: boolean;

    protected showNavMenu = false;

    protected beforeMount(): void {
        if (this.isFixed) {
            document.getElementsByTagName('html')[0]
                .classList.add('has-navbar-fixed-top');
        }
    }

    protected invertShowNavMenu() {
        this.showNavMenu = !this.showNavMenu;
    }

    protected doAction(action: () => any | undefined): void {
        if (action == null) {
            return;
        }

        action();
    }
}
</script>

<style lang='sass' scoped>
@import 'entry/variable'

.vue-common-navbar
</style>
