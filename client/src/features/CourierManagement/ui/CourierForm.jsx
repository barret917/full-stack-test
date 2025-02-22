import React from 'react';
import { DynamicForm } from '@shared/ui/FormDynamic';
import { courierFormFields,courierFormTitles } from '../lib/constants';

export const CourierForm = ({ mode, formData, setFormData, onSubmit,onForMount}) => {
   const fields = courierFormFields[mode];
  const title = courierFormTitles[mode];

  return (
    <>
      <h2>
        {title}
      </h2>
      <DynamicForm
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        onForMountCourier={onForMount}
      />
    </>
  );
};
