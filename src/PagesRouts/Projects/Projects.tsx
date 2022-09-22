import React, {Dispatch, SetStateAction, useState} from 'react';
import {TitleH2} from '../../Common/Title_h2/Title_h2';
import {CardsProjects} from './CardsProjects/CardsProjects';
import {Project} from './Project/Project';
import {Route, Routes} from 'react-router-dom';
import {PATH} from '../../Navbar/Pages';
import style from './Projects.module.css'
import styles from '../../Common/style/styles.module.css';
import photo1 from '../../images/img_project/FOTOS.jpg'
import photo2 from '../../images/img_project/FOTOS2.jpg'
import photo3 from '../../images/img_project/FOTOS3.jpg'
import photo4 from '../../images/img_project/FOTOS4.jpg'


export type ProjectsType = {
    id: string,
    title: string
    date_start: string
    date_end: string
    technologies: string
    photo: string
}

type ProjectsPropsType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Projects = (props: ProjectsPropsType) => {

    let [projectsInfo, setProjectsInfo] = useState<ProjectsType>(
        {
            id: '',
            title: '',
            date_start: '',
            date_end: '',
            technologies: '',
            photo:','
        }
    )

    const [isOpen, setIsOpen] = useState(true)

    const onClickHandler = (projects: ProjectsType) => {
        setProjectsInfo({...projects})
        setIsOpen(false)
    }

    const projects: ProjectsType[] = [
        {
            id: '11', title: 'todolist', date_start: '20/02/2022',
            date_end: '01/08/2022',
            technologies: 'React,Redux,Formik,TS,Material UI,Axios',
            photo: photo1
        },
        {
            id: '12', title: 'counter', date_start: '11/01/2022',
            date_end: '01/05/2022',
            technologies: 'React,Redux,Formik,TS',
            photo:photo2
        },
        {
            id: '13', title: 'social network', date_start: '20/02/2022',
            date_end: '04/08/2022',
            technologies: 'React,TS,Material UI,Axios',
            photo:photo3
        },
        {
            id: '14', title: 'project', date_start: '20/05/2022',
            date_end: '02/09/2022',
            technologies: 'React,Formik,TS,Axios',
            photo:photo4
        },
    ]


    return (
        isOpen ? <div className={`${styles.background} ${styles.scroll}`}>
            <div>
                <TitleH2 title={'My portfolio'} isOpen={props.isOpen} setIsOpen={props.setIsOpen} icon={'portfolio'}/>
                <div className={`${style.container} ${styles.container_info} ${style.photo_link}`}>
                    {projects.map((el) => {
                        return <CardsProjects
                            key={el.id}
                            projects={el}
                            photo={el.photo}
                            onClick={onClickHandler}
                        />
                    })}
                </div>
            </div>
            </div>
            : <>
                <Routes>
                    <Route path={PATH.PROJECT_TITLE}
                           element={<Project project={projectsInfo} isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
                </Routes>
            </>
    );
};


