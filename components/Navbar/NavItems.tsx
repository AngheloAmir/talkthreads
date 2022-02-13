import React from 'react';
import Link from 'next/link';
import { NavbarSpace } from './Interface';
import style from './items.module.scss';

interface propsReceive {
    items?      :NavbarSpace.NavbarItem[];
    callback?   :() => void;
    isChange    :boolean;

}

/**
 * The single item appears in the navbar
 */
export default function Items(props :propsReceive) {

    return (
        <>
        <div id={style.navigationItemsDesktop}>
                <NavItems items={props.items} />
            </div>
            
            <div
                id={style.navigationItems}
                className={!props.isChange ? style.hiddenNav : ''}
                onClick={() => alert('clicked')}
            >
                <NavItems items={props.items} />
            </div>
        </>
    )
}

interface NavItemsPropsReceive {
    items?      :NavbarSpace.NavbarItem[];
}
function NavItems(props :NavItemsPropsReceive) {
    if(!props.items) return <div></div>;

    return (
        <li>
            { props.items.map((item :NavbarSpace.NavbarItem, index :number) => {
                return (
                    <li key={index}>
                        <Link href={item.path}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                )
            })
            }
        </li>
    )
}
