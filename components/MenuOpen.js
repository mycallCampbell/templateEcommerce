import React, {useState} from 'react';

import styles from './MenuOpen.module.css';
import MenuLink from './MenuLink';

function MenuOpen({handleToggle}) {

    return (
        <>  
         <nav className={styles.navlist}>
            <ul>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Product1'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Product2'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Product3'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Product4'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Product5'}/>
                </li>
            </ul>
        </nav>    
        </>
    )
}

export default MenuOpen
