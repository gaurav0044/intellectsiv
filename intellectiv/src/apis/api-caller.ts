import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/constants';

axios.defaults.withCredentials = true;

export class ApiCaller {
  static httpGet = async (url: string): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const headers = {};
      const method = 'GET';
      const options: AxiosRequestConfig = { headers, method, url: URL };
      const res = await axios(options);
      return res;
    } catch (err) {
      throw err;
    }
  };

  static httpPost = async (
    data: Record<string, unknown> | unknown,
    url: string
  ): Promise<unknown> => {
    try {
      const URL = BASE_URL + url;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const options: AxiosRequestConfig = {
        headers,
        method,
        url: URL,
        data,
      };
      const res = await axios(options);
      return res;
    } catch (err) {
      throw err;
    }
  };

}
