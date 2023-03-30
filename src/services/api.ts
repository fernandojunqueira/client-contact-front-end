import axios from 'axios'

const api = axios.create({
    baseURL:'https://client-contact.onrender.com',
    timeout: 10000,
})

export default api