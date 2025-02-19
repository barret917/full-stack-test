import { useCallback } from 'react';
import { apiRequestOrders } from './index';

export function useGetOrders() {
  const fetchRows = useCallback(async (startRow, endRow) => {
    try {
      const data = await apiRequestOrders('GET', '/api/orders', {
        start: startRow,
        end: endRow,
      });

      return {
        rows: data.orders,
        total: data.totalCount,
      };
    } catch (error) {
      throw error;
    }
  }, []);

  return { fetchRows };
}


