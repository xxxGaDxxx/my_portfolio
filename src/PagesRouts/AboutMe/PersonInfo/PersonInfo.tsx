import React from 'react';
import {PersonInfoType} from '../AboutMe';

type PersonInfoPropsType = {
  info: PersonInfoType[]
}

export const PersonInfo = (props: PersonInfoPropsType) => {
  return (
    <div>
      <ul>
        {props.info.map(el => {
          return <li key={el.id}><span>{el.title}</span>{el.value}</li>
        })}
      </ul>
    </div>
  )
};
