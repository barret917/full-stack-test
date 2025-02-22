import React, { useState, useContext } from 'react';
import { CourierForm } from './CourierForm';
import {
  useUpdateCourier,
  useDeleteCourier,
  useCreateCourier,
} from '@entities/Couriers/hooks';
import { clearForm } from '../lib/constants';
import {
  Container,
  Title,
  ButtonContainer,
  ButtonChoiseForm,
} from '../styled';
import { RefreshContext } from '@shared/ui/Context/RefreshContext';
import { Modal } from 'antd';

export const CourierManagement = ({ gridRef }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [mode, setMode] = useState('add');
  const [formData, setFormData] = useState(clearForm);
  const { triggerRefresh } = useContext(RefreshContext);
  

  const openForm = (newMode) => {
    setMode(newMode);
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
    setFormData(clearForm);
  };

  const handleFormAdd = () => openForm('add');
  const handleFormUpdate = () => openForm('update');
  const handleFormDelete = () => openForm('delete');

  const handleFormSubmit = async (data) => {
    try {
      switch (mode) {
        case 'add':
          await useCreateCourier(data);
          break;
        case 'update':
          await useUpdateCourier(data);
          break;
        case 'delete':
          await useDeleteCourier(data);

          triggerRefresh();
          break;
        default:
          throw new Error('Unknown mode');
      }

      if (gridRef?.current?.api) {
        gridRef.current.api.refreshInfiniteCache();
      }
    } catch (err) {
      console.error('Error handling courier:', err);
    } finally {
      closeForm();
    }
  };

  return (
    <Container>
      <Title>Управление курьерами</Title>
      <ButtonContainer>
        <ButtonChoiseForm onClick={handleFormAdd}>Добавить</ButtonChoiseForm>
        <ButtonChoiseForm onClick={handleFormUpdate}>
          Редактировать
        </ButtonChoiseForm>
        <ButtonChoiseForm onClick={handleFormDelete}>Удалить</ButtonChoiseForm>
      </ButtonContainer>
      <Modal open={formVisible} onCancel={closeForm} footer={null} forceRender>
        <CourierForm
          mode={mode}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </Container>
  );
};
