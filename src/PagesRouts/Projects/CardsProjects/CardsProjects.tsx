import React ,{MouseEvent} from 'react';
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

    return <img  className={style.img} src={props.photo} alt={props.projects.title} onClick={onClick}/>

};
