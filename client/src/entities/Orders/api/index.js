import axios from 'axios';
import { BASE_API_URL } from '@shared/api';

export const apiRequestOrders = async (method, endpoint, params = {}, data = {}) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_API_URL}${endpoint}`,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`Ошибка запроса (${method} ${endpoint}):`, error);
    throw error;
  }
};
