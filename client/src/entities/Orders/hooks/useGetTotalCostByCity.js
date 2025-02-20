import { apiRequestOrders } from "./index";

export async function useGetTotalCostByCity() {
  try {
    const response = await apiRequestOrders(
      'GET',
      '/api/orders/getTotalCostByCity',
      {},
      {}
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}