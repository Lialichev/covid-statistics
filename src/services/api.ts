import { create, ApisauceInstance } from 'apisauce';

export const api: ApisauceInstance = create({
    baseURL: 'https://api.covid19api.com/',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
});
