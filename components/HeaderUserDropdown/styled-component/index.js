import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MuiListItemIcon from '@material-ui/core/ListItemIcon';

import React from "react";
import styled from 'styled-components';
import { Brightness2 } from "@material-ui/icons";

const StyledMenu = styled(Menu)`
  
 .MuiList-root{
  }
  


`;

const StyledMenuItem = styled(MenuItem)`

`;
const RotatableNightIcon = styled(Brightness2)`
  transform: rotate(170deg);
`;

export { StyledMenu, StyledMenuItem, RotatableNightIcon }