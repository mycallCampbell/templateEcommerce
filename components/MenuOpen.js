import React, {useState} from 'react';

import styles from './MenuOpen.module.css';
import MenuLink from './MenuLink';

function MenuOpen({handleToggle}) {

    return (
        <>  
         <nav className={styles.navlist}>
            <ul>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Category1'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Category2'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Category3'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Category4'}/>
                </li>
                <li className={styles.linkCategory}>
                    <MenuLink urlLink={'#'} navName={'Category5'}/>
                </li>
            </ul>
        </nav>    
        </>
    )
}

export default MenuOpen
