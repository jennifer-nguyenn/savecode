import styled from 'styled-components';
import { tokens } from '../styles/tokens';

interface TextProps {
  variant?: 'large' | 'regular' | 'small' | 'tiny';
  weight?: 'medium' | 'bold' | 'extraBold';
  color?: 'primary' | 'secondary';
}

const baseTypographyStyles = `
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
`;

export const H1 = styled.h1`
  ${baseTypographyStyles}
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-extra-bold);

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: var(--font-size-h1-mobile);
    line-height: var(--line-height-h1-mobile);
  }
`;

export const H2 = styled.h2`
  ${baseTypographyStyles}
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
  font-weight: var(--font-weight-extra-bold);

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: var(--font-size-h2-mobile);
    line-height: var(--line-height-h2-mobile);
  }
`;

export const H3 = styled.h3`
  ${baseTypographyStyles}
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
  font-weight: var(--font-weight-extra-bold);
`;

export const H4 = styled.h4`
  ${baseTypographyStyles}
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
  font-weight: var(--font-weight-extra-bold);
`;

export const Text = styled.p<TextProps>`
  ${baseTypographyStyles}
  font-size: ${({ variant = 'regular' }) => `var(--font-size-${variant})`};
  line-height: ${({ variant = 'regular' }) => `var(--line-height-${variant})`};
  font-weight: ${({ weight = 'medium' }) => `var(--font-weight-${weight})`};
  color: ${({ color = 'primary' }) =>
    color === 'primary'
      ? 'var(--color-text-primary)'
      : 'var(--color-text-secondary)'};
`;

export const Body = styled.p`
  ${baseTypographyStyles}
  color: var(--color-text-primary);
  font-size: var(--font-size-regular);
  line-height: var(--line-height-regular);
`;
