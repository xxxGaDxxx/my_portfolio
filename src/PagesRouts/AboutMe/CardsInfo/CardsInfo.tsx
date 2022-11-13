import React from 'react';
import {BtnTitleType, DescriptionTypeProps, SkillsType} from '../AboutMe';
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';
import style from './CardsInfo.module.css'


type CardsInfoType = {
  btnTitle: BtnTitleType
  description: SkillsType[] | DescriptionTypeProps[]
  icon: string
}

export const CardsInfo = ({btnTitle, description, icon}: CardsInfoType) => {

  if (btnTitle.id === 'Experience' || btnTitle.id === 'Education') {

    return (
      <>
        <div className={style.card_info}>
          <div className={style.title_card_info}>
            <SvgIcon icon={icon}/>
            <h3>{btnTitle.title}</h3>
          </div>
          <div className={style.bloc_description}>
            {
              description.map((el: any) => {

                return <div key={el.id} className={style.bloc_description_line}>
                  <h4 className={style.description_exp_edu}>{el.title}</h4>
                  <div className={style.data_info}><SvgIcon icon={el.icon}/>{el.date}</div>
                  <p className={style.description_info}>{el.description}</p>

                </div>
              })
            }
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className={style.card_info}>
          <div className={style.title_card_info}>
            <SvgIcon icon={icon}/>

            <h3>{btnTitle.title}</h3>
          </div>
          <ul className={style.card_list}>
            {
              description.map((el: any) => {
                return <li className={style.skills_icon} key={el.id}>
                  <SvgIcon icon={el.icon}/>
                  <h3>{el.title}</h3>
                </li>
              })
            }
          </ul>
        </div>
      </>
    )
  }
};
