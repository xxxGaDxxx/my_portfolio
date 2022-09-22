import React, {Dispatch, SetStateAction} from 'react';
import {Header} from '../../Navbar/Header';
import styles from '../../Common/style/styles.module.css'
import style from './Homepage.module.css'

type HomepageType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Homepage = ({isOpen, setIsOpen}: HomepageType) => {
    return (
        <div className={`${styles.scroll} ${styles.background_black}`}>
                <div className={style.title_card}>
                    <span className={style.hi}>Hi There ! I'm</span><span className={style.name}>Wlad Loban</span><span className={style.developer}>Developer</span>
                </div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>


    );
};
