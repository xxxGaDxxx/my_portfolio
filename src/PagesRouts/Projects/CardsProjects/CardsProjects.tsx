import React from 'react';
import {ProjectsType} from '../Projects';
import {useNavigate} from 'react-router-dom';
import style from './CardsProjects.module.css'

type CardsProjects = {
    projects: ProjectsType
    onClick: (projects: ProjectsType) => void
    photo: string
}

export const CardsProjects = (props: CardsProjects) => {
    const navigate = useNavigate()
    const onClick = () => {
        props.onClick(props.projects)
        navigate(`project/${props.projects.title}`)
    }

    // const onFocusHandler=(e:MouseEvent<HTMLImageElement>)=>{
    //     console.log(1,e)
    //
    // }
    // onMouseLeave={onFocusHandler}

    return (
        <div onClick={onClick} className={style.cardsProjects}>
            <img className={style.img} src={props.photo} alt={props.projects.title}/>
            <div className={style.cards_info}>
                <div className={style.title}>
                    <h3>{props.projects.title}</h3>
                    <p>{props.projects.technologies}</p>
                </div>
            </div>
        </div>
    )
};
