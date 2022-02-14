import React from 'react';
import style from './nav.module.scss';
import { NavbarSpace } from './Interface';
import NavItems from './Items';

/**
 * A Resuable and Independent Navbar created for Next.js
    @Props needed to the navbar
    @param brandpath (string)
    An optional path of the image (string). Recomemded size is 170x36
    @param items (item[])
    An array of nav items. Content is defined below
    
    @interface item
    Define the content of each individual nav item
    @param name (string)
    string containing the nav item that will appear
    @param path (string)
    the url string when clicked
    @param icon (string | undefined)
    the url path of the image icon. Recomemded size is 64x64px
 * @example
 * <NavigationBar
        brandpath='brandtitle.png'
        items={[
          {
            name: 'Home',
            path: '/',
            icon: 'homeicon.png'
          },
          {
            name: 'About',
            path: '/'
          },
        ]}
    />
 */
export default function Navbar(props :NavbarSpace.NavbarProps) {
    const [isChange, setChange] = React.useState(false);

    function isCross() :string{
        if(isChange) return style.change;
        return '';
    }

    function handleMenuClick() :void {
        setChange(!isChange);
    }

    return (
        <div id={style.navigation}>
            <div className={style.navcontainer}>
                <div id={style.menuicon} className={isCross()} onClick={handleMenuClick}>
                    <div className={style.bar1}></div>
                    <div className={style.bar2}></div>
                    <div className={style.bar3}></div>
                </div>
                <div className={style.brand}>
                    <img src={props.brandpath} alt={`missing ${props.brandpath}`}/>
                </div>
            </div>
            <NavItems
                items={props.items}
                isChange={isChange}
            />
        </div>
    );
}
