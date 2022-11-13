import axios from 'axios';
import {FormType} from './FormMe';

export const requestAPI = {
  message(data:FormType) {
    return axios.post('https://gmail-smtp.vercel.app',data);
  },
}