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

    return <img className={style.img} src={props.photo} alt="photo" onClick={onClick}/>

};
