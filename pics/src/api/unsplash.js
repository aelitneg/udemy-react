import Axios from 'axios';

const unsplash = Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID cuy7Pzd0HAHC1KiJozK4NmC4npXNKKtPH-4NqLzIYmw',
    },
});

export default unsplash;
