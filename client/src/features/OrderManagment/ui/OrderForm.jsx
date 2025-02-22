import React from 'react';
import { DynamicForm } from '@shared/ui/FormDynamic';
import { orderFormFields, orderFormTitles } from '../lib/constants';

const OrderForm = ({ mode, orderData, setOrderData, onSubmit,onForMount}) => {
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
        onForMount={onForMount}
      />
    </div>
  );
};

export default OrderForm;
