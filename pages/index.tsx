// index.tsx before I did the child thing for the article

import GameConfigSection from '@/Sections/GameConfigSection';
import PlayersSection from '@/Sections/PlayersSection';
import { GameConfig } from '@/types/GameConfig';
import { Player } from '@/types/Player';
import { generateGameConfigSchema } from '@/utils/schemas';
// import { testPlayers } from '@/utils/constants';
import { useState } from 'react';
import { ValidationError } from 'yup';

const defaultGameConfigErrors = { numOfTeams: true, numOfTeamsErrMsg: ' ', numOfTiers: true, numOfTiersErrMsg: ' ' };


export default function Home() {
  const [gameConfigValues, setGameConfigValues] = useState<GameConfig>({ numOfTeams: 2, numOfTiers: 3 });
  const [gameConfigErrors, setGameConfigErrors] = useState<typeof defaultGameConfigErrors>(defaultGameConfigErrors);
  

  const handleGameConfigValueChange= async (fieldName: string, value: number ) => {
    // keyof typeof gameConfigValues is equivalent to GameConfig. i.e keyof typeof an OBJECT is equivalent to keyof the TYPE
    const configSchema = generateGameConfigSchema();
    const newGameConfigValues= { ...gameConfigValues, [fieldName]: value };
    setGameConfigValues(newGameConfigValues);    

    configSchema.validate(newGameConfigValues, { abortEarly: false }).then((res) => {
      // No validation errors, clear the errors and set isValid to true
      console.log('res of validate then', res);
      setGameConfigErrors({ ...defaultGameConfigErrors });
    }).catch((err: ValidationError) => {
      // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
      const errorMessages = err.inner.reduce((acc, curVal) => {
        const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };

        return { ...acc, ...tempErrMsg  };
      }, {});
        // resets all values to as if the validation passed and then adds the current errors
      setGameConfigErrors({ ...defaultGameConfigErrors, ...errorMessages });
    });
  };

  return (
    <div className='p-5'>
      <GameConfigSection 
        gameConfigValues={gameConfigValues}
        onChangeGameConfigValues={handleGameConfigValueChange}
        gameConfigErrors={gameConfigErrors}
      />
      <PlayersSection 
        numOfTiers={gameConfigValues.numOfTiers}
        numOfTeams={gameConfigValues.numOfTeams}
      /> 
    </div>
  );
};


// Another way of doing the validation instead of using the .then(). catch() is the try-catch. When the 
// validated value is not up to standard, it throws an error so then you handle that error scenario in
// the catch branch. If it is valid, then you can handle the valid case straight away in the try branch.
/*     try {
      const validationResult = await configSchema.validate(newGameConfigValues, { abortEarly: false });
      console.log('validationResult in try catch ',validationResult);
      // No validation errors, clear the errors and set isValid to true
      setGameConfigErrors({ ...defaultGameConfigErrors });
      
    } catch (err: any) {
      // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
      const errorMessages = err.inner.reduce((acc: any, curVal: { path: any; message: any; }) => {
        const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };

        return { ...acc, ...tempErrMsg  };
      }, {});
        // resets all values to as if the validation passed and then adds the current errors
      setGameConfigErrors({ ...defaultGameConfigErrors, ...errorMessages });
    } */