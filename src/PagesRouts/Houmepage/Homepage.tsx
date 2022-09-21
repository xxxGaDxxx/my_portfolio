import React, {Dispatch, SetStateAction} from 'react';
import {Header} from '../../Navbar/Header';
import styles from '../../Common/style/styles.module.css'

type HomepageType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Homepage = ({isOpen, setIsOpen}: HomepageType) => {
    return (
        <div className={`${styles.scroll} ${styles.background_black}`}>
            <div className={styles.square}>
                <span>Hi There ! I'm</span><span>Wlad Loban</span><span>Web Developer</span>
            </div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>


    );
};
