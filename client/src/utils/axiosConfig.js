import axios from 'axios'

const axiosApi = axios.create({
    baseURL: 'https://uninterested-puce-undershirt.cyclic.app/',
})

export default axiosApi;