import React, {useContext} from 'react';
import {getSvg} from '../../util/icon-utils';
import {Button} from "./custom-styled";
import {DarkModeContext} from "../DarkModeProvider";


const FilterButton = (props) => {
    const {dark} = useContext(DarkModeContext);
    console.log(dark);
    return <Button {...props} dark={dark}>
        {props.icon && getSvg(props.icon)}
        <span>{props.title}</span>
        {props.showArrow && getSvg('Arrow')}
    </Button>
}

export default FilterButton;