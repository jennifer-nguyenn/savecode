import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: var(--reward-card-width-mobile);
  height: 400px;
  background: var(--color-card-bg);
  border-radius: var(--radius-large);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  position: relative;
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: var(--reward-card-width-desktop);
  }
`;

// ... existing code ...
