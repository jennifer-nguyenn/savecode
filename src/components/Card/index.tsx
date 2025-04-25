import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

const baseCardStyles = `
  border-radius: ${tokens.borderRadius.radius2};
  padding: ${tokens.spacing.space2};
`;

interface CardProps {
  className?: string;
}

interface RewardCardProps extends CardProps {
  unlocked?: boolean;
}

export const OrderCard = styled.div<CardProps>`
  ${baseCardStyles}
  background-color: ${tokens.colors.orderCard};
  color: ${tokens.colors.darkTextPrimary};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.space1};
`;

export const ItemCard = styled.div<CardProps>`
  ${baseCardStyles}
  background-color: ${tokens.colors.cardBackground};
  color: ${tokens.colors.textPrimary};
  overflow: hidden;

  .image-container {
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio */
    position: relative;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: ${tokens.spacing.space2};
    display: flex;
    flex-direction: column;
    gap: ${tokens.spacing.space1};
  }
`;

export const ActionCard = styled.div<CardProps>`
  ${baseCardStyles}
  background-color: ${tokens.colors.cardBackground};
  color: ${tokens.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.space2};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
`;

export const RewardCard = styled.div<RewardCardProps>`
  ${baseCardStyles}
  background: ${tokens.colors.gradient.start};
  background: linear-gradient(
    90deg,
    ${tokens.colors.gradient.start} 0%,
    ${tokens.colors.gradient.middle} 50%,
    ${tokens.colors.gradient.end} 100%
  );
  color: ${tokens.colors.textPrimary};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.space2};
  opacity: ${({ unlocked = false }) => (unlocked ? 1 : 0.7)};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${tokens.borderRadius.radius3};
    overflow: hidden;

    .progress {
      height: 100%;
      background-color: ${tokens.colors.textPrimary};
      transition: width 0.3s ease;
    }
  }
`; 