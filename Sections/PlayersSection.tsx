import { Player, Teams, skillTierNames } from '@/types/Player';
import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlayerChip from '../components/PlayerChip';
import AddPlayerDialog from '../components/AddPlayerDialog';
import { testPlayers } from '@/utils/constants';
import { Button } from '@mui/material';
import { formulateTeams } from '@/utils/functions';
import { AllTeamsView } from '@/components/AllTeamsView';

interface PlayersComponentProps {
  numOfTiers: number;
  numOfTeams: number;
  //registeredPlayers: Player[]
  //onClickDelete: (p:Player) => void
}
/**Players Section of app */
export default function PlayersSection(props: PlayersComponentProps) {
  const { numOfTiers, numOfTeams } = props;
  const [addPlayerDialogOpen, setAddPlayerDialogOpen] = React.useState<boolean>(false);
  const [registeredPlayers, setRegisteredPlayers] = React.useState<Array<Player>>(testPlayers);
  const [generatedTeam, setGeneratedTeam] = React.useState<Teams>([]);

  const handlePlayerDelete = (playerToBeDeleted: Player) => {
    setRegisteredPlayers(registeredPlayers.filter(
      (p) => !(p.id === playerToBeDeleted.id)
    ));
  };

  const togglePlayerComingToSession = (playerToSession: Player) => {
    setRegisteredPlayers(registeredPlayers.map(
      (p) => p.id === playerToSession.id ? { ...p, comingToSession : !p.comingToSession } : p));
  };

  const handlePlayerModify = (p: Player) => {
    //when you click on the player chip. Opens dialog for player modification
    console.log('clicked player ', p);
    const modifiedRegisteredPlayerArray = registeredPlayers.map((rp) => rp.id === p.id ? p : rp);
    setRegisteredPlayers(modifiedRegisteredPlayerArray);
  };

  const handlePlayerAdd = (player: Player) => {
    //for adding a completely new player
    setRegisteredPlayers([...registeredPlayers, player]);
  };

  const generateTeams = () => {
    const signedUpPlayers = registeredPlayers.reduce((acc: Array<Player>, cur) => {
      if ( cur.comingToSession=== true ) {
        acc.push(cur);
      }
      return acc;
    }, []);

    setGeneratedTeam(formulateTeams(signedUpPlayers, numOfTeams, numOfTiers));
  };

  const PlayerPoolView = () => {
    // player pool and session players both rely on registeredPlayers as their source of truth.
    const poolPlayers = registeredPlayers.reduce((acc: Array<Player>, cur) => {
      if ( cur.comingToSession=== false ) {
        acc.push(cur);
      }
      return acc;
    }, []);

    return registeredPlayers.length < 1 
      ? (<div className='rounded-lg p-5 my-3 bg-red-200'>
        <p>No players in player pool.</p> <p> Player pool is the set of people who may sign up for your sessions.</p>
      </div>)
      : (<div className='rounded-lg p-5 my-3 bg-sky-200'>
        <h2 className='text-2xl'>Player Pool</h2>
        <p>These are the players who are part of your group and may sign up to a session</p>
        <div>{poolPlayers.map(
          (p) => <PlayerChip key={`${p.name}${p.skillTier}`}player={p} onClickDelete={handlePlayerDelete} onClickComingToSession={togglePlayerComingToSession} onModifyPlayer={handlePlayerModify}/>)}
        </div>
        <div className=''> <p className='text-right' >Registered players: {poolPlayers.length} / {registeredPlayers.length}</p> </div>
      </div>);
  };

  const SessionPlayerView = () => {
    const signedUpPlayers = registeredPlayers.reduce((acc: Array<Player>, cur) => {
      if ( cur.comingToSession=== true ) {
        acc.push(cur);
      }
      return acc;
    }, []);

    return signedUpPlayers.length < 1 
      ? (<div className='rounded-lg p-5 my-3 bg-red-200'>
        <p>No players added to upcoming session.</p>
        <p> Click the add icon in the player pool to add players for the next session. The teams are generated out of these players.</p>
      </div>)
      : (<div className='rounded-lg p-5 my-3 bg-sky-200'>
        <h2 className='text-2xl'>Players coming this session</h2>
        <p>These are the players who are coming to the upcoming session.</p>
        <div>{signedUpPlayers.map(
          (p) => <PlayerChip key={`${p.name}${p.skillTier}`}player={p} onClickRemove={togglePlayerComingToSession} onModifyPlayer={handlePlayerModify}/>)}
        </div>
        <div className=''> <p className='text-right' >Session players: {signedUpPlayers.length} / {registeredPlayers.length}</p> </div>
        <Button variant="contained"
          startIcon={<PersonAddIcon />} 
          disabled={(signedUpPlayers.length/numOfTeams)<= 1} 
          onClick={generateTeams} >
        Generate teams
        </Button>
      </div>);
  };

  const generatedTeamsView = () => {
    return <AllTeamsView teams={generatedTeam} />;
  };

  return (
    <div className='p-1'>

      {generatedTeamsView()}
      {SessionPlayerView()}
      {PlayerPoolView()}
      <AddPlayerDialog 
        open={addPlayerDialogOpen}
        handlePlayerAdd={handlePlayerAdd}
        handlePlayerModify={handlePlayerModify} />
    </div>
  );
}


