/**
 * Defines the content of the Navbar
*/
export namespace NavbarSpace {
    export interface NavbarProps {
        brandpath?      :string;
        items?          :NavbarItem[];
    }
    export interface NavbarItem {
        name            :string;
        path            :string;
        isActive?       :boolean;
    }
}
