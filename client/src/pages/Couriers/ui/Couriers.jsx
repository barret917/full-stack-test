import { CouriersTable } from '@features/CouriersTable';
import { CourierManagement } from '@features/CourierManagement';
import { useRef } from 'react';

export function Couriers() {
  const gridRef = useRef();
  return (
    <div>
      <CourierManagement gridRef={gridRef} />
      <CouriersTable  gridRef={gridRef}/>
    </div>
  );
}
