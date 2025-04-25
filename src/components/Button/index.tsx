import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
}

const baseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${tokens.spacing.space2} ${tokens.spacing.space3};
  font-family: ${tokens.typography.fontFamily};
  font-size: ${tokens.typography.sizes.regular};
  font-weight: ${tokens.typography.weights.bold};
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: ${({ fullWidth = false }: ButtonProps) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${baseButtonStyles}
  border-radius: ${({ variant = 'secondary' }) =>
    variant === 'primary' ? tokens.borderRadius.radius3 : tokens.borderRadius.radius1};
  background: ${({ variant = 'secondary' }) =>
    variant === 'primary'
      ? `linear-gradient(
          90deg,
          ${tokens.colors.gradient.start} 0%,
          ${tokens.colors.gradient.middle} 50%,
          ${tokens.colors.gradient.end} 100%
        )`
      : tokens.colors.cardBackground};
  color: ${tokens.colors.textPrimary};
`;

interface IconButtonProps {
  className?: string;
}

export const IconButton = styled.button<IconButtonProps>`
  ${baseButtonStyles}
  padding: ${tokens.spacing.space1};
  border-radius: ${tokens.borderRadius.radius1};
  background: ${tokens.colors.cardBackground};
  width: 40px;
  height: 40px;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${tokens.colors.textPrimary};
  }
`; 