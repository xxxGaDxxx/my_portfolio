import React, {useEffect, useState} from 'react';
import style from '../Contacts.module.css';
import styles from '../../../Common/style/styles.module.css';
import {SvgIcon} from '../../../Common/svg_icon/SvgIcon';
import {SubmitHandler, useForm} from 'react-hook-form';
import {requestAPI} from './requestMessage';


export interface FormType {
  firstName: String
  email: String
  text: String
}

export const FormMe = () => {
  const {register, handleSubmit} = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = data => requestAPI.message(data);

  return (
    <div className={style.contactsForm}>
      <h3 className={styles.h3}>FEEL FREE TO DROP ME A LINE</h3>
      <p>If you have any suggestion, project or even you want to say Hello.. please fill out the
        form
        below and I will reply you shortly.</p>
      <form className={style.contactsForm} onSubmit={handleSubmit(onSubmit)}>
        <input type={'text'} {...register('firstName')} placeholder={'Your Name'}
               className={style.input}/>
        <input type={'email'} {...register('email')} placeholder={'Your Email'}
               className={style.input}/>
        <textarea placeholder={'Your Comment'}  {...register('text')}
                  className={`${style.input} ${style.input_textarea}`}/>
        <button type="submit" className={styles.h3}>Send Message<SvgIcon
          icon={'telegram'}/></button>
      </form>

    </div>
  );
};

