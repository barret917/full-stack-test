import React from 'react';
import { StyledButton } from '../styled';

export const Button = ({ onClick, children, variant = 'primary' }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};
