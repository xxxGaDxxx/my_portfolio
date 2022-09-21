import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {PATH} from './Pages';
import styles from '../Common/style/styles.module.css';

type HeaderType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = ({isOpen, setIsOpen}: HeaderType) => {

    const onClickHandler = () => {
        setIsOpen(false)
    }
    return (
        isOpen ? <>
                <div onClick={onClickHandler} className={`${styles.square} ${styles.color_dry}`}>

                    <Link to={PATH.ABOUT_ME}>ABOUT ME</Link>
                </div>
                <div onClick={onClickHandler} className={`${styles.square} ${styles.color_dry}`}>
                    <Link to={PATH.PROJECTS}>PROJECTS</Link>
                </div>
                <div onClick={onClickHandler} className={`${styles.square} ${styles.color_dry}`}>
                    <Link to={PATH.CONTACTS}>CONTACTS</Link>
                </div>
            </>
            : <></>
    );
};
