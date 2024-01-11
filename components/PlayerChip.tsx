import { Player, skillTierNames } from '@/types/Player';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


interface PlayerListChipProps {
  player: Player;
  onClickDelete: (p:Player) => void;
}

export default function PlayerChip({ player, onClickDelete }: PlayerListChipProps) {
  const skillTierNum = player.skillTier;

  return (
    <div className='border-solid border-2 border-sky-500 hover:border-dashed m-1 inline-flex pl-5 pr-2 rounded-full ' >
      <span className='mr-2'>
        <span className='block'>{player.name}</span>
        <span className='block italic text-sm'>{skillTierNames[skillTierNum]}</span>
      </span>
      <IconButton aria-label="delete" onClick={() => onClickDelete(player)} color='error' >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
