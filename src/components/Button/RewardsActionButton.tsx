import styled, { css } from 'styled-components';
import { Text } from '../Typography';
import { ReactNode } from 'react';

type ButtonVariant = 'default' | 'gradient';

interface RewardsActionButtonProps {
  /** The text to display in the button */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Button style variant */
  variant?: ButtonVariant;
  /** Optional icon to display before the label */
  icon?: ReactNode;
}

const ButtonWrapper = styled.div<{ variant: ButtonVariant }>`
  ${({ variant }) =>
    variant === 'gradient' &&
    css`
      background: var(--gradient-rewards);
      border-radius: var(--radius-medium);
      padding: 1px;
    `}
`;

const Button = styled.button<{ variant: ButtonVariant }>`
  width: 100%;
  background: ${({ variant }) =>
    variant === 'default' ? 'var(--color-card-bg)' : 'transparent'};
  border: none;
  border-radius: var(--radius-medium);
  padding: var(--space-2);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonText = styled(Text)`
  color: var(--color-text-primary);
  text-align: center;
  font-weight: var(--font-weight-bold);
`;

/**
 * RewardsActionButton component
 *
 * A button component specifically designed for the rewards section actions.
 * Supports default and gradient variants with consistent styling.
 */
export const RewardsActionButton: React.FC<RewardsActionButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  icon,
}): JSX.Element => {
  const buttonContent = (
    <>
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      )}
      <ButtonText variant="regular">{label}</ButtonText>
    </>
  );

  if (variant === 'gradient') {
    return (
      <ButtonWrapper variant={variant}>
        <Button
          variant={variant}
          onClick={onClick}
          type="button"
          aria-label={label}
        >
          {buttonContent}
        </Button>
      </ButtonWrapper>
    );
  }

  return (
    <Button
      variant={variant}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      {buttonContent}
    </Button>
  );
};
