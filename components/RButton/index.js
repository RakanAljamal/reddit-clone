import React from 'react';
import { getSvg } from '../../util/icon-utils';
import { Button } from "./custom-styled";

const getButton = (props) => {
    switch (props.type) {
        case 'Apple':
        case 'Google':
            return <Button {...props}
                           image={props.type === 'Apple' ? 'https://www.redditstatic.com/accountmanager/56133cfff407f8c1fb8694b4ef00975c.svg' : 'https://www.redditstatic.com/accountmanager/021031274726bcaef27a190f609eb59f.svg'}>
                <div>
                    <div/>
                </div>
                <span>{props.title}</span>
            </Button>

        default:
            return <Button {...props}>
                {props.type === 'rJoin' && getSvg('Plus')}
                <span>{props.title}</span>
            </Button>

    }
}


const RButton = (props) => {
    return getButton(props);
}

export default RButton;