import axios from 'axios'

const axiosApi = axios.create({
    // baseURL: 'http://localhost:80/',
    baseURL: 'https://uninterested-puce-undershirt.cyclic.app/',
})

export default axiosApi;