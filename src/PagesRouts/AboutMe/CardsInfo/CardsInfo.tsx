import React from 'react';
import {BtnTitleType, DescriptionTypeProps, SkillsType} from '../AboutMe';
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';


type CardsInfoType = {
    btnTitle: BtnTitleType
    description: SkillsType[] | DescriptionTypeProps[]
    icon:string
}

export const CardsInfo = (props: CardsInfoType) => {

    if (props.btnTitle.id === 'Experience' || props.btnTitle.id === 'Education') {
        return (
            <>
                <SvgIcon icon={props.icon}/>
                <h3>{props.btnTitle.title}</h3>
                {
                    props.description.map((el: any) => {
                        console.log(1)
                        return <div key={el.id}>
                            <h4>{el.title}</h4>
                            <div>{el.date}</div>
                            <p>{el.description}</p>
                        </div>
                    })
                }
            </>
        )
    } else {
        return (
            <>
                <SvgIcon icon={props.icon}/>
                <h3>{props.btnTitle.title}</h3>
                {
                    props.description.map((el: any) => {
                        console.log(2)
                        return <div key={el.id}>
                            <h3>{el.title}</h3>
                            <p>{el.icons}</p>
                        </div>
                    })
                }
            </>
        )
    }

};
