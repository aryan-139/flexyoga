import axios from 'axios'

const axiosApi = axios.create({
    baseURL: 'https://flexyogav5.azurewebsites.net/',
})

export default axiosApi;