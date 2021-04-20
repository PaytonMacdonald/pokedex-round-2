import axios from 'axios'

export const valueApi = axios.create({
    baseURL: 'enter api URL here',
    timeout: 3000
})