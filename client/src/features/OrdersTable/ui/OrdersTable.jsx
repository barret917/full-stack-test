import { useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useGetOrders } from '@entities/Orders/hooks';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import * as Styled from './styled';
import { colDefsTable } from "../lib/constants"

export function OrdersTable({ gridRef }) {
  const { fetchRows } = useGetOrders();

  const [colDefs] = useState(colDefsTable);

  const onGridReady = useCallback(
    (params) => {
      const dataSource = {
        rowCount: undefined,
        getRows: async (params) => {
          try {
            const { startRow, endRow } = params;
            const data = await fetchRows(startRow, endRow);

            params.successCallback(data.rows, data.total);
          } catch (error) {
            params.failCallback();
          }
        },
      };

      params.api.updateGridOptions({ datasource: dataSource });
    },
    [fetchRows]
  );

  return (
    <Styled.OrdersTableWrapper
      className="ag-theme-quartz"
      style={{ height: 600 }}
    >
      <AgGridReact
        ref={gridRef}
        columnDefs={colDefs}
        rowModelType="infinite"
        cacheBlockSize={20}
        maxBlocksInCache={5}
        pagination={false}
        onGridReady={onGridReady}
      />
    </Styled.OrdersTableWrapper>
  );
}
