import React from 'react';
import styles from './styles.module.scss';
import LogoContainer from "../LogoContainer";
import SearchContainer from "../SearchContainer";
import RegistrationContainer from "../RegistrationContainer";

const Navbar = () => {
    return <div className={styles.nav}>
        <LogoContainer/>
        <SearchContainer/>
        <RegistrationContainer/>
    </div>
}

export default Navbar;