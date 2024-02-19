import { Teams } from '@/types/Player';
import React from 'react';
import { TeamView } from './TeamView';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type AllTeamsViewProps = {
  teams: Teams
}

export const AllTeamsView = ({ teams }: AllTeamsViewProps) => {
  const copyTeams = () => {
    console.log('copy btn pressed');
  };

  return (
    <div className=''>
      <span className='text-2xl'>Teams</span>
      <IconButton aria-label="delete from our records" onClick={() => copyTeams()} color='info' >
        <ContentCopyIcon />
      </IconButton>
      <div className='flex flex-wrap'>
        {teams.map(t => <TeamView team={t} key={t.teamName} />)}
      </div>      
    </div>
  );
};
