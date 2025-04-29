import React from 'react';
import styled from 'styled-components';
import { H4, Text, H2 } from '../Typography';
import { baseCardStyles } from './index';

interface RewardCardProps {
  title: string;
  points?: number;
  sales?: number;
  description?: string;
  children?: React.ReactNode;
}

const CardContainer = styled.div`
  ${baseCardStyles}
  width: 311px;
  max-width: 311px;
  flex: 0 0 auto;
  background: var(--color-card-bg);
  color: var(--color-text);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  .progress-bar {
    height: 4px;
    background: var(--color-progress-bg);
    border-radius: var(--radius-small);
    margin-top: var(--space-2);
    overflow: hidden;

    .progress {
      height: 100%;
      background: var(--color-primary);
      border-radius: var(--radius-small);
    }
  }
`;

const HeaderText = styled(Text)`
  color: var(--color-text);
  font-weight: var(--font-weight-bold);
`;

const PointsText = styled(H2)`
  color: var(--color-primary);
  margin: 0;
`;

const SalesText = styled(H2)`
  color: var(--color-text);
  margin: 0;
`;

const DescriptionText = styled(Text)`
  color: var(--color-text-secondary);
`;

export const RewardCard: React.FC<RewardCardProps> = ({
  title,
  points,
  sales,
  description,
  children,
}) => {
  return (
    <CardContainer>
      <HeaderText>{title}</HeaderText>
      {points && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PointsText>{points}</PointsText>
          <Text variant="regular">Points</Text>
        </div>
      )}
      {sales && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SalesText>{sales}</SalesText>
          <Text variant="regular">Sales</Text>
        </div>
      )}
      {description && (
        <DescriptionText variant="regular">{description}</DescriptionText>
      )}
      {children}
    </CardContainer>
  );
};
