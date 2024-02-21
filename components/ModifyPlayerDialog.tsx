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
import { generatePlayerConfigSchema } from '@/utils/schemas';
import { ValidationError } from 'yup';
import CustomTextField from './CustomTextField';

const defaultPlayerErrors = { name: true, nameErrMsg: ' ', skillTier: true, skillTierErrMsg: ' ' };


export interface ModifyPlayerDialogProps {
  open: boolean;
  onClose: (player?: Player) => void;
  player: Player;
}

export default function ModifyPlayerDialog(props: ModifyPlayerDialogProps) {
  const { open, onClose, player } = props;
  const [playerValue, setPlayerValue] = React.useState<Player>({ ...player });
  const [playerErrors, setPlayerErrors] = React.useState<typeof defaultPlayerErrors>(defaultPlayerErrors);
  const [disableDoneBtn, setDisableDoneBtn] = React.useState(true);


  const handleClose = () => {
    onClose(playerValue);
    // save changes
  };
  const handleCancel = () => {
    setPlayerValue({ ...player });
    console.log('handleCancel ', 'playerValue ', playerValue, 'player ', player);

    onClose();
  };

  /*
  - modify and validate in here
  - pass modified value to the registered players list to replace previous one
  -   */
  const handlePlayerChange = (fieldName: string, value: any) => {
    console.log('handlePlayerChange ', fieldName, value);
    // TODO: pass down dynamic skill level
    const playerSchema = generatePlayerConfigSchema(5);
    const newPlayerValue = { ...playerValue,  [fieldName]: value };
    setPlayerValue(playerSchema.cast(newPlayerValue)); // cast because updating the numerical value turns them to strings
    setDisableDoneBtn(false);

    playerSchema.validate(newPlayerValue,  { abortEarly: false }).then((res) => {
      // No validation errors, clear the errors and set isValid to true
      setPlayerErrors({ ...defaultPlayerErrors });
    }).catch((err: ValidationError) => {
      // https://github.com/jquense/yup?tab=readme-ov-file#validationerrorerrors-string--arraystring-value-any-path-string
      const errorMessages = err.inner.reduce((acc, curVal) => {
        const tempErrMsg = { [`${curVal.path}`]: false, [`${curVal.path}ErrMsg`]: curVal.message };
        setDisableDoneBtn(true);
        return { ...acc, ...tempErrMsg  };
      }, {});
        // resets all values to as if the validation passed and then adds the current errors
      setPlayerErrors({ ...defaultPlayerErrors, ...errorMessages });
    });
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
            <CustomTextField
              autoFocus
              margin="dense"
              id="player-name"
              label="Player name"
              type="text"
              name='name'
              value={playerValue?.name}
              isValid={playerErrors.name}
              errorMessage={playerErrors.nameErrMsg}
              customOnChange={handlePlayerChange}  
              // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
            />
          </FormControl>

          <FormControl>
            <CustomTextField 
              autoFocus
              margin="dense"
              id="skill-level"
              label="Skill Level"
              name='skillTier'
              type="number"
              value={playerValue?.skillTier}
              isValid={playerErrors.skillTier}
              errorMessage={playerErrors.skillTierErrMsg}
              customOnChange={handlePlayerChange} 
            />
          </FormControl>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button disabled={disableDoneBtn} onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}