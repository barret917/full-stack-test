import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

export const FormContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;
export const ButtonChoiseForm = styled(Button).attrs({
  type: 'primary',
})`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
