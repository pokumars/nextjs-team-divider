import { Teams } from '@/types/Player';
import React from 'react';
import { TeamView } from './TeamView';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { teamsToString } from '@/utils/functions';
import Tooltip from '@mui/material/Tooltip';


type AllTeamsViewProps = {
  teams: Teams
}
const copyTeamsString = 'Copy Teams';
const teamsCopiedString = 'Copied!';

export const AllTeamsView = ({ teams }: AllTeamsViewProps) => {
  const [copyBtnTooltipText, setCopyBtnTooltipText] = React.useState(copyTeamsString);

  const copyTeams = () => {
    setCopyBtnTooltipText(teamsCopiedString);
    navigator.clipboard.writeText(teamsToString(teams));
  };

  const handleCloseTooltipAfterCopying= () => {
    setCopyBtnTooltipText(copyTeamsString);
  };

  return (
    <div className=''>
      <span className='text-2xl'>Teams</span>
      <Tooltip onMouseOut={handleCloseTooltipAfterCopying} title={copyBtnTooltipText} arrow >
        <IconButton aria-label="delete from our records" onClick={() => copyTeams()} color='info' >
          <ContentCopyIcon />
        </IconButton>

      </Tooltip>
 
      <div className='flex flex-wrap'>
        {teams.map(t => <TeamView team={t} key={t.teamName} />)}
      </div>      
    </div>
  );
};
