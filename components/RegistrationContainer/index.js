import React from 'react';
import styles from './styles.module.scss';
import RButton from "../RButton";
import HeaderUserDropdown from "../HeaderUserDropdown";
import LoginDialog from "../LoginDialog";
import { useDialog } from "../../effects/useDialog";
import SignUpDialog from "../SignUpDialog";

const RegistrationContainer = ({}) => {

    const {on:loginDialogOn,show:showLoginDialog, hide:loginDialogHide, getToggleProps:loginToggleProps}  = useDialog()
    const {on:signUpDialogOn,show:showSignUpDialog, hide:signUpDialogHide, getToggleProps:signUpToggleProps}  = useDialog()
    
    return <div className={styles.registrationContainer}>

        { loginDialogOn && <LoginDialog on={loginDialogOn} hide={loginDialogHide} showOtherDialog={showSignUpDialog}/> }
        { signUpDialogOn && <SignUpDialog on={signUpDialogOn} hide={signUpDialogHide} showOtherDialog={showLoginDialog}/> }
        <RButton {...loginToggleProps()} type="rPrimary" title="Log In"/>
        <RButton {...signUpToggleProps()}type="rSecondary" title="Sign Up"/>

        <div>
            <HeaderUserDropdown />
        </div>
    </div>
}

export default RegistrationContainer;