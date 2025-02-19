import { OrdersTable } from '@features/OrdersTable';
import { OrderManagement } from '@features/OrderManagment';
import { useRef } from 'react';

export function Deliveries() {
  const gridRef = useRef();
  return (
    <div>
      <OrderManagement gridRef={gridRef} />
      <OrdersTable  gridRef={gridRef}/>
    </div>
  );
}
