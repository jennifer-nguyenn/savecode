import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  background: var(--gradient-rewards);
  margin-bottom: var(--space-3);
  border-radius: var(--radius-large);
`;

export const Header: React.FC = () => {
  return <HeaderContainer />;
};
