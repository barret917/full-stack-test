import { ButtonCellRenderer } from "@shared/ui/ButtonsCellRenderer";

export const colDefsTable = [
  {
    headerName: 'ID',
    field: 'id',
    hide: true,
    sortable: true,
    sort: 'asc',
  },
  {
    field: 'order_name',
    headerName: 'Название заказа',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'recipient_name',
    headerName: 'Получатель',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'recipient_phone',
    headerName: 'Телефон',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'recipient_email',
    headerName: 'Почта получателя',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'address_from',
    headerName: 'Откуда',
    sortable: false,
    filter: true,
    resizable: true,
  },
  {
    field: 'address_to',
    headerName: 'Куда',
    sortable: false,
    filter: true,
    resizable: true,
  },
  {
    field: 'distance',
    headerName: 'Расстояние',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'price',
    headerName: 'Стоимость',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'region',
    headerName: 'Регион',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'city',
    headerName: 'Город',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'description',
    headerName: 'Описание',
    sortable: false,
    filter: true,
    resizable: true,
  },
  {
    field: 'action',
    headerName: 'Ред/Удал',
    cellRenderer: (params) => {
      if (!params.data) {
        return null;
      }
      return <ButtonCellRenderer />;
    },
  },
];