import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import { H2, Text } from '../Typography';

interface RewardCardProps {
  title: string;
  points?: number;
  sales?: number;
  children?: React.ReactNode;
}

const CardContainer = styled.div`
  background: ${tokens.colors.cardBackground};
  border-radius: ${tokens.borderRadius.large};
  padding: ${tokens.spacing.space3};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.space2};
`;

const PointsText = styled(H2)`
  background: var(--gradient-rewards);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const SalesText = styled(H2)`
  color: ${tokens.colors.textPrimary};
  margin: 0;
`;

const HeaderText = styled(Text)`
  color: ${tokens.colors.textPrimary};
  font-weight: ${tokens.typography.weights.bold};
`;

export const RewardCard: React.FC<RewardCardProps> = ({
  title,
  points,
  sales,
  children,
}) => {
  return (
    <CardContainer>
      <HeaderText>{title}</HeaderText>
      {points && <PointsText>{points.toLocaleString()} pts</PointsText>}
      {sales && <SalesText>${sales.toLocaleString()}</SalesText>}
      {children}
    </CardContainer>
  );
};
