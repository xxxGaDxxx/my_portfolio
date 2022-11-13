import React, {useState} from 'react';
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
  const [isLoading, setIsLoading] = useState(false)
  const [isMessage, setIsMessage] = useState(false)
  const [resMessage, setResMessage] = useState('')


  const {register, handleSubmit, formState: {errors}} = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = async (params) => {
    setIsLoading(true)
    try {
      const {data} = await requestAPI.message(params)
      setIsMessage(true)
      console.log('res', data.data.textRes)
      setResMessage(data.data.textRes)
      setIsLoading(false)

    } catch (err) {
      console.log('err', err)
      setIsLoading(false)
    }

  };
  console.log('register', resMessage)


  return (
    <div className={style.contactsForm}>
      {!isMessage
        ? <>
          <h3 className={styles.h3}>FEEL FREE TO DROP ME A LINE</h3>
          <p>If you have any suggestion, project or even you want to say Hello.. please fill out the
            form
            below and I will reply you shortly.</p>
          <form className={style.contactsForm} onSubmit={handleSubmit(onSubmit)}>
            <input type={'text'} {...register('firstName', {
              required: 'The field is required'
            })} placeholder={'Your Name'}
                   className={style.input}/>
            <div>{errors?.firstName && errors.firstName.message}</div>

            <input type={'email'}  {...register('email', {
              required: 'The field is required'
            })
            } placeholder={'Your Email'}
                   className={style.input}/>
            <div>{errors?.email && errors.email.message}</div>

            <textarea placeholder={'Your Comment'}  {...register('text', {
              required: 'The field is required'
            })}
                      className={`${style.input} ${style.input_textarea}`}/>
            <div>{errors?.text && errors.text.message}</div>

            <button type="submit" className={styles.h3} disabled={isLoading}>Send Message<SvgIcon
              icon={'telegram'}/></button>
          </form>
        </>
        : <div>
          {resMessage}
        </div>}
    </div>
  );
};

