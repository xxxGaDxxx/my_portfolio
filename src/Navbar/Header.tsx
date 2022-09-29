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
                <Link className={`${styles.square} ${styles.color_dry} ${style.link}`} to={PATH.ABOUT_ME}>
                    <div className={style.container_title}>
                        <h4 className={styles.title}>
                            <span data-hover='ABOUT'>ABOUT</span> <span data-hover='ME'>ME</span>
                        </h4>
                    </div>

                </Link>
                <Link className={`${styles.square} ${styles.color_dry} ${style.link}`} to={PATH.PROJECTS}>
                    <div className={style.container_title}>
                        <h4 className={styles.title}>
                            <span data-hover='My'>My</span> <span data-hover='portfolio'>portfolio</span>
                        </h4>
                    </div>
                </Link>
                <Link className={`${styles.square} ${styles.color_dry} ${style.link}`} to={PATH.CONTACTS}>
                    <div className={style.container_title}>
                        <h4 className={styles.title}>
                            <span data-hover='Get'>get</span> <span data-hover='in touch'>in touch</span>
                        </h4>
                    </div>
                </Link>
            </>
            : <></>
    );
};
