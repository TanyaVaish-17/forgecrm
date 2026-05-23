import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const loginAPI = (data) => API.post('/auth/login', data)
export const registerAPI = (data) => API.post('/auth/register', data)