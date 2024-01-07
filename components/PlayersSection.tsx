import { Player, skillTierNames } from '@/types/Player';
import React from 'react';
import PlayerChip from './PlayerChip';

interface PlayersComponentProps {
  numOfTiers: number;
  registeredPlayers: Player[]
  onClickDelete: (p:Player) => void
}
/**Players Section of app */
export default function PlayersSection(props: PlayersComponentProps) {
  const { numOfTiers, registeredPlayers, onClickDelete } = props; 
  return (
    <div>
      <div>{registeredPlayers.map(
        (p) => <PlayerChip key={`${p[0]}${p[1]}`} player={p} onClickDelete={onClickDelete}/>)}
        
      </div>
      <div> <p>Registered players {registeredPlayers.length}</p> </div>
    </div>
  );
}


