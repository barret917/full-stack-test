import { ButtonCellRenderer } from "@shared/ui/ButtonsCellRenderer";

export const colDefsTable = [
  {
    headerName: 'ID',
    field: 'id',
    hide: true,
    sortable: true,
    sort: 'asc',
  },
  { headerName: 'ФИО курьера', field: 'name', cellClass: 'fio' },
  {
    headerName: 'Номер курьера',
    field: 'phone',
    cellClass: 'last-place',
    resizable: true,
  },
  { headerName: 'Почта курьера', field: 'email', cellClass: 'table-cell' },
  {
    headerName: 'Транспорт курьера',
    field: 'transport',
    cellClass: 'table-cell',
  },
  { headerName: 'Город', field: 'city', cellClass: 'table-cell' },
  { headerName: 'Возраст курьера', field: 'age', cellClass: 'table-cell' },
  {
    headerName: 'Нац.курьера',
    field: 'nationality',
    cellClass: 'table-cell',
  },
  {
    field: 'action',
    cellClass: 'table-cell',
    headerName: 'Ред/Удал',
    cellRenderer: (params) => {
      if (!params.data) {
        return null;
      }
      return <ButtonCellRenderer />;
    },
  },
];
