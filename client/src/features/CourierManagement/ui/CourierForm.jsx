import React from 'react';
import { DynamicForm } from '@shared/ui/FormDynamic';
import { courierFormFields,courierFormTitles } from '../lib/constants';

export const CourierForm = ({ mode, formData, setFormData, onSubmit }) => {
   const fields = courierFormFields[mode];
  const title = courierFormTitles[mode];

  return (
    <div>
      <h2>
        {title}
      </h2>
      <DynamicForm
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};
