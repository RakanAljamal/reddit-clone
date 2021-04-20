import React, {useContext} from 'react';
import styles from './styles.module.scss';
import {
    darkTheme,
    IOSSwitch,
    mainTheme,
    RotatableNightIcon,
    StyledListItemText,
    StyledMenu,
    StyledMenuItem
} from "./styled-component";
import {DonutLarge, ExitToApp, Security} from "@material-ui/icons";
import {Divider, ListItemIcon, MuiThemeProvider} from "@material-ui/core";
import {useDialog} from "../../effects/useDialog";
import LoginDialog from "../LoginDialog";
import SignUpDialog from "../SignUpDialog";
import {useLocalStorage} from "../../effects/useLocalStorage";
import {DarkModeContext} from "../DarkModeProvider";


const HeaderUserDropdown = () => {
    const [checked, setChecked] = useLocalStorage('darkModeEnabled');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {dark, toggleDark} = useContext(DarkModeContext);
    const loginProps = useDialog();
    const signUpProps = useDialog();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSwitchChange = (ev) => {
        setChecked(!checked);
        toggleDark(!checked)
    }


    return <span>
        {
            loginProps.on && <LoginDialog {...loginProps} showOtherDialog={signUpProps.show}/>}
        {signUpProps.on && <SignUpDialog {...signUpProps} showOtherDialog={loginProps.show}/>}

        <div onClick={handleClick}
             className={dark ? styles.darkHeaderUserDropdownContainer : styles.lightHeaderUserDropdownContainer}>
            <svg className={styles.profileIcon} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                <g fill="inherit">
                    <path
                        d="M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"/>
                </g>
            </svg>
            <svg className={styles.arrowIcon} viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"/>
            </svg>
        </div>
        <MuiThemeProvider theme={dark ? darkTheme : mainTheme}>
        <StyledMenu
            disableScrollLock
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <h3 className={styles.menuTitle}>VIEW OPTIONS</h3>
            <StyledMenuItem>
                <ListItemIcon>
                    <RotatableNightIcon fontSize="small"/>
                </ListItemIcon>
                <StyledListItemText primary="Dark mode"/>
                <IOSSwitch checked={checked} onChange={handleSwitchChange}/>
            </StyledMenuItem>
            <h3 className={styles.menuTitle}>MORE STUFF</h3>
            <StyledMenuItem>
                <ListItemIcon>
                    <DonutLarge fontSize="small"/>
                </ListItemIcon>
                <StyledListItemText primary="Reddit Coins"/>
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <Security fontSize="small"/>
                </ListItemIcon>
                <StyledListItemText primary="Reddit Premium"/>
            </StyledMenuItem>
            <Divider/>
             <StyledMenuItem {...loginProps.getToggleProps()}>
                <ListItemIcon>
                    <ExitToApp fontSize="small"/>
                </ListItemIcon>
                <StyledListItemText primary="Log in / Sign Up"/>
            </StyledMenuItem>
        </StyledMenu>
        </MuiThemeProvider>
    </span>
}

export default HeaderUserDropdown;