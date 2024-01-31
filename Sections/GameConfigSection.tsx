import NumericTextField from '@/components/NumericTextField';
import { GameConfig, GameConfigErrors } from '@/types/GameConfig';
import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';

interface GameConfigProps { 
  // numOfTeams: number;
  // numOfTiers: number;
  // onChangeNumTeams: (e:any) => void;
  // onChangeNumTiers: (e: any) => void;
  gameConfigValues: GameConfig
  gameConfigErrors: GameConfigErrors
  onChangeGameConfigValues: (fieldName: string, value: any) => void
 }

export default function GameConfigSection(props: GameConfigProps) {
  const { gameConfigValues, onChangeGameConfigValues, gameConfigErrors } = props;

  const handleBlur = () => {
    console.log('handleBlur');
  };

  return (
    <div>
      <h2>How is the session going to be like?</h2>
      <p> How many teams? how many different tiers of skill do you want to use to divide the teams by. </p>
      
      <div>
        <div className="sm:w-full md:w-1/4" >
          <NumericTextField
            autoFocus
            margin="dense"
            id="numOfTeams"
            name='numOfTeams'
            label="Number of teams"
            type="text"
            required
            isValid={gameConfigErrors.numOfTeams}
            errorMessage={gameConfigErrors.numOfTeamsErrMsg}
            value={gameConfigValues.numOfTeams}
            customOnChange={onChangeGameConfigValues}
            fullWidth
          />
        </div>

        <div className="sm:w-full md:w-1/4">
          <NumericTextField 
            autoFocus
            margin="dense"
            id="numOfTiers"
            name='numOfTiers'
            label="Number of tiers"
            isValid={gameConfigErrors.numOfTiers}
            errorMessage={gameConfigErrors.numOfTiersErrMsg}
            value={gameConfigValues.numOfTiers}
            required
            fullWidth
            customOnChange={onChangeGameConfigValues}
          />
        </div>
      </div>
    </div>

  );
}