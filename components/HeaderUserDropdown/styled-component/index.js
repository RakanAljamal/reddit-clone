import {withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import React from "react";
import styled from 'styled-components';
import {Brightness2} from "@material-ui/icons";
import {createMuiTheme, ListItemText, Switch} from "@material-ui/core";


const StyledMenu = styled(Menu)`
    margin-top: 20px;
`;

const StyledMenuItem = styled(MenuItem)`
  &:hover {
    background-color: #0079d3 !important;
    color: #fff;

    .MuiListItemIcon-root {
      color: #fff;
    }
  }
`;
const RotatableNightIcon = styled(Brightness2)`
  transform: rotate(170deg);
`;

const StyledListItemText = styled(ListItemText)`
  & > span {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 24,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(20px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#0079d3',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#fff',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 20,
        height: 20,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({classes, ...props}) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const mainTheme = createMuiTheme({
    palette: {
        type: "light"
    }
});

const darkTheme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

export {StyledMenu, StyledMenuItem, StyledListItemText, RotatableNightIcon, IOSSwitch, mainTheme, darkTheme}