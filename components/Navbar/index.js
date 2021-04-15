import React from 'react';
import styles from './styles.module.scss';
import LogoContainer from "../LogoContainer";
import SearchContainer from "../SearchContainer";
import Account from "../Account";

const Navbar = () => {
    return <div className={styles.nav}>
        <LogoContainer/>
        <SearchContainer/>
        <Account/>
    </div>
}

export default Navbar;