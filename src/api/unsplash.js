import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1uJEUyLV8U-D5xQgVgO033cgCuLks8vPwozzrMvtSfA'
    }
});