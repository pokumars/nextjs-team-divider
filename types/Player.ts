export type Player = {name: string, skillTier: number, id: string, comingToSession: boolean}

export const skillTierNames: 
  {[key: number]: string} = {
    1: 'Level 1',
    2: 'Level 2',
    3: 'Level 3',
    4: 'Level 4',
    5: 'Level 5',
    6: 'Level 6',
    7: 'Level 7',
    8: 'Level 8',
    9: 'Level 9',
    10: 'Level 10'
  }; 