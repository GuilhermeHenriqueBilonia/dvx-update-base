import axios from 'axios'

export const auth = axios.create({
    baseURL: 'https://api.devexsolucoes.com.br/api',
});

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})