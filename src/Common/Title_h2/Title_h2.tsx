import React, {Dispatch, SetStateAction} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './Title_h2.module.css'
import {SvgIcon} from '../svg_icon/SvgIcon';


type TitleH2Type = {
    title: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    icon: string
}

export const TitleH2 = ({title, setIsOpen, icon}: TitleH2Type) => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        setIsOpen(true)
        navigate('/')
    }
    return (
        <div>
            <span className={style.btnClose} onClick={onClickHandler}>
            <SvgIcon icon={'closed'}/>
            </span>
            <h2 className={style.title}>{title}</h2>
            <div className={style.line_icon}>
                <span className={style.line}/>
                <span className={style.icon}><SvgIcon icon={icon}/></span>
                <span className={style.line}/>
            </div>
        </div>
    );
};
