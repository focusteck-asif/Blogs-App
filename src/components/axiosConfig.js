import axios from 'axios';

let axiosInstance = null

function getAxiosConfig() {
  const token = localStorage.getItem('token')
  axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
  return axiosInstance
}

export default getAxiosConfig;
