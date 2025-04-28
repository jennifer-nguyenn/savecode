import styled, { css } from 'styled-components';
import { tokens } from '../../styles/tokens';
import { ActionButton } from '../Card';
import { ReactNode } from 'react';

interface ActionButtonProps {
  icon: ReactNode;
  header: string;
  description: string;
  onClick?: () => void;
  rightIcon?: ReactNode;
}

interface StyledActionButtonProps extends ActionButtonProps {
  variant?: 'default' | 'gradient';
}

const StyledActionButtonWrapper = styled.div<{
  variant: 'default' | 'gradient';
}>`
  ${({ variant }) =>
    variant === 'gradient' &&
    css`
      background: var(--gradient-rewards);
      border-radius: ${tokens.borderRadius.medium};
      padding: 1px;
    `}
`;

const StyledActionButtonContainer = styled(ActionButton)<{
  variant: 'default' | 'gradient';
}>`
  background: ${({ variant }) =>
    variant === 'default' ? tokens.colors.cardBackground : 'transparent'};
  border-radius: ${tokens.borderRadius.medium};
  padding: ${tokens.spacing.space2};
  width: 100%;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledActionButton: React.FC<StyledActionButtonProps> = ({
  variant = 'default',
  icon,
  header,
  description,
  onClick,
  rightIcon,
}) => {
  const buttonProps = {
    icon,
    header,
    description,
    onClick,
    rightIcon,
  };

  if (variant === 'gradient') {
    return (
      <StyledActionButtonWrapper variant={variant}>
        <StyledActionButtonContainer variant={variant} {...buttonProps} />
      </StyledActionButtonWrapper>
    );
  }

  return <StyledActionButtonContainer variant={variant} {...buttonProps} />;
};
