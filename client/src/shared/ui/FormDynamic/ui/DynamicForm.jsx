import React from 'react';
import { Form, FormGroup, Label, Input, Button } from '../styled';

export const DynamicForm = ({ fields, formData, setFormData, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormGroup key={field.name}>
          <Label>{field.label}:</Label>
          <Input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder || ''}
            required={field.required}
          />
        </FormGroup>
      ))}
      <Button type="submit">Отправить</Button>
    </Form>
  );
};
