import React, { useState,useContext } from 'react';
import { CourierForm } from './CourierForm';
import { Button } from '@shared/ui/Button';
import { useUpdateCourier } from '@entities/Couriers/hooks';
import { useDeleteCourier } from '@entities/Couriers/hooks';
import { useCreateCourier } from '@entities/Couriers/hooks';
import { clearForm } from '../lib/constants';
import { Container, Title, ButtonContainer, FormContainer } from '../styled';
import { RefreshContext } from '@shared/ui/Context/RefreshContext'; 

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
          triggerRefresh()
          break;
        default:
          throw new Error('Unknown mode');
      }
      if (gridRef.current) {
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
          <CourierForm
            mode={mode}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
          />
        </FormContainer>
      )}
    </Container>
  );
};
