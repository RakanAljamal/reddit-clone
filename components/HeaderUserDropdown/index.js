import React from 'react';
import styles from './styles.module.scss';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { StyledMenu, StyledMenuItem, RotatbleNightIcon, RotatableNightIcon } from "./styled-component";
import { Brightness2 } from "@material-ui/icons";
import { ListItemIcon } from "@material-ui/core";


const HeaderUserDropdown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return <span>
        <div onClick={handleClick} className={styles.headerUserDropdownContainer}>
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
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            
            <StyledMenuItem>
                <ListItemIcon>
                    <RotatableNightIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Night mode"/>
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <DraftsIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Drafts"/>
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                    <InboxIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </StyledMenuItem>
        </StyledMenu>
    </span>
}

export default HeaderUserDropdown;