import { css } from 'styled-components';

export const tokens = {
  colors: {
    background: '#111111',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    darkTextPrimary: '#111111',
    darkTextSecondary: 'rgba(17, 17, 17, 0.7)',
    cardBackground: 'rgba(255, 255, 255, 0.05)',
    orderCard: '#FFFFFF',
    gradient: {
      start: '#8F06D1',
      middle: '#CC18A6',
      end: '#FC1470'
    }
  },
  spacing: {
    space0: '0px',
    space1: '8px',
    space2: '16px',
    space3: '24px',
    space4: '32px',
    space5: '40px'
  },
  borderRadius: {
    radius0: '0px',
    radius1: '8px',
    radius2: '16px',
    radius3: '1000px'
  },
  typography: {
    fontFamily: "'Greycliff CF', sans-serif",
    weights: {
      medium: 500,
      bold: 700,
      extraBold: 800
    },
    sizes: {
      h1: {
        desktop: '45px',
        mobile: '64px'
      },
      h2: {
        desktop: '36px',
        mobile: '40px'
      },
      h3: '28px',
      h4: '18px',
      large: '18px',
      regular: '16px',
      small: '14px',
      tiny: '12px'
    },
    lineHeight: {
      h1: {
        desktop: '50px',
        mobile: '70px'
      },
      h2: {
        desktop: '40px',
        mobile: '48px'
      },
      h3: '32px',
      h4: '24px',
      large: '24px',
      regular: '24px',
      small: '20px',
      tiny: '16px'
    }
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px'
  }
} as const;

export const globalStyles = css`
  :root {
    /* Colors */
    --color-background: ${tokens.colors.background};
    --color-text-primary: ${tokens.colors.textPrimary};
    --color-text-secondary: ${tokens.colors.textSecondary};
    --color-card-bg: ${tokens.colors.cardBackground};
    --color-order-card: ${tokens.colors.orderCard};
    
    /* Gradients */
    --gradient-rewards: linear-gradient(
      90deg,
      ${tokens.colors.gradient.start} 0%,
      ${tokens.colors.gradient.middle} 50%,
      ${tokens.colors.gradient.end} 100%
    );
    
    /* Typography */
    --font-family: ${tokens.typography.fontFamily};
    
    /* Spacing */
    --space-0: ${tokens.spacing.space0};
    --space-1: ${tokens.spacing.space1};
    --space-2: ${tokens.spacing.space2};
    --space-3: ${tokens.spacing.space3};
    --space-4: ${tokens.spacing.space4};
    --space-5: ${tokens.spacing.space5};
    
    /* Border Radius */
    --radius-0: ${tokens.borderRadius.radius0};
    --radius-1: ${tokens.borderRadius.radius1};
    --radius-2: ${tokens.borderRadius.radius2};
    --radius-3: ${tokens.borderRadius.radius3};
  }
`;

export type Tokens = typeof tokens; 