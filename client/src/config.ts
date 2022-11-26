import axios from 'axios'

type EnvKeys = keyof typeof enviroments;

const enviroments = {
    development: {
        serverUrl: 'http://localhost:5000'
    },
    production: {
        serverUrl: 'https://aqueous-escarpment-64453.herokuapp.com'
    }
}
 
const test = (process.env.REACT_APP_ENV || 'development') as EnvKeys

export const config = enviroments[test]

export const authorizedAxios = axios.create({
    baseURL: config.serverUrl
});

authorizedAxios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')!}`;

export const unauthorizedAxios = axios.create({
    baseURL: config.serverUrl
});