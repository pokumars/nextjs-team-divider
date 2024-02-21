import { Team } from '@/types/Player';
import React from 'react';

type TeamViewProps = {
  team: Team
}

export const TeamView = ({ team }: TeamViewProps) => {
  return (
    <div className='p-5 pb-5 mr-2 mt-2 rounded-lg bg-sky-200'>
      <h3 className='text-xl mb-2' >Team {team.teamName}</h3>
      <ul className='mb-4'>
        {team.teamPlayers.map(p => <li key={p.id} >{p.name} {p.skillTier}</li>)}
      </ul>

      <p className='text-xs' >team strength: {team.teamStrength}</p>
      <p className='text-xs' >team size: {team.teamPlayers.length}</p>
    </div>
  );
};
