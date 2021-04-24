import React, {useContext} from 'react';
import {Button} from "./custom-styled";
import {DarkModeContext} from "../DarkModeProvider";
import RedditIcon from "../RedditIcon";


const FilterButton = (props) => {
    const {dark} = useContext(DarkModeContext);
    return <Button {...props} dark={dark}>
        {props.icon && <RedditIcon icon={props.icon}/>}
        <span>{props.title}</span>
        {props.showArrow && <RedditIcon icon='Arrow'/>}
    </Button>
}

export default FilterButton;