import { Player, skillTierNames } from '@/types/Player';
import React from 'react';
import PlayerChip from './PlayerChip';
import AddPlayerDialog from './AddPlayerDialog';

interface PlayersComponentProps {
  numOfTiers: number;
  registeredPlayers: Player[]
  onClickDelete: (p:Player) => void
}
/**Players Section of app */
export default function PlayersSection(props: PlayersComponentProps) {
  const { numOfTiers, registeredPlayers, onClickDelete } = props;

  const PlayerView = () => {
    return registeredPlayers.length < 1 
      ? <p>No players added.</p>
      : (<div className='border-solid border-2 border-orange-300 rounded-lg p-5 m-5'>
        <div>{registeredPlayers.map(
          (p) => <PlayerChip key={`${p[0]}${p[1]}`} player={p} onClickDelete={onClickDelete}/>)}
        </div>
        <div className=''> <p className='text-right' >Registered players: {registeredPlayers.length}</p> </div>
      </div>);
  };

  return (
    <div className='p-1'>
      {PlayerView()}
      <AddPlayerDialog />
    </div>
  );
}


