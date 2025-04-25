# Ticket Marketplace App

A modern, responsive ticket marketplace application built with React and TypeScript, following industry best practices and Google's style guide.

## Features

- Modern, responsive UI design
- Component-based architecture
- Type-safe development with TypeScript
- Consistent design system with tokens
- Accessibility-first approach
- Performance optimized

## Tech Stack

- React 18
- TypeScript 4.9
- Styled Components
- Modern CSS features
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
  ├── components/         # Reusable UI components
  │   ├── Button/
  │   ├── Card/
  │   └── Typography/
  ├── styles/            # Global styles and design tokens
  │   └── tokens.ts
  ├── App.tsx           # Main application component
  └── index.tsx         # Application entry point
```

## Design System

### Colors

- Background: #111111
- Text Primary: #FFFFFF
- Text Secondary: rgba(255, 255, 255, 0.7)
- Card Background: rgba(255, 255, 255, 0.05)
- Gradient: #8F06D1 → #CC18A6 → #FC1470

### Typography

- Font Family: Greycliff CF
- Weights: Medium (500), Bold (700), Extra Bold (800)
- Sizes: From 12px to 45px with defined line heights

### Spacing

Based on 8px grid:
- space-1: 8px
- space-2: 16px
- space-3: 24px
- space-4: 32px
- space-5: 40px

### Border Radius

- radius-1: 8px
- radius-2: 16px
- radius-3: 1000px (pill)

## Development Guidelines

1. Follow Google's TypeScript Style Guide
2. Use meaningful component and variable names
3. Write clean, maintainable code
4. Keep components small and focused
5. Use TypeScript's type system effectively
6. Follow accessibility best practices
7. Optimize for performance

## Performance Considerations

- Lazy loading of images
- Code splitting
- Tree shaking
- Optimized bundle size
- Efficient styling with styled-components

## Accessibility

- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 