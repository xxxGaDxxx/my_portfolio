import axios from 'axios';
import {FormType} from './FormMe';

export const requestAPI = {
  message(data: FormType) {
    return axios.post<ResponseMessage>('https://gmail-smtp.vercel.app', data);
  },
}

export type ResponseMessage = {
  data: ResponseMessageData;
}
export type ResponseMessageData = {
  textRes: string;
}