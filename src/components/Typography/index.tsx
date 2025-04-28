import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

type TypographyVariant = 'large' | 'regular' | 'small' | 'tiny';
type TypographyWeight = keyof typeof tokens.typography.weights;
type TypographyColor = 'primary' | 'secondary';

const baseTextStyles = `
  margin: 0;
  padding: 0;
  font-family: ${tokens.typography.fontFamily};
`;

export const H1 = styled.h1`
  ${baseTextStyles}
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-extra-bold);
`;

export const H2 = styled.h2`
  ${baseTextStyles}
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
  font-weight: var(--font-weight-extra-bold);
`;

export const H3 = styled.h3`
  ${baseTextStyles}
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
  font-weight: var(--font-weight-extra-bold);
`;

export const H4 = styled.h4`
  ${baseTextStyles}
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
  font-weight: var(--font-weight-extra-bold);
`;

interface TextProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
}

const getTypographySizeVar = (variant: TypographyVariant = 'regular') => {
  switch (variant) {
    case 'large':
      return 'var(--font-size-large)';
    case 'regular':
      return 'var(--font-size-regular)';
    case 'small':
      return 'var(--font-size-small)';
    case 'tiny':
      return 'var(--font-size-tiny)';
    default:
      return 'var(--font-size-regular)';
  }
};

const getTypographyLineHeightVar = (variant: TypographyVariant = 'regular') => {
  switch (variant) {
    case 'large':
      return 'var(--line-height-large)';
    case 'regular':
      return 'var(--line-height-regular)';
    case 'small':
      return 'var(--line-height-small)';
    case 'tiny':
      return 'var(--line-height-tiny)';
    default:
      return 'var(--line-height-regular)';
  }
};

export const Text = styled.p<TextProps>`
  ${baseTextStyles}
  font-size: ${({ variant = 'regular' }) => getTypographySizeVar(variant)};
  line-height: ${({ variant = 'regular' }) =>
    getTypographyLineHeightVar(variant)};
  font-weight: ${({ weight = 'medium' }) => tokens.typography.weights[weight]};
  color: ${({ color = 'primary' }) =>
    color === 'primary'
      ? tokens.colors.textPrimary
      : tokens.colors.textSecondary};
`;
