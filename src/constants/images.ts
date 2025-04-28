export const IMAGES = {
  // Stadium/Event images
  STADIUM_1: '/assets/images/stadium-1.jpg',
  STADIUM_2: '/assets/images/stadium-2.jpg',
  STADIUM_3: '/assets/images/stadium-3.jpg',

  // Event placeholder images
  EVENT_1: '/assets/images/event-1.jpg',
  EVENT_2: '/assets/images/event-2.jpg',

  // Header background
  HEADER_BG: '/assets/images/header-bg.jpg',
} as const;

// Image dimensions for optimization
export const IMAGE_DIMENSIONS = {
  HEADER: {
    width: 1200,
    height: 400,
  },
  CARD: {
    width: 800,
    height: 450,
  },
} as const;
