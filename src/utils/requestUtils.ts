import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import logger from '../logging/winston-logger';

const request: any = (url: string, method: Method = 'get', data?: any) => {
    const options: AxiosRequestConfig = {
        url,
        method,
        data
    };

    return axios.request(options).then(res => {
        return res.data;
    }).catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
            logger.error(`#request: ${method} request to ${url} failed`,
                error.response?.status, error.response?.data, error.config);
        } else {
            logger.error(`#request: ${method} request to ${url} non-axios error`, JSON.stringify(error));
        }

        throw error;
    });
}

const get: any = (url: string) => request(url);
const post: any = (url: string, data: any) => request(url, 'post', data);

export { get, post };