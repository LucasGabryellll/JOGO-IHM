export interface TiledPosition {
  top: number;
  left: number;
  type: 'normal' | 'quiz' | 'bonus' | 'final' | 'initial'
}

export const positionMapTiled: TiledPosition[] = [
  { top: 300, left: 0, type: 'initial' },
  { top: 250, left: 0, type: 'normal' },
  { top: 200, left: 0, type: 'normal' },
  { top: 200, left: 50, type: 'normal' },

  { top: 150, left: 50, type: 'normal' },

  { top: 100, left: 50, type: 'quiz' },
  { top: 100, left: 100, type: 'normal' },
  { top: 100, left: 150, type: 'bonus' },
  { top: 100, left: 200, type: 'quiz' },
  { top: 100, left: 250, type: 'normal' },

  { top: 150, left: 250, type: 'bonus' },

  { top: 200, left: 250, type: 'bonus' },
  { top: 250, left: 250, type: 'normal' },
  { top: 300, left: 250, type: 'quiz' },
  { top: 300, left: 300, type: 'normal' },
  { top: 300, left: 350, type: 'normal' },
  { top: 300, left: 400, type: 'bonus' },

  { top: 250, left: 400, type: 'normal' },
  { top: 200, left: 400, type: 'quiz' },
  { top: 150, left: 400, type: 'normal' },

  { top: 100, left: 400, type: 'normal' },
  { top: 100, left: 450, type: 'quiz' },
  { top: 100, left: 500, type: 'normal' },
  { top: 100, left: 550, type: 'bonus' },

  { top: 150, left: 550, type: 'normal' },
  { top: 200, left: 550, type: 'normal' },
  { top: 250, left: 550, type: 'quiz' },

  { top: 250, left: 600, type: 'normal' },
  { top: 250, left: 650, type: 'bonus' },
  { top: 250, left: 700, type: 'quiz' },

  { top: 200, left: 700, type: 'normal' },
  { top: 150, left: 700, type: 'bonus' },

  { top: 150, left: 750, type: 'normal' },
  { top: 150, left: 800, type: 'quiz' },

  { top: 200, left: 800, type: 'normal' },
  { top: 250, left: 800, type: 'normal' },
  { top: 300, left: 800, type: 'normal' },

  { top: 350, left: 800, type: 'final' }
];