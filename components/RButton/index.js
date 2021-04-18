import React from 'react';
import {getSvg} from '../../util/icon-utils';
import {Button} from "./custom-styled";


const RButton = (props) => {
    return <React.Fragment>
        <Button {...props}>
            {props.type === 'rJoin' && getSvg('Plus')}
            <span>{props.title}</span>
        </Button>
    </React.Fragment>
}

export default RButton;