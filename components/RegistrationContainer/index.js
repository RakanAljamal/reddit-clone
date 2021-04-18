import React from 'react';
import styles from './styles.module.scss';
import RButton from "../RButton";
import HeaderUserDropdown from "../HeaderUserDropdown";
import LoginDialog from "../Dialog";
import { useDialog } from "../../effects/useDialog";

const RegistrationContainer = ({}) => {

    const {on:loginDialogOn, hide:loginDialogHide, getToggleProps}  = useDialog()
    
    return <div className={styles.registrationContainer}>

        { loginDialogOn && <LoginDialog on={loginDialogOn} hide={loginDialogHide}/> }
        <RButton {...getToggleProps()} type="rPrimary" title="Log In"/>
        <RButton type="rSecondary" title="Sign Up"/>

        <HeaderUserDropdown />
    </div>
}

export default RegistrationContainer;