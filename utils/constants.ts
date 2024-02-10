import { Player } from '@/types/Player';

export const MAX_SKILL_TIER = 7;
export const emails = ['username@gmail.com', 'user02@gmail.com'];


export const genUuid = (): string => {
  return crypto.randomUUID();
};

export const testPlayers: Player[]= [
  { name: 'Pasi', skillTier: 4, id: '9fc0c603-7b3d-46a3-a7de-414af813b472' },
  { name: 'Jack', skillTier: 2, id: '32f2180e-2028-461e-bb7b-46ece5c63de8' },
  { name: 'Sammy', skillTier: 3, id: '9fcf07f1-4737-4b67-a282-b61cf2d0afc4' },
  { name: 'Yohan', skillTier: 3, id: '95ba69aa-84bb-4597-b759-860d6fa13416' },
  { name: 'Veli-Matti', skillTier: 3, id: '988cfb58-3a23-4d94-9367-31e90d22a276' },
  { name: 'Artem', skillTier: 3, id: 'f12d97ea-c44f-4b5d-9e90-1790e2825a3d' },
  { name: 'Gylfi', skillTier: 2, id: '14a0ef7d-e3c5-44ad-980f-478598141d03' },
  { name: 'Kwame', skillTier: 4, id: 'f540189f-f677-4d88-a4e1-b6f467cbbf37' },
  { name: 'Wahid', skillTier: 1, id: 'f48bc336-f66e-4976-bdb7-deb9cb964f2d' },
  { name: 'Sigurdsson', skillTier: 3, id: '8abde13e-b76b-439e-9e4e-20317f97b44f' },
  { name: 'Ilya', skillTier: 1, id: '8c0e4b85-18e7-4eb0-ad70-76d18c8a37a6' },
  { name: 'Kofi', skillTier: 1, id: '808c971b-229f-4769-8bbe-2d796d8c84d3' },
  { name: 'Kofi', skillTier: 2, id: '9054cd96-367c-4343-a182-862521f421b7' },
  { name: 'Kofi', skillTier: 3, id: '5d33eeb2-2ea1-4634-bfc4-3fa918fd2b85' },
  { name: 'Kofi', skillTier: 4, id: '6ae03601-b226-4382-872a-b63974ae9327' }
];
