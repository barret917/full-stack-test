import axios from 'axios';
import { BASE_API_URL } from '@shared/api';

export const apiRequestCouriers = async (
  method,
  endpoint,
  params = {},
  data = {}
) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_API_URL}${endpoint}`,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`Ошибка запроса api (${method} ${endpoint}):`, error);
    throw error;
  }
};
