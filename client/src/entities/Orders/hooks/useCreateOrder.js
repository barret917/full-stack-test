import { apiRequestOrders } from './index';

export async function useCreateOrder(data) {
  try {
    const response = await apiRequestOrders(
      'POST',
      '/api/orders/postOrder',
      {},
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
