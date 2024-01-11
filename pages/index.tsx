import GameConfigSection from '@/components/GameConfigSection';
import PlayersSection from '@/components/PlayersSection';
import { Player } from '@/types/Player';
// import { testPlayers } from '@/utils/constants';
import { useState } from 'react';


export default function Home() {
  const [numOfTeams, setNumOfTeams] = useState<number>(2);
  const [numOfTiers, setNumOfTiers] = useState<number>(3);
  const [registeredPlayers, setRegisteredPlayers] = useState<Array<Player>>([]);
  
  const handlePlayerDelete = (playerToBeDeleted: Player) => {
    console.log('playerToBeDeleted ', playerToBeDeleted);

    // setRegisteredPlayers(registeredPlayers.filter((p) => p[0]!== playerToBeDeleted[0]/*filter by name */ ));
    setRegisteredPlayers(registeredPlayers.filter(
      (p) => !(p.name === playerToBeDeleted.name && p.skillTier === playerToBeDeleted.skillTier)
    ));
  };

  return (
    <div className='p-5'>
      <GameConfigSection 
        numOfTeams={numOfTeams}
        numOfTiers={numOfTiers}
        onChangeNumTeams={e => setNumOfTeams(e)}
        onChangeNumTiers={e => setNumOfTiers(e)}
      />
      <PlayersSection 
        numOfTiers={numOfTiers}
        registeredPlayers={registeredPlayers}
        onClickDelete={handlePlayerDelete}
      /> 
    </div>
  );
}
