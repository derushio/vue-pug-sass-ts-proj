export interface NavbarMenuItem {
    pack?: string;
    icon?: string;

    text: string;
    onClick?: () => any;

    children?: NavbarMenuItem[];
}
