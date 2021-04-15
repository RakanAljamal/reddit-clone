import React from 'react';
import styles from './styles.module.scss';
import RButton from "../RButton";
import HeaderUserDropdown from "../HeaderUserDropdown";

const RegistrationContainer = () => {
    return <div className={styles.registrationContainer}>
        <RButton type="rPrimary" title="Log In"/>
        <RButton type="rSecondary" title="Sign Up"/>

        <HeaderUserDropdown />
    </div>
}

export default RegistrationContainer;