import { apiRequestCouriers } from './index';

export async function useGetCountTransport() {
  try {
    const response = await apiRequestCouriers(
      'GET',
      '/api/couriers/transportCount',
      {},
      {}
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
