import { create, ApisauceInstance } from 'apisauce';

const api: ApisauceInstance = create({
    baseURL: 'https://corona.lmao.ninja/v2/',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
});

export default api;
