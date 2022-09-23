import React, {Dispatch, SetStateAction} from 'react';
import {ProjectsType} from '../Projects';
import {useNavigate} from 'react-router-dom';
import styles from '../../../Common/style/styles.module.css'
import style from './Project.module.css'
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';
import btn from '../../../Common/Title_h2/Title_h2.module.css'

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
            {/*<button className={style.button} onClick={onClick}>x</button>*/}
            <span className={btn.btnClose} onClick={onClick}>
            <SvgIcon icon={'closed'}/>
            </span>
            <div className={style.container_project}>
                <img className={style.img_project} src={props.project.photo} alt="photo_project"/>
                <div className={style.bloc_description}>
                    <h3 className={style.title_project}>{props.project.title}</h3>
                    <ul className={style.list}>
                        <li><span><SvgIcon icon={'startData'}/>Start Date:</span>{props.project.date_start}</li>
                        <li><span><SvgIcon icon={'endData'}/>End Date:</span>{props.project.date_end}</li>
                        <li><span><SvgIcon icon={'technologies'}/>Used Technologies:</span>{props.project.technologies}
                        </li>
                    </ul>
                    <hr/>
                    <a  href={`${props.project.href_Project}`} target="_blank" className={style.preview}>preview<SvgIcon icon={'preview'}/></a>
                </div>
            </div>
        </div>
    );
};
