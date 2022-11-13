import React, {Dispatch, SetStateAction} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AboutMe} from '../PagesRouts/AboutMe/AboutMe';
import {Contacts} from '../PagesRouts/Contacts/Contacts';
import {Projects} from '../PagesRouts/Projects/Projects';
import {Homepage} from '../PagesRouts/Houmepage/Homepage';

type PagesType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const PATH = {
  HOMEPAGE: '/',
  ABOUT_ME: 'about_me',
  PROJECTS: 'projects/*',
  CONTACTS: 'contacts',
  PROJECT_TITLE: 'project/*'
}

export const Pages = ({isOpen, setIsOpen}: PagesType) => {

  return (
    <div style={{height: '100%'}}>
      <Routes>
        <Route path={'*'} element={<span>error 404</span>}/>
        <Route path={PATH.HOMEPAGE} element={<Homepage isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path={PATH.ABOUT_ME} element={<AboutMe isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path={PATH.PROJECTS} element={<Projects isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
        <Route path={PATH.CONTACTS} element={<Contacts isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
      </Routes>
    </div>
  );
};
