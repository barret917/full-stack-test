import React, { useEffect } from 'react';
import {
  Form,
  FormItem,
  Input,
  Button,
  ButtonWrapper,
 
} from '../styled';

export const DynamicForm = ({
  fields,
  formData,
  setFormData,
  onSubmit,
  onForMount,
  
}) => {
  const [form] = Form.useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  useEffect(() => {
    form.setFieldsValue(formData); 
  }, [formData, form]);

  useEffect(() => {
    if (onForMount) {
      onForMount(form);
     
    }
  }, [form, onForMount]);

  return (
    <Form layout="vertical" onFinish={handleSubmit} form={form}>
      {fields.map((field) => (
        <FormItem
          key={field.name}
          label={field.label}
          name={field.name}
          rules={[
            {
              required: field.required,
              message: `Поле ${field.label.toLowerCase()} обязательно`,
            },
          ]}
        >
          <Input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            placeholder={field.placeholder || ''}
          />
        </FormItem>
      ))}
      <FormItem>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </ButtonWrapper>
      </FormItem>
    </Form>
  );
};
