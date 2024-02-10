import { Player, skillTierNames } from '@/types/Player';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Typography } from '@mui/material';
import ModifyPlayerDialog from './ModifyPlayerDialog';

interface PlayerListChipProps {
  player: Player;
  onClickDelete: (p:Player) => void;
  onModifyPlayer: (p:Player) => void;
}

export default function PlayerChip({ player, onClickDelete, onModifyPlayer }: PlayerListChipProps) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (p?: Player) => {
    setOpen(false);
    p && onModifyPlayer(p);
  };

  // To make a div accessible as a button, you make it possble to navigate to it by tab using the 
  // tabIndex, give it  role of button. Because the Enter and Space keys are expected to fire the onClick event 
  // for an accessible button, we need to add the functionality that hitting either key triggers the button. 
  return (<>
    <div role='button' tabIndex={0} className='m-1 inline-flex pl-5 pr-2 rounded-full bg-sky-50' onClick={handleClickOpen} >
      <span className='mr-2'>
        <span className='block'>{player.name}</span>
        <span className='block italic text-sm'>{skillTierNames[player.skillTier]}</span>
      </span>
      <IconButton aria-label="delete" onClick={() => onClickDelete(player)} color='error' >
        <DeleteIcon />
      </IconButton>
    </div>
    <ModifyPlayerDialog 
      player={player}
      open={open}
      onClose={handleClose}/>

  </>
  );
}
//I am not using the Material UI chip because it is not as customizable.
//I want the name and then I want the skill level in that same chip


// const skillTierNum = player.skillTier;
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);
 
//   const onclickPlayerChip = () => {
//     console.log('onclickPlayerChip pressed');
//     setOpen(true);
//   };


//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };



