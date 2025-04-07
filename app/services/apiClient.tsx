import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from '../config';

const apiClient = axios.create({
  baseURL: config.baseURL,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json; charset=utf-8' },
});


apiClient.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default apiClient;
