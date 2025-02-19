export const clearForm = {
  name: '',
  age: '',
  city: '',
  nationality: '',
  transport: '',
  phone: '',
  email: '',
};

export const courierFormFields = {
  delete: [
    { name: 'email', label: 'Почта курьера', type: 'email', required: true },
  ],
  add: [
    { name: 'name', label: 'ФИО', type: 'text', required: true },
    { name: 'age', label: 'Возраст', type: 'number', required: true },
    { name: 'city', label: 'Город', type: 'text', required: true },
    {
      name: 'nationality',
      label: 'Национальность',
      type: 'text',
      required: true,
    },
    { name: 'transport', label: 'Транспорт', type: 'text', required: true },
    { name: 'phone', label: 'Телефон', type: 'text', required: true },
    { name: 'email', label: 'Почта', type: 'email', required: true },
  ],
  update: [
    { name: 'name', label: 'Имя', type: 'text', required: false },
    { name: 'age', label: 'Возраст', type: 'number', required: false },
    { name: 'city', label: 'Город', type: 'text', required: false },
    {
      name: 'nationality',
      label: 'Национальность',
      type: 'text',
      required: false,
    },
    { name: 'transport', label: 'Транспорт', type: 'text', required: false },
    { name: 'phone', label: 'Телефон', type: 'text', required: false },
    { name: 'email', label: 'Почта', type: 'email', required: true },
  ],
};

export const courierFormTitles = {
  add: 'Добавить курьера',
  update: 'Редактировать курьера',
  delete: 'Удалить курьера',
};
