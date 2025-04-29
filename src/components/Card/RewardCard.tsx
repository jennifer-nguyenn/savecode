import React from 'react';
import styled from 'styled-components';
import { H4, Text } from '../Typography';
import { tokens } from '../../styles/tokens';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface RewardCardProps {
  title: string;
  points: number;
  progress: number;
  totalPoints: number;
  isUnlocked?: boolean;
}

const CardContainer = styled.div<{ $unlocked?: boolean }>`
  background: ${tokens.colors.cardBackground};
  border-radius: ${tokens.borderRadius.large};
  min-width: 311px;
  width: 311px;
  height: 167px;
  flex: 0 0 311px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  opacity: ${({ $unlocked }: { $unlocked?: boolean }) => ($unlocked ? 1 : 0.7)};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const UnlockedBadge = styled.div`
  background: var(--gradient-rewards);
  padding: 4px 8px;
  border-radius: ${tokens.borderRadius.pill};
  width: 71px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Title = styled(H4)`
  color: ${tokens.colors.textPrimary};
  font-size: ${tokens.typography.sizes.h4};
  line-height: ${tokens.typography.lineHeight.h4};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const PointsText = styled(Text)`
  color: ${tokens.colors.textSecondary};
  font-size: ${tokens.typography.sizes.small};
  line-height: ${tokens.typography.lineHeight.small};
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing.space2};
  margin-top: 16px;
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $progress }: { $progress: number }) => `${$progress}%`};
  background: var(--gradient-rewards);
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const ProgressText = styled(Text)`
  color: ${tokens.colors.textSecondary};
  font-size: ${tokens.typography.sizes.small};
  line-height: ${tokens.typography.lineHeight.small};
`;

const StarWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const RewardCard: React.FC<RewardCardProps> = ({
  title,
  points,
  progress,
  totalPoints,
  isUnlocked = false,
}: RewardCardProps) => {
  const progressPercentage = (progress / totalPoints) * 100;

  return (
    <CardContainer $unlocked={isUnlocked}>
      <StarWrapper>
        {isUnlocked ? (
          <StarIcon
            sx={{ width: 28, height: 28, color: 'var(--gradient-end)' }}
          />
        ) : (
          <StarBorderIcon
            sx={{ width: 28, height: 28, color: 'var(--gradient-end)' }}
          />
        )}
      </StarWrapper>
      {isUnlocked && (
        <UnlockedBadge>
          <Text variant="tiny" weight="bold">
            Unlocked!
          </Text>
        </UnlockedBadge>
      )}
      <Title>{title}</Title>
      <PointsText>{points} Points</PointsText>
      <ProgressBar>
        <ProgressTrack>
          <ProgressFill $progress={progressPercentage} />
        </ProgressTrack>
        <ProgressText>
          {progress}/{totalPoints}pts
        </ProgressText>
      </ProgressBar>
    </CardContainer>
  );
};
