import React, {Dispatch, SetStateAction, useState} from 'react';
import {TitleH2} from '../../Common/Title_h2/Title_h2';
import {PersonInfo} from './PersonInfo/PersonInfo';
import {Button} from '../../Common/Button/Button';
import {CardsInfo} from './CardsInfo/CardsInfo';
import style from './AboutMe.module.css'
import styles from '../../Common/style/styles.module.css'
import {SvgIcon} from '../../Common/svg_icon/SvgIcon';


export type BtnTitleType = {
    id: string
    title: string
    icon: string
}


export type SkillsType = {
    id: string
    title: string
    icons: string
}
export type DescriptionTypeProps = {
    id: string
    title: string
    date: string
    description: string
    icon: string
}
export type DescriptionType = {
    [key: string]: SkillsType[] | DescriptionTypeProps[]

}


export type PersonInfoType = {
    id: string
    title: string
    value: string
}
type InformationType = {
    [key: string]: PersonInfoType[]
}


type AboutMeType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AboutMe = ({isOpen, setIsOpen}: AboutMeType) => {


    let [btnTitle] = useState<BtnTitleType[]>([
        {id: 'Skills', title: 'Skills', icon: 'skills'},
        {id: 'Education', title: 'Education', icon: 'education'},
        {id: 'Experience', title: 'Experience', icon: 'experience'},
    ])

    let [description] = useState<DescriptionType>({
        ['Skills']: [
            {id: '10', title: 'Ts', icons: 'icon'},
            {id: '11', title: 'React', icons: 'icon'},
            {id: '12', title: 'Redux', icons: 'icon'},
            {id: '13', title: 'Axios', icons: 'icon'},
            {id: '14', title: 'Material UI', icons: 'icon'},
            {id: '15', title: 'Formik', icons: 'icon'},

        ],
        ['Education']: [
            {
                id: '2.1',
                title: 'INCUBATOR',
                date: '2015 - 2018',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper',
                icon: 'startData'
            },
            {
                id: '2.2',
                title: 'qwe',
                date: '2011 - 2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus met mi ullamcorper',
                icon: 'startData'
            },
            {
                id: '2.3',
                title: 'aaasdasd ',
                date: '2007 - 2011',
                description: 'Lorem ipsum dolor sit amet, consectetur ium orci sit amet mi ullamcorper',
                icon: 'startData'
            },
        ],
        ['Experience']: [
            {
                id: '1.1',
                title: 'WEB DESIGNER - ENVATO',
                date: '2015 - 2018',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  pretium orci sit amet mi ullamcorper',
                icon: 'startData'
            },
            {
                id: '1.2',
                title: 'WEB DEVELOPER - GOOGLE',
                date: '2011 - 2015',
                description: 'Lorem ipsum dolor sit amet, consectetur  elit. Phasellus pretium orci sit amet mi ullamcorper',
                icon: 'startData'
            },
            {
                id: '1.3',
                title: 'COMMUNITY MANAGER - ADOBE',
                date: '2007 - 2011',
                description: 'Lorem ipsum dolor sit amet, ciscing elit. Phasellus pretium orci sit amet mi ullamcorper',
                icon: 'startData'
            },
        ],


    });


    let information: InformationType = {
        ['info']: [
            {id: '21', title: 'First Name:', value: 'Wlad'},
            {id: '22', title: 'Last Name:', value: 'Loban'},
            {id: '23', title: 'Date of birth:', value: '05.02.1998'},
            {id: '24', title: 'Nationality:', value: 'Belarus'},
        ],
        ['contacts']: [
            {id: '25', title: 'Phone:', value: '+3753366211885'},
            {id: '26', title: 'Address:', value: '+Grodno, Belarus'},
            {id: '27', title: 'Email:', value: 'qwegadqwe@gmail.com'},
            {id: '28', title: 'Telegram:', value: '@wlad_loban'},
        ]
    }


    let [btnOn, setBtnOn] = useState<BtnTitleType>({id: 'Skills', title: 'Skills', icon: 'skills'})

    const callbackHandler = (btn: BtnTitleType) => {
        setBtnOn({id: btn.id, title: btn.title, icon: btn.icon})
    }


    return (
        <div className={`${styles.scroll} ${styles.background}`}>

            <TitleH2 title="About me" isOpen={isOpen} setIsOpen={setIsOpen} icon={'aboutMe'}/>
            <div className={styles.container}>

                    <div className={style.title_person_info}>
                        <SvgIcon icon={'portfolioCircle'}/>
                        <h3>PERSONAL INFO</h3>
                    </div>
                    <p className={style.description_person}>I'm a Freelance Web Designer & Developer based in Moscow,
                        Russia, I have serious passion for UI
                        effects, animations and creating intuitive, with over a decade of experience.</p>

                <div className={style.list_person}>
                    <PersonInfo info={information['info']}/>
                    <PersonInfo info={information['contacts']}/>
                </div>
                <button className={style.btn_download}>Download resume <SvgIcon icon={'download'}/></button>
                <div>
                    <div className={style.btn_card}>
                        {btnTitle.map(e => {
                            return <Button
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                icon={e.icon}
                                callback={callbackHandler}
                            />
                        })}
                    </div>
                    <div>
                        <CardsInfo
                            key={btnOn.id}
                            btnTitle={btnOn}
                            description={description[btnOn.id]}
                            icon={btnOn.icon}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

