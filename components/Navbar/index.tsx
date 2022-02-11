import React from 'react';
import Link from 'next/link';
import style from './nav.module.scss';

/**
 * A Resuable and Independent Navbar
 */
const NavigationBar = () => {
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
                    <img src="brandtitle.png" alt="brandicon"/>
                </div>
            </div>
            <div id={style.navigationItemsDesktop}>
            <ul>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div id={style.navigationItems}
                className={!isChange ? style.hiddenNav : ''}
                onClick={() => alert('clicked')}>
                <ul>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a href="${li.link}">one</a>
                        </Link>
                    </li>
                </ul>
            </div>
    
        </div>
  
      );
    }
export default NavigationBar;
