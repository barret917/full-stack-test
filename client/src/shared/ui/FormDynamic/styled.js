import styled from 'styled-components';
import { Form as AntForm, Input as AntInput, Button as AntButton } from 'antd';

export const Form = styled(AntForm)`
  width: 100%;
  margin: 0 auto;
`;

export const FormItem = styled(AntForm.Item)`
  margin-bottom: 15px;
`;

export const Input = styled(AntInput)`
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled(AntButton)`
  width: fit-content;
  padding: 10px 15px;
  background-color: rgb(37, 155, 63);
  border-color: #28a745;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(37, 155, 63, 0.9) !important;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;

  width: 100%;
  display: flex;
  justify-content: flex-end !important;
`;
