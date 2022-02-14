/**
 * The NavbarSpace contains a list of interface the will be used only by the Navbar component
*/
export namespace NavbarSpace {
    /**
     * Props needed to the navbar
     * @param brandpath
     * An optional path of the image (string). Recomemded size is 170x36
     * @param items
     * An array of nav items. See NavbarItem
     */
    export interface NavbarProps {
        brandpath?      :string;
        items?          :NavbarItem[];
    }
    /**
     * Used internally, no need to use outside the navbar component
     */
    export interface NavbarListItem {
        items?      :NavbarSpace.NavbarItem[];
        callback?   :() => void;
        isChange    :boolean;
    }
    /**
     * Define the content of each individual nav item
     * @param name :string
     * string containing the nav item that will appear
     * @param path :string
     * the url string when clicked
     * @param icon :string | undefined
     * the url path of the image icon. Recomemded size is 64x64px
     */
    export interface NavbarItem {
        name            :string;
        path            :string;
        icon?           :string;
    }
    export interface NavItemPropsReceive {
        items?      :NavbarSpace.NavbarItem[];
    }
}
