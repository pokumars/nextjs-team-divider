import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@mui/material';
import { Player } from '@/types/Player';

export interface ModifyPlayerDialogProps {
  open: boolean;
  onClose: (player: Player) => void;
  player: Player;
}

export default function ModifyPlayerDialog(props: ModifyPlayerDialogProps) {
  const { open, onClose, player } = props;
  const [playerValue, setPlayerValue] = React.useState<Player>(player);
  const [enableDoneButton, setEnableDoneButton] = React.useState(false);


  const handleClose = () => {
    onClose(playerValue);
  };



  return (
    <React.Fragment>
      <Dialog open={open} >
        <DialogTitle>Edit player</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit player name and their skill level relative to other players. Higher number is higher skill level.
          </DialogContentText>
          <FormControl className='block' >
            <TextField
              autoFocus
              margin="dense"
              id="player-name"
              label="Player name"
              type="text"
              variant="outlined"
              value={playerValue?.name}
  
              // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
            />
          </FormControl>

          <FormControl>
            <TextField 
              name='skill-level'
              autoFocus
              margin="dense"
              id="skill-level"
              label="Skill Level"
              value={playerValue?.skillTier}
            />
          </FormControl>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={enableDoneButton} onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}