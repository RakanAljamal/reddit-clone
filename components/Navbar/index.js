import React, {useContext, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import LogoContainer from "../LogoContainer";
import SearchContainer from "../SearchContainer";
import RegistrationContainer from "../RegistrationContainer";
import {DarkModeContext} from "../DarkModeProvider";

const Navbar = () => {
    const {dark} = useContext(DarkModeContext);
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted && <div className={dark? styles.darkNav : styles.nav}>
        <LogoContainer/>
        <SearchContainer/>
        <RegistrationContainer/>
    </div>
}

export default Navbar;