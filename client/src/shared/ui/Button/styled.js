import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: #6c757d;

      &:hover {
        background-color: #565e64;
      }
    `}
`;
