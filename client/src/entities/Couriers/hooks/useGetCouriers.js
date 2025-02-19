import { useCallback } from 'react';
import { apiRequestCouriers } from './index';

export function useGetCouriers() {
  const fetchRows = useCallback(async (startRow, endRow) => {
    try {
      const response = await apiRequestCouriers('GET', `/api/couriers`, {
        start: startRow,
        end: endRow,
      });

      return {
        rows: response.couriers,
        total: response.totalCount,
      };
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      throw error;
    }
  }, []);
console.log(fetchRows())
  return { fetchRows };
}
