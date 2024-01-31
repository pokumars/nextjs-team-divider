export type GameConfig = { numOfTiers: number, numOfTeams: number }
export type GameConfigErrors = {
   numOfTeams: boolean;
   numOfTeamsErrMsg: string;
   numOfTiers: boolean;
   numOfTiersErrMsg: string; 
}