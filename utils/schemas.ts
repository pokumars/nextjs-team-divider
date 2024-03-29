import { GameConfig } from '@/types/GameConfig';
import { Player } from '@/types/Player';
import { ObjectSchema, boolean, number, object, string } from 'yup';
import { MAX_SKILL_TIER } from './constants';

//TODO: revisit this - might not be a good idea to have the validator use a number that tghe user passes in which will then b eused to validate the user input
export const generateGameConfigSchema = (maxNumberOfTeams: number= MAX_SKILL_TIER, maxNumOfTiers: number= 10): ObjectSchema<GameConfig> => {
  return object({
    numOfTeams: number().required().positive().integer().min(2).max(maxNumberOfTeams), 
    numOfTiers: number().required().positive().integer().min(1).max(maxNumOfTiers)
  });
};

export const generatePlayerConfigSchema = (maxSkilltiers: number= MAX_SKILL_TIER): ObjectSchema<Player> => {
  return object({
    name: string().required().min(2),
    skillTier: number().required().positive().integer().min(1).max(maxSkilltiers),
    id: string().required(),
    comingToSession: boolean().required(),
  });
};

