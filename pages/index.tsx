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
  // const [numOfTeams, setNumOfTeams] = useState<number>(2);
  // const [numOfTiers, setNumOfTiers] = useState<number>(3);
  const [registeredPlayers, setRegisteredPlayers] = useState<Array<Player>>([]);
  const [gameConfigValues, setGameConfigValues] = useState<GameConfig>({ numOfTeams: 2, numOfTiers: 3 });
  const [gameConfigErrors, setGameConfigErrors] = useState<typeof defaultGameConfigErrors>(defaultGameConfigErrors);
  
  const handlePlayerDelete = (playerToBeDeleted: Player) => {
    console.log('playerToBeDeleted ', playerToBeDeleted);

    // setRegisteredPlayers(registeredPlayers.filter((p) => p[0]!== playerToBeDeleted[0]/*filter by name */ ));
    setRegisteredPlayers(registeredPlayers.filter(
      (p) => !(p.name === playerToBeDeleted.name && p.skillTier === playerToBeDeleted.skillTier)
    ));
  };

  const handleGameConfigValueChange= (fieldName: string, value: number ) => {
    // keyof typeof gameConfigValues is equivalent to GameConfig. i.e keyof typeof an OBJECT is equivalent to keyof the TYPE
    console.log('handleGameConfigValueChange ', fieldName, value);
    const configSchema = generateGameConfigSchema();
    const newGameConfigValues= { ...gameConfigValues, [fieldName]: value };
    setGameConfigValues(newGameConfigValues);    


    configSchema.validate(newGameConfigValues, { abortEarly: false }).then(() => {
      // No validation errors, clear the errors and set isValid to true
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
        registeredPlayers={registeredPlayers}
        onClickDelete={handlePlayerDelete}
      /> 
    </div>
  );
};
