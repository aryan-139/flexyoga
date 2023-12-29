import axios from 'axios'

const axiosApi = axios.create({
    // baseURL: 'http://localhost:80/',
    baseURL: 'https://fierce-lingerie-fly.cyclic.app/',
})

export default axiosApi;