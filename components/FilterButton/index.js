import React from 'react';
import {getSvg} from '../../util/icon-utils';
import {Button} from "./custom-styled";


const FilterButton = (props) => {
    return <Button {...props}>
        {props.icon && getSvg(props.icon)}
        <span>{props.title}</span>
        {props.showArrow && getSvg('Arrow')}
    </Button>
}

export default FilterButton;