import React from 'react';
import {BtnTitleType, DescriptionTypeProps, SkillsType} from '../AboutMe';
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';
import style from './CardsInfo.module.css'


type CardsInfoType = {
    btnTitle: BtnTitleType
    description: SkillsType[] | DescriptionTypeProps[]
    icon: string
}

export const CardsInfo = (props: CardsInfoType) => {
    console.log(props)

    if (props.btnTitle.id === 'Experience' || props.btnTitle.id === 'Education') {
        return (
            <>
                <div className={style.card_info}>
                    <div className={style.title_card_info}>
                        <SvgIcon icon={props.icon}/>
                        <h3>{props.btnTitle.title}</h3>
                    </div>
                    {
                        props.description.map((el: any) => {
                            console.log(1)
                            return <div key={el.id} >
                                <h4 className={style.description_exp_edu}>{el.title}</h4>
                                <div className={style.data_info}><SvgIcon icon={el.icon}/>{el.date}</div>
                                <p className={style.description_info}>{el.description}</p>
                            </div>
                        })
                    }
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={style.card_info}>
                    <div className={style.title_card_info}>
                        <SvgIcon icon={props.icon}/>

                        <h3>{props.btnTitle.title}</h3>
                    </div>
                    <ul className={style.card_list}>
                        {
                            props.description.map((el: any) => {
                                console.log(2)
                                return <li className={style.card_item} key={el.id}>
                                    <h3>{el.title}</h3>
                                    <p>{el.icons}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }

};
