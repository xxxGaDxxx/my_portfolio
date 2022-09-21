import React, {Dispatch, SetStateAction} from 'react';
import {ProjectsType} from '../Projects';
import {useNavigate} from 'react-router-dom';
import styles from '../../../Common/style/styles.module.css'
import style from './Project.module.css'
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';

type ProjectPropsType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    project: ProjectsType
}

export const Project = (props: ProjectPropsType) => {

    const navigate = useNavigate()

    let onClick = () => {
        props.setIsOpen(true)
        navigate(-1)
    }

    return (
        <div className={styles.background}>
            <button className={style.button} onClick={onClick}>x</button>
            <div className={style.container_project}>
                <img className={style.img_project} src={props.project.photo} alt="photo_project"/>
                <div className={style.bloc_description}>
                    <h3 className={style.title_project}>{props.project.title}</h3>
                    <ul className={style.list}>
                        <li><SvgIcon icon={'start_data'}/><span>Start Date:</span>{props.project.date_start}</li>
                        <li><SvgIcon icon={'end_data'}/><span>End Date:</span>{props.project.date_end}</li>
                        <li><SvgIcon icon={'technologies'}/><span>Used Technologies:</span>{props.project.technologies}
                        </li>
                    </ul>
                    <hr/>
                    <button className={style.preview}>preview<SvgIcon icon={'preview'}/></button>
                </div>
            </div>
        </div>
    );
};
