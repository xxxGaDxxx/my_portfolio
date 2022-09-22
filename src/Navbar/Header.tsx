import React, {Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import {PATH} from './Pages';
import styles from '../Common/style/styles.module.css';
import style from './Header.module.css'

type HeaderType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = ({isOpen, setIsOpen}: HeaderType) => {

    const onClickHandler = () => {
        // setIsOpen(false)
    }

    return (
        isOpen ? <>
                <Link className={`${styles.square} ${styles.color_dry}`} to={PATH.ABOUT_ME}>
                    ABOUT ME
                </Link>
                <Link className={`${styles.square} ${styles.color_dry}`} to={PATH.PROJECTS}>
                    PROJECTS
                </Link>
                <Link className={`${styles.square} ${styles.color_dry}`} to={PATH.CONTACTS}>
                    CONTACTS
                </Link>
            </>
            : <></>
    );
};
