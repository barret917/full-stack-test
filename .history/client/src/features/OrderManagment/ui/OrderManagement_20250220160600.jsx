import React, { useState } from 'react';
import OrderForm from './OrderForm';
import { Button } from '@shared/ui/Button';
import { emptyOrder } from '../lib/constants';
import { useCreateOrder } from '@entities/Orders/hooks';
import { useUpdateOrder } from '@entities/Orders/hooks';
import { useDeleteOrder } from '@entities/Orders/hooks';
import { Container, Title, ButtonContainer, FormContainer } from "../styled"
import { RefreshContext } from '@shared/context/RefreshContext';

export const OrderManagement = ({ gridRef }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [mode, setMode] = useState('add');
  const [orderData, setOrderData] = useState(emptyOrder);
  

  const openForm = (newMode) => {
    setMode(newMode);
    setFormVisible(true);
  };

    const handleFormAdd = () => openForm('add');
    

    const handleFormUpdate = () => openForm('update');
    

    const handleFormDelete = () => openForm('delete');
    

  const closeForm = () => {
    setFormVisible(false);
    setOrderData(emptyOrder);
  };

  const handleFormSubmit = async (data) => {
    try {
      switch (mode) {
        case 'add':
          await useCreateOrder(data);

          break;
        case 'update':
          await useUpdateOrder(data);

          break;
        case 'delete':
          await useDeleteOrder(data);

          break;

        default:
          throw new Error('Unknown mode');
      }

      if (gridRef.current) {
        gridRef.current.api.refreshInfiniteCache();
      }
    } catch (error) {
      console.error(error);
    } finally {
      closeForm();
    }
  };

  return (
    <Container>
      <Title>Управление заказами</Title>
      <ButtonContainer>
        <Button onClick={handleFormAdd}>Добавить</Button>
        <Button onClick={handleFormUpdate}>Редактировать</Button>
        <Button onClick={handleFormDelete}>Удалить</Button>
        {formVisible && (
          <Button onClick={closeForm} variant="secondary">
            Очистить
          </Button>
        )}
      </ButtonContainer>
      {formVisible && (
        <FormContainer>
          <OrderForm
            mode={mode}
            orderData={orderData}
            setOrderData={setOrderData}
            onSubmit={handleFormSubmit}
          />
        </FormContainer>
      )}
    </Container>
  );
};
