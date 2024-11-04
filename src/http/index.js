// src/http/index.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://830c-46-226-163-41.ngrok-free.app/api', // Замените на ваш базовый URL
  // Можно добавить общие заголовки, если необходимо
  // headers: {'Authorization': 'Bearer token'}
});

axiosInstance.defaults.headers.common['skip-browser-warning'] = 'true';

export default axiosInstance;





