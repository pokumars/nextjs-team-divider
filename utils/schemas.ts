import { GameConfig } from '@/types/GameConfig';
import { Player } from '@/types/Player';
import { ObjectSchema, number, object, string } from 'yup';
import { MAX_SKILL_TIER } from './constants';
import { Kid } from '@/Sections/KidSection';

//TODO: revisit this - might not be a good idea to have the validator use a number that tghe user passes in which will then b eused to validate the user input
export const generateGameConfigSchema = (maxNumberOfTeams: number= MAX_SKILL_TIER, maxNumOfTiers: number= 7): ObjectSchema<GameConfig> => {
  return object({
    numOfTeams: number().required().positive().integer().min(2).max(maxNumberOfTeams), 
    numOfTiers: number().required().positive().integer().min(1).max(maxNumOfTiers)
  });
};

export const generatePlayerConfigSchema = (maxSkilltiers: number= MAX_SKILL_TIER): ObjectSchema<Player> => {
  return object({
    name: string().required(),
    skillTier: number().required().positive().integer().min(1).max(maxSkilltiers),
    id: string().required(),
  });
};

export const generateKidSchema = (maxAge: number= 5): ObjectSchema<Kid> => {
  return object({
    name: string().required().min(3, 'must be at least 3 characters long'),
    age: number().required().positive().integer().min(1).max(maxAge),
  });
};