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
  font-size: ${tokens.typography.sizes.h1.mobile};
  line-height: ${tokens.typography.lineHeight.h1.mobile};
  font-weight: ${tokens.typography.weights.extraBold};

  @media (min-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.typography.sizes.h1.desktop};
    line-height: ${tokens.typography.lineHeight.h1.desktop};
  }
`;

export const H2 = styled.h2`
  ${baseTextStyles}
  font-size: ${tokens.typography.sizes.h2.mobile};
  line-height: ${tokens.typography.lineHeight.h2.mobile};
  font-weight: ${tokens.typography.weights.extraBold};

  @media (min-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.typography.sizes.h2.desktop};
    line-height: ${tokens.typography.lineHeight.h2.desktop};
  }
`;

export const H3 = styled.h3`
  ${baseTextStyles}
  font-size: ${tokens.typography.sizes.h3};
  line-height: ${tokens.typography.lineHeight.h3};
  font-weight: ${tokens.typography.weights.bold};
`;

export const H4 = styled.h4`
  ${baseTextStyles}
  font-size: ${tokens.typography.sizes.h4};
  line-height: ${tokens.typography.lineHeight.h4};
  font-weight: ${tokens.typography.weights.bold};
`;

interface TextProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
}

const getTypographySize = (variant: TypographyVariant = 'regular') => {
  const sizes = tokens.typography.sizes;
  return typeof sizes[variant] === 'string' ? sizes[variant] : sizes.regular;
};

const getTypographyLineHeight = (variant: TypographyVariant = 'regular') => {
  const lineHeights = tokens.typography.lineHeight;
  return typeof lineHeights[variant] === 'string' ? lineHeights[variant] : lineHeights.regular;
};

export const Text = styled.p<TextProps>`
  ${baseTextStyles}
  font-size: ${({ variant = 'regular' }) => getTypographySize(variant)};
  line-height: ${({ variant = 'regular' }) => getTypographyLineHeight(variant)};
  font-weight: ${({ weight = 'medium' }) => tokens.typography.weights[weight]};
  color: ${({ color = 'primary' }) =>
    color === 'primary' ? tokens.colors.textPrimary : tokens.colors.textSecondary};
`; 