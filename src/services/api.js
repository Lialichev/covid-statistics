import { create } from 'apisauce';

export const api = create({
    baseURL: 'https://api.covid19api.com/',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
});
