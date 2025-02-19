import { apiRequestCouriers } from './index';

export async function useCreateCourier(data) {
  try {
    const response = apiRequestCouriers(
      'POST',
      '/api/couriers/postCreateCourier',
      {},
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
