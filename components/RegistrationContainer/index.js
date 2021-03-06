import React from 'react';
import styles from './styles.module.scss';
import RButton from "../RButton";
import HeaderUserDropdown from "../HeaderUserDropdown";
import LoginDialog from "../LoginDialog";
import { useDialog } from "../../effects/useDialog";
import SignUpDialog from "../SignUpDialog";
import useUser from "../../effects/useUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCommentDots, faPen} from "@fortawesome/free-solid-svg-icons";
import {useNavbarOptions} from "../NavbarProvider";

const RegistrationContainer = ({}) => {
    const user = useUser();
    const options = useNavbarOptions();
    const handleChat = () =>{
        options.toggleChatDialog();
    }
    const {on:loginDialogOn,show:showLoginDialog, hide:loginDialogHide, getToggleProps:loginToggleProps}  = useDialog()
    const {on:signUpDialogOn,show:showSignUpDialog, hide:signUpDialogHide, getToggleProps:signUpToggleProps}  = useDialog()

    return <div className={styles.registrationContainer}>

        { !user && loginDialogOn && <LoginDialog on={loginDialogOn} hide={loginDialogHide} showOtherDialog={showSignUpDialog}/> }
        { !user && signUpDialogOn && <SignUpDialog on={signUpDialogOn} hide={signUpDialogHide} showOtherDialog={showLoginDialog}/> }
        {!user &&<RButton {...loginToggleProps()} type="rPrimary" title="Log In"/>}
        {!user && <RButton {...signUpToggleProps()}type="rSecondary" title="Sign Up"/>}
        {user && <div className={styles.navbarOptionsContainer}>

            <FontAwesomeIcon cursor="pointer" icon={faCommentDots} onClick={handleChat}/>
            <FontAwesomeIcon cursor="pointer" icon={faBell}/>
            <FontAwesomeIcon cursor="pointer" icon={faPen}/>

        </div>}
        <div>
            <HeaderUserDropdown />
        </div>
    </div>
}

export default RegistrationContainer;
