import React, { useEffect, useState, useContext } from 'react';
import OrderForm from './OrderForm';
import { emptyOrder } from '../lib/constants';
import {
  useCreateOrder,
  useUpdateOrder,
  useDeleteOrder,
} from '@entities/Orders/hooks';
import { Container, Title, ButtonContainer, FormContainer,ButtonChoiseForm} from '../styled';
import { RefreshContext } from '@shared/ui/Context/RefreshContext';
import { Modal,Button } from 'antd';

export const OrderManagement = ({ gridRef }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [mode, setMode] = useState('add');
  const [orderData, setOrderData] = useState(emptyOrder);
  const { refreshCount } = useContext(RefreshContext);
  const [formInstance, setFormInstance] = useState(null);
 

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
    if (formInstance) {
      formInstance.resetFields()
    }
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
      if (gridRef?.current?.api) {
        gridRef.current.api.refreshInfiniteCache();
      }
    } catch (error) {
      console.error(error);
    } finally {
      closeForm();
    }
  };

  useEffect(() => {
    if (gridRef?.current?.api) {
      gridRef.current.api.refreshInfiniteCache();
    }
  }, [refreshCount, gridRef]);

  return (
    <Container>
      <Title>Управление заказами</Title>
      <ButtonContainer>
        <ButtonChoiseForm onClick={handleFormAdd}>Добавить</ButtonChoiseForm>
        <ButtonChoiseForm onClick={handleFormUpdate}>
          Редактировать
        </ButtonChoiseForm>
        <ButtonChoiseForm onClick={handleFormDelete}>Удалить</ButtonChoiseForm>
      </ButtonContainer>
      <Modal
        open={formVisible}
        onCancel={closeForm}
        footer={null}
        forceRender
        >
        <FormContainer>
          <OrderForm
            mode={mode}
            orderData={orderData}
            setOrderData={setOrderData}
            onSubmit={handleFormSubmit}
            onForMount={setFormInstance}
          />
        </FormContainer>
      </Modal>
    </Container>
  );
};
