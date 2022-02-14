import React from 'react';
import Link from 'next/link';
import { NavbarSpace } from './Interface';
import style from './items.module.scss';

/**
 * The list of items that will appear in the navigation bar
 */
export default function Items(props :NavbarSpace.NavbarListItem) {
    const itemref = React.useRef<HTMLDivElement>(null)
    const [navheight, setHeight] = React.useState(0);
    
    //This effect will get the navitem height
    //The purpose is to activate the transition effect
    React.useEffect(() => {
        itemref.current &&
        setHeight(itemref.current.scrollHeight)
    }, []);

    return ( 
        <>
            <div id={style.navigationItemsDesktop}>
                <NavItems items={props.items} />
            </div>
            <div id={style.navigationItems}
                style={
                    !props.isChange ?
                    { height: '0px'   } :
                    { height: `${navheight}px` }
                }
                ref={itemref}>
                <NavItems items={props.items} />
            </div>
        </>
    )
}

function NavItems(props :NavbarSpace.NavItemPropsReceive) {
    if(!props.items) return <div></div>;

    return (
        <ul>
            { props.items.map((item :NavbarSpace.NavbarItem, index :number) => {
                return (
                    <li key={index}>
                        { item.icon &&
                            <img src={item.icon} alt={item.icon} />
                        }
                        <Link href={item.path}>
                            <a>{item.name} </a>
                        </Link>
                    </li>
                )
            })
            }
        </ul>
    )
}
