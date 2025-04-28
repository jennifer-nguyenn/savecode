import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = styled.span.attrs<IconProps>(
  ({ name, size = 24, color }) => ({
    className: 'material-icons',
    style: {
      fontSize: `${size}px`,
      color: color || tokens.colors.textPrimary,
    },
    children: name,
  })
)<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size = 24 }) => `${size}px`};
  color: ${({ color }) => color || tokens.colors.textPrimary};
  transition: color 0.2s ease;
`;
