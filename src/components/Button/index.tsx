import styled, { keyframes } from 'styled-components';
import { tokens } from '../../styles/tokens';
import { Icon } from '../Icon';

interface ButtonProps {
  $variant?: 'primary' | 'secondary';
  $fullWidth?: boolean;
  className?: string;
  $isLoading?: boolean;
  icon?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const baseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing.space1};
  padding: ${tokens.spacing.space2} ${tokens.spacing.space3};
  font-family: ${tokens.typography.fontFamily};
  font-size: ${tokens.typography.sizes.regular};
  font-weight: ${tokens.typography.weights.bold};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ $fullWidth = false }: ButtonProps) => ($fullWidth ? '100%' : 'auto')};
  position: relative;
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${baseButtonStyles}
  border-radius: ${({ $variant = 'secondary' }) =>
    $variant === 'primary' ? tokens.borderRadius.radius3 : tokens.borderRadius.radius1};
  background: ${({ $variant = 'secondary' }) =>
    $variant === 'primary'
      ? `linear-gradient(
          90deg,
          ${tokens.colors.gradient.start} 0%,
          ${tokens.colors.gradient.middle} 50%,
          ${tokens.colors.gradient.end} 100%
        )`
      : tokens.colors.cardBackground};
  color: ${tokens.colors.textPrimary};
  box-shadow: ${({ $variant = 'secondary' }) =>
    $variant === 'primary' ? '0 4px 12px rgba(143, 6, 209, 0.3)' : 'none'};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
  cursor: ${({ $isLoading }) => ($isLoading ? 'wait' : 'pointer')};

  &:hover:not(:disabled) {
    ${({ $variant = 'secondary' }) =>
      $variant === 'primary'
        ? `
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(143, 6, 209, 0.4);
        `
        : `
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        `}
  }

  .loading-spinner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: ${tokens.colors.textPrimary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

interface IconButtonProps {
  className?: string;
  $isLoading?: boolean;
  icon: string;
}

export const IconButton = styled.button<IconButtonProps>`
  ${baseButtonStyles}
  padding: ${tokens.spacing.space1};
  border-radius: ${tokens.borderRadius.radius1};
  background: ${tokens.colors.cardBackground};
  width: 40px;
  height: 40px;
  opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
  cursor: ${({ $isLoading }) => ($isLoading ? 'wait' : 'pointer')};
  
  .material-icons {
    font-size: 24px;
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
    
    .material-icons {
      transform: scale(1.1);
    }
  }

  .loading-spinner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: ${tokens.colors.textPrimary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;
