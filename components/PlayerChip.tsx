import { Player, skillTierNames } from '@/types/Player';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


interface PlayerListChipProps {
  player: Player;
  onClickDelete: (p:Player) => void;
}

export default function PlayerChip({ player, onClickDelete }: PlayerListChipProps) {
  const skillTierNum = player[1];

  return (
    <div className='border-solid border-2 border-sky-500 hover:border-dashed m-1 inline-flex px-5 rounded-full ' >
      <span className='mr-2'>
        <span className='block'>{player[0]}</span>
        <span className='block italic text-sm'>{skillTierNames[skillTierNum]}</span>
      </span>
      <IconButton aria-label="delete" onClick={() => onClickDelete(player)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
