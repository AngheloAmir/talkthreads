import React from 'react';
import style from './Nav.module.scss';
import { NavbarSpace } from './Interface';
import NavItems from './NavItems';

/**
 * A Resuable and Independent Navbar. See the NavbarSpace for props
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
