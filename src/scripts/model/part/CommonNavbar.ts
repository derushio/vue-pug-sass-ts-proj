export interface NavbarMenuItem {
    pack?: string;
    icon?: string;

    text: string;
    children?: NavbarMenuItem[];
}
