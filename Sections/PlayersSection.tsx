import { Player, skillTierNames } from '@/types/Player';
import React, { useState } from 'react';
import PlayerChip from '../components/PlayerChip';
import AddPlayerDialog from '../components/AddPlayerDialog';
import { testPlayers } from '@/utils/constants';

interface PlayersComponentProps {
  numOfTiers: number;
  numOfTeams: number;
  //registeredPlayers: Player[]
  //onClickDelete: (p:Player) => void
}
/**Players Section of app */
export default function PlayersSection(props: PlayersComponentProps) {
  const { numOfTiers, numOfTeams } = props;
  const [addPlayerDialogOpen, setAddPlayerDialogOpen] = React.useState<boolean>(false);
  const [registeredPlayers, setRegisteredPlayers] = useState<Array<Player>>(testPlayers);

  const handlePlayerDelete = (playerToBeDeleted: Player) => {
    setRegisteredPlayers(registeredPlayers.filter(
      (p) => !(p.name === playerToBeDeleted.name && p.skillTier === playerToBeDeleted.skillTier)
    ));
  };

  const handlePlayerModify = (p: Player) => {
    //when you click on the player chip. Opens dialog for player modification
    console.log('clicked player ', p);
    const modifiedRegisteredPlayerArray = registeredPlayers.map((rp) => rp.id === p.id ? p : rp);
    setRegisteredPlayers(modifiedRegisteredPlayerArray);
  };

  const handlePlayerAdd = (player: Player) => {
    //for adding a completely new player
    setRegisteredPlayers([...registeredPlayers, player]);
  };

  const PlayerView = () => {
    return registeredPlayers.length < 1 
      ? <p>No players added.</p>
      : (<div className='rounded-lg p-5 my-3 bg-sky-200'>
        <div>{registeredPlayers.map(
          (p) => <PlayerChip key={`${p.name}${p.skillTier}`}player={p} onClickDelete={handlePlayerDelete} onModifyPlayer={handlePlayerModify}/>)}
        </div>
        <div className=''> <p className='text-right' >Registered players: {registeredPlayers.length}</p> </div>
      </div>);
  };

  return (
    <div className='p-1'>
      {PlayerView()}
      <AddPlayerDialog 
        open={addPlayerDialogOpen}
        handlePlayerAdd={handlePlayerAdd}
        handlePlayerModify={handlePlayerModify} />
    </div>
  );
}


