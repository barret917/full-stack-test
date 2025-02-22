export const emptyOrder = {
  order_name: '',
  recipient_name: '',
  recipient_phone: '',
  recipient_email: '',
  address_from: '',
  address_to: '',
  distance: '',
  price: '',
  region: '',
  city: '',
  description: '',
};


export const orderFormFields = {
  delete: [
    { name: 'email', label: 'Почта курьера', type: 'email', required: true },
  ],
  update: [
    {
      name: 'order_name',
      label: 'Название заказа',
      type: 'text',
      required: false,
    },
    {
      name: 'recipient_name',
      label: 'Получатель',
      type: 'text',
      required: false,
    },
    {
      name: 'recipient_phone',
      label: 'Контакты получателя',
      type: 'text',
      required: false,
    },
    {
      name: 'recipient_email',
      label: 'Почта получателя',
      type: 'email',
      required: true,
    },
    { name: 'address_from', label: 'Откуда', type: 'text', required: false },
    { name: 'address_to', label: 'Куда', type: 'text', required: false },
    { name: 'distance', label: 'Расстояние', type: 'number', required: false },
    { name: 'price', label: 'Стоимость', type: 'number', required: false },
    { name: 'region', label: 'Регион', type: 'text', required: false },
    { name: 'city', label: 'Город', type: 'text', required: false },
    { name: 'description', label: 'Описание', type: 'text', required: false },
  ],
  add: [
    {
      name: 'order_name',
      label: 'Название заказа',
      type: 'text',
      required: true,
    },
    {
      name: 'recipient_name',
      label: 'Получатель',
      type: 'text',
      required: true,
    },
    {
      name: 'recipient_phone',
      label: 'Контакты получателя',
      type: 'text',
      required: true,
    },
    {
      name: 'recipient_email',
      label: 'Почта получателя',
      type: 'email',
      required: true,
    },
    { name: 'address_from', label: 'Откуда', type: 'text', required: true },
    { name: 'address_to', label: 'Куда', type: 'text', required: true },
    { name: 'distance', label: 'Расстояние', type: 'number', required: true },
    { name: 'price', label: 'Стоимость', type: 'number', required: true },
    { name: 'region', label: 'Регион', type: 'text', required: true },
    { name: 'city', label: 'Город', type: 'text', required: true},
    { name: 'description', label: 'Описание', type: 'text', required: false }
  ],
};


export const orderFormTitles = {
  add: 'Добавить заказ',
  update: 'Редактировать заказ',
  delete: 'Удалить заказ',
};