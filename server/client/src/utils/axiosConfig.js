import axios from 'axios'

const axiosApi = axios.create({
    baseURL: 'https://flexyogav2.azurewebsites.net',
})

export default axiosApi;