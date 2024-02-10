import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FormControl } from '@mui/material';

export interface AddPlayerDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function AddPlayerDialog(props: AddPlayerDialogProps) {
  const { open } = props;
  const [value, setValue] = React.useState<number | undefined>(1);
  
  const handleClickOpen = () => {
  };

  const handleClose = () => {
  };

  return (
    <React.Fragment>
      <Button variant="contained" startIcon={<PersonAddIcon />} onClick={handleClickOpen}>
        Add player
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Player</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add player name and their skill level relative to other players. Higher number is higher skill level.
          </DialogContentText>
          <FormControl className='block' >
            <TextField
              autoFocus
              margin="dense"
              id="player-name"
              label="Player name"
              type="text"
              variant="outlined"
              
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
            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}



// <label for="quantity">Quantity (between 1 and 5):</label>
// <input type="text" inputmode="numeric" pattern="[1-5]*" min="1" max="5"><br><br>




