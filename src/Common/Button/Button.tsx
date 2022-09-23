import React from 'react';
import {SvgIcon} from '../svg_icon/SvgIcon';
import style from './Button.module.css'

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

            <button  className={style.btn} onClick={onClick}>{props.title} <SvgIcon icon={props.icon}/></button>

    );
};
