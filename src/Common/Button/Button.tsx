import React from 'react';
import {SvgIcon} from '../svg_icon/SvgIcon';

type ButtonType = {
    title: string
    id: string
    callback: (value: any) => void
    icon:string
}

export const Button = (props: ButtonType) => {

    const onClick = () => {
        props.callback({id: props.id, title: props.title,icon:props.icon})
    }

    return (
        <div>
            <SvgIcon icon={props.icon}/>
            <button onClick={onClick}>{props.title}</button>
        </div>
    );
};
