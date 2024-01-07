import GameConfigSection from '@/components/GameConfigSection';
import PlayersSection from '@/components/PlayersSection';
import { Player } from '@/types/Player';
import { useState } from 'react';


export default function Home() {
  const [numOfTeams, setNumOfTeams] = useState<number>(2);
  const [numOfTiers, setNumOfTiers] = useState<number>(3);
  const [registeredPlayers, setRegisteredPlayers] = useState<Array<Player>>([['Pasi', 4], ['Kwame', 4], ['Sammy', 3], ['Paul', 3], ['Yohan', 3], ['Kofi', 3], ['Artem', 3], ['Gylfi', 2], ['Hung', 2], ['Jack', 2], ['Wahid', 1], ['Ilya', 1]]);
  
  const handlePlayerDelete = (playerToBeDeleted: Player) => {
    console.log('playerToBeDeleted ', playerToBeDeleted);
    setRegisteredPlayers(registeredPlayers.filter((p) => p[0]!== playerToBeDeleted[0]/*filter by name */ ));
  };

  return (
    <>
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
    </>
  );
}



