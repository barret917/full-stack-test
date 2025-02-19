import React from 'react';
import { DynamicForm } from '@shared/ui/FormDynamic';
import { orderFormFields, orderFormTitles } from '../lib/constants';

const OrderForm = ({ mode, orderData, setOrderData, onSubmit }) => {
  const fields = orderFormFields[mode];
  const title = orderFormTitles[mode];

  return (
    <div>
      <h2>{title}</h2>
      <DynamicForm
        fields={fields}
        formData={orderData}
        setFormData={setOrderData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default OrderForm;
