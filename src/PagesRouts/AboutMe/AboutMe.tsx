import React, {Dispatch, SetStateAction, useState} from 'react';
import {TitleH2} from '../../Common/Title_h2/Title_h2';
import {PersonInfo} from './PersonInfo/PersonInfo';
import {Button} from '../../Common/Button/Button';
import {CardsInfo} from './CardsInfo/CardsInfo';
import style from './AboutMe.module.css'
import styles from '../../Common/style/styles.module.css'
import {SvgIcon} from '../../Common/svg_icon/SvgIcon';
import photo from '../../images/men/men.jpg';
// @ts-ignore
import cv from './cv/CV_A4.pdf'

export const AboutMe = ({isOpen, setIsOpen}: AboutMeType) => {


  const [btnTitle] = useState<BtnTitleType[]>([
    {id: 'Skills', title: 'Skills', icon: 'skills'},
    {id: 'Education', title: 'Education', icon: 'education'},
    {id: 'Experience', title: 'Experience', icon: 'experience'},
  ])

  const [description] = useState<DescriptionType>({
    ['Skills']: [
      {id: '10', title: 'TS/JS', icon: 'ts'},
      {id: '11', title: 'React', icon: 'react'},
      {id: '12', title: 'Redux', icon: 'redux'},
      {id: '13', title: 'Axios', icon: 'axios'},
      {id: '14', title: 'Formik', icon: 'formik'},
      {id: '15', title: 'Git', icon: 'git'},
      {id: '16', title: 'Material UI', icon: 'material'},
      {id: '17', title: 'Unit-Test', icon: 'unit'},


    ],
    ['Education']: [
      {
        id: '2.1',
        title: 'IT-INCUBATOR',
        date: '2022',
        description: 'Front-end Development, TypeScript, React, Redux, React-Redux, Storybook, Unit Tests, REST API, HTML/CSS/JS',
        icon: 'startData'
      },
      {
        id: '2.2',
        title: 'EDUCATIONAL INSTITUTION\n' +
          '"GRODNO STATE\n' +
          'ELECTROTECHNICAL COLLEGE\n' +
          'NAMED AFTER IVAN SCHASTNY"',
        date: '2013 - 2018',
        description: 'Mechanical Technician',
        icon: 'startData'
      },

    ],
    ['Experience']: [
      {
        id: '1.2',
        title: 'Telegiv',
        date: '2022',
        description: 'Разработка SPA приложений на React, Redux Toolkit,\n' +
          'TypeScript\n' +
          'Создание проекта с нуля: авторизация, первые страницы,\n' +
          'админка, роутинг, статистика пользователя.\n' +
          'Участие в командной работе, рефакторинг и оптимизация\n' +
          'кода.\n' +
          'Выполнение поставленных задач.\n' +
          'Покрытие кода unit-тестами, bugfix, дробление на\n' +
          'компоненты, вёрстка, мелкие доработки.',
        icon: 'startData'
      },{
        id: '1.3',
        title: 'LERNING CARD',
        date: '2022',
        description: 'Stack: React / Redux / TypeScript / React-router-dom / Axios / Formik / Material UI / SCSS / Git, Github.',
        icon: 'startData'
      },
      {
        id: '1.4',
        title: 'Todolist',
        date: '2022',
        description: 'Stack: React / Redux Tolkit/ TypeScript / React-router-dom / Axios / Formik / Material UI / SCSS / Git, Github.',
        icon: 'startData'
      },
      {
        id: '1.5',
        title: 'SOCIAL NETWORK',
        date: '2022',
        description: 'Stack: React / Redux / TypeScript / React-router-dom / Axios / React-Hook-Form / Git, Github.',
        icon: 'startData'
      },
    ],
  });


  const information: InformationType = {
    ['info']: [
      {id: '21', title: 'First Name:', value: 'Vlad'},
      {id: '22', title: 'Last Name:', value: 'Loban'},
      {id: '23', title: 'Date of birth:', value: '05.02.1998'},
      {id: '24', title: 'Nationality:', value: 'Belarus'},
    ],
    ['contacts']: [
      {id: '25', title: 'Phone:', value: '+375(33) 662-118-85'},
      {id: '26', title: 'Address:', value: 'Grodno, Belarus'},
      {id: '27', title: 'Email:', value: 'vlad.loban.dev@gmail.com'},
      {id: '28', title: 'Telegram:', value: '@wlad_loban'},
    ]
  }


  let [btnOn, setBtnOn] = useState<BtnTitleType>({id: 'Skills', title: 'Skills', icon: 'skills'})

  const callbackHandler = (btn: BtnTitleType) => {
    setBtnOn({id: btn.id, title: btn.title, icon: btn.icon})
  }

  const downloadFile = () => {

    const file = document.createElement('a')
    file.href  = cv
    file.setAttribute('download',`Cv.pdf`)
    document.body.append(file)
    file.click()
    file.remove()
  }


  return (
    <div className={`${styles.scroll} ${styles.background}`}>

      <TitleH2 title="About me" isOpen={isOpen} setIsOpen={setIsOpen} icon={'aboutMe'}/>
      <div className={styles.container}>
        <div className={style.img_personal_info}>
          <img className={style.photo_me} src={photo} alt="me"/>
          <div className={style.person_info}>

            <div className={style.title_person_info}>
              <SvgIcon icon={'portfolioCircle'}/>
              <h3>PERSONAL INFO</h3>
            </div>

            <p className={style.description_person}>
              Front-end developer who is focused
              result-oriented. Have experience in creating SPAs with React(JS/TS),
              Redux, Redux Toolkit.
              <br/>
              In my free time I read educational literature, solve
              Codewars or improving my English.
              <br/>
              Ready to consider project work and
              Full-time work. Looking for a job in a company with modern
              approach to development and well-coordinated team.
            </p>

            <div className={style.list_person}>
              <PersonInfo info={information['info']}/>
              <PersonInfo info={information['contacts']}/>
            </div>
            <button className={style.btn_download}
                    onClick={downloadFile}>Download resume <SvgIcon icon={'download'}/>
            </button>
          </div>
        </div>

        <span className={style.line}></span>

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


//type
export type BtnTitleType = {
  id: string
  title: string
  icon: string
}

export type SkillsType = {
  id: string
  title: string
  icon: string
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
