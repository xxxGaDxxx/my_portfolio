import React, {Dispatch, SetStateAction} from 'react';
import {TitleH2} from '../../Common/Title_h2/Title_h2';
import style from './Contacts.module.css'
import styles from '../../Common/style/styles.module.css'
import {SvgIcon} from '../../Common/svg_icon/SvgIcon';

type ContactsType = {
    id: string
    title: string
    value: string
    icon: string
}

type ContactsPropsType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


export const Contacts = ({isOpen, setIsOpen}: ContactsPropsType) => {

    const contacts: ContactsType[] = [
        {id: '1', title: 'Phone', value: '+375336211885', icon: 'phone'},
        {id: '2', title: 'Email', value: 'qwegadqwe@gmail.com', icon: 'email'},
        {id: '3', title: 'Telegram', value: '@wlad_loban', icon: 'telegram'},
        {id: '4', title: 'Address', value: 'Grodno, Beladus', icon: 'address'},
        {id: '5', title: 'Social Profile', value: `t,li.git`, icon: 'phone'},
    ]

    return (

        <div className={`${styles.scroll} ${styles.background} ${styles}`}>
            <TitleH2 title={'Get in toutch'} isOpen={isOpen} setIsOpen={setIsOpen} icon={'get_in_touch'}/>
            <div className={`${style.container} ${styles.container_info}`}>
                <div className={style.contacts}>
                    {contacts.map((el) => {
                        return <div key={el.id}>
                            <h3 className={styles.h3}>{el.title}</h3>
                            <div className={style.contact}>
                                <SvgIcon icon={el.icon}/>
                                <span>{el.value}</span>
                            </div>
                        </div>
                    })}
                </div>
                <div className={style.contactsForm}>
                    <h3 className={styles.h3}>FEEL FREE TO DROP ME A LINE</h3>
                    <p>If you have any suggestion, project or even you want to say Hello.. please fill out the form
                        below and I will reply you shortly.</p>
                    <form className={style.contactsForm}>
                        <input type={'text'} placeholder={'Your Name'} className={style.input}/>
                        <input type={'email'} placeholder={'Your Email'} className={style.input}/>
                        <textarea placeholder={'Your Comment'} className={`${style.input} ${style.input_textarea}`}/>
                    </form>
                    <button className={styles.h3}><a href="/">Send Message</a><SvgIcon icon={'telegram'}/></button>

                </div>
            </div>
        </div>

    );
};
